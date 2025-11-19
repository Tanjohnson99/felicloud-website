/**
 * Setup Script: Create Required Nextcloud Groups
 *
 * This script creates all the groups needed for Felicloud's paid user management.
 * Run this once before processing your first paid customer.
 *
 * Usage:
 *   npx tsx scripts/setup-nextcloud-groups.ts
 */

interface NextcloudResponse {
  ocs: {
    meta: {
      status: string;
      statuscode: number;
      message: string;
    };
    data: any;
  };
}

async function createGroup(groupName: string): Promise<boolean> {
  const nextcloudUrl = process.env.NEXTCLOUD_URL;
  const adminUser = process.env.NEXTCLOUD_ADMIN_USER;
  const adminPassword = process.env.NEXTCLOUD_ADMIN_PASSWORD;

  if (!nextcloudUrl || !adminUser || !adminPassword) {
    throw new Error('Missing Nextcloud configuration in .env.local');
  }

  try {
    const auth = Buffer.from(`${adminUser}:${adminPassword}`).toString('base64');

    const response = await fetch(`${nextcloudUrl}/ocs/v2.php/cloud/groups`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        groupid: groupName,
      }),
    });

    const result: NextcloudResponse = await response.json();

    // Status code 200 = success
    if (result.ocs.meta.statuscode === 200) {
      console.log(`✅ Created group: "${groupName}"`);
      return true;
    }
    // Status code 102 = group already exists (this is OK)
    else if (result.ocs.meta.statuscode === 102) {
      console.log(`ℹ️  Group already exists: "${groupName}"`);
      return true;
    }
    else {
      console.error(`❌ Failed to create group "${groupName}":`, result.ocs.meta.message);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error creating group "${groupName}":`, error);
    return false;
  }
}

async function setupGroups() {
  console.log('🚀 Setting up Nextcloud groups for Felicloud...\n');

  // Required groups - Option A: One group per plan
  // This provides maximum granularity for user management
  const requiredGroups = [
    // Monthly Plans
    '500GB_Monthly',
    '1TB_Monthly',
    '2TB_Monthly',
    // Annual Plans
    '500GB_Annual',
    '1TB_Annual',
    '2TB_Annual',
    // Lifetime Plans
    '500GB_Lifetime',
    '1TB_Lifetime',
    '2TB_Lifetime',
  ];

  console.log('Groups to create (Option A - One group per plan):');
  requiredGroups.forEach(group => console.log(`  - ${group}`));
  console.log('');

  let successCount = 0;
  let failureCount = 0;

  for (const group of requiredGroups) {
    const success = await createGroup(group);
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failureCount}`);

  if (failureCount === 0) {
    console.log('\n✨ All groups are ready! You can now process paid customers.');
  } else {
    console.log('\n⚠️  Some groups failed to create. Please check the errors above.');
    process.exit(1);
  }
}

// Run the setup
setupGroups().catch((error) => {
  console.error('💥 Setup failed:', error);
  process.exit(1);
});
