import { NextRequest, NextResponse } from 'next/server';
import { createRateLimiter } from '@/lib/utils/rate-limit';

/**
 * POST /api/admin/setup-nextcloud-groups
 *
 * Creates all required Nextcloud groups for Felicloud paid plans
 * This endpoint should be called once during initial setup
 *
 * Security:
 * - Protected by admin secret token (Authorization: Bearer YOUR_ADMIN_SECRET)
 * - Rate limited to 1 request per hour
 * - Can be permanently disabled via ADMIN_SETUP_COMPLETED env variable
 * - Optional IP whitelist via ADMIN_ALLOWED_IPS
 *
 * IMPORTANT: Set ADMIN_SETUP_COMPLETED=true in .env after first successful run
 */

// Very strict rate limiter for admin endpoints (1 request per hour)
const adminRateLimiter = createRateLimiter({
  maxRequests: 1,
  windowMs: 60 * 60 * 1000, // 1 hour
});

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

async function createGroup(groupName: string): Promise<{ success: boolean; message: string }> {
  const nextcloudUrl = process.env.NEXTCLOUD_URL;
  const adminUser = process.env.NEXTCLOUD_ADMIN_USER;
  const adminPassword = process.env.NEXTCLOUD_ADMIN_PASSWORD;

  if (!nextcloudUrl || !adminUser || !adminPassword) {
    throw new Error('Missing Nextcloud configuration in environment variables');
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
      return { success: true, message: `Created group: "${groupName}"` };
    }
    // Status code 102 = group already exists (this is OK)
    else if (result.ocs.meta.statuscode === 102) {
      return { success: true, message: `Group already exists: "${groupName}"` };
    }
    else {
      return { success: false, message: `Failed to create group "${groupName}": ${result.ocs.meta.message}` };
    }
  } catch (error) {
    console.error(`Error creating group "${groupName}":`, error);
    return { success: false, message: `Error creating group "${groupName}": ${error instanceof Error ? error.message : 'Unknown error'}` };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Security check 1: Apply rate limiting (1 request per hour)
    const rateLimitResult = await adminRateLimiter.check(request, '/api/admin');
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { error: 'Too many admin requests', message: rateLimitResult.error },
        { status: 429 }
      );
      adminRateLimiter.addHeaders(response.headers, rateLimitResult);
      return response;
    }

    // Security check 2: Endpoint disabled after initial setup
    const setupCompleted = process.env.ADMIN_SETUP_COMPLETED === 'true';
    if (setupCompleted) {
      return NextResponse.json(
        {
          error: 'Setup already completed',
          message: 'This endpoint has been disabled for security. All groups have been created successfully.',
          hint: 'Set ADMIN_SETUP_COMPLETED=false in .env to re-enable temporarily.',
        },
        { status: 403 }
      );
    }

    // Security check 3: Optional IP whitelist
    const allowedIps = process.env.ADMIN_ALLOWED_IPS?.split(',').map(ip => ip.trim());
    if (allowedIps && allowedIps.length > 0) {
      const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
                       request.headers.get('x-real-ip') ||
                       'unknown';

      if (!allowedIps.includes(clientIp)) {
        console.warn(`⚠️ Admin access denied from unauthorized IP: ${clientIp}`);
        return NextResponse.json(
          { error: 'Access denied', message: 'Your IP address is not whitelisted for admin access.' },
          { status: 403 }
        );
      }
    }

    // Security check 4: Verify admin secret token
    const authHeader = request.headers.get('authorization');
    const adminSecret = process.env.ADMIN_SECRET;

    if (!adminSecret) {
      return NextResponse.json(
        { error: 'Admin secret not configured on server' },
        { status: 500 }
      );
    }

    if (!authHeader || authHeader !== `Bearer ${adminSecret}`) {
      console.warn('⚠️ Invalid admin authentication attempt');
      return NextResponse.json(
        { error: 'Unauthorized: Invalid or missing admin secret' },
        { status: 401 }
      );
    }

    // Required groups - Option A: One group per plan
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

    console.log('🚀 Setting up Nextcloud groups for Felicloud...');
    console.log('Groups to create (Option A - One group per plan):', requiredGroups);

    const results = [];
    let successCount = 0;
    let failureCount = 0;

    for (const group of requiredGroups) {
      const result = await createGroup(group);
      results.push({ group, ...result });

      if (result.success) {
        successCount++;
        console.log(`✅ ${result.message}`);
      } else {
        failureCount++;
        console.error(`❌ ${result.message}`);
      }
    }

    console.log('\n📊 Summary:');
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Failed: ${failureCount}`);

    if (failureCount === 0) {
      console.log('\n✨ All groups are ready! You can now process paid customers.');
      return NextResponse.json({
        success: true,
        message: 'All Nextcloud groups created successfully',
        summary: {
          total: requiredGroups.length,
          success: successCount,
          failed: failureCount,
        },
        results,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Some groups failed to create',
        summary: {
          total: requiredGroups.length,
          success: successCount,
          failed: failureCount,
        },
        results,
      }, { status: 500 });
    }
  } catch (error) {
    console.error('💥 Setup failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Setup failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
