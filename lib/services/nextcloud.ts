/**
 * Nextcloud OCS API Service
 * Handles user creation and management via Nextcloud API
 * All credentials are kept on the SERVER - never exposed to the client
 */

interface CreateUserParams {
  username: string;
  password: string;
  email: string;
  displayName: string;
  groups?: string[];
  quota?: number; // Quota in bytes
}

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

/**
 * Create a new user in Nextcloud
 */
export async function createNextcloudUser({
  username,
  password,
  email,
  displayName,
  groups = [],
  quota,
}: CreateUserParams): Promise<{ success: boolean; message: string }> {
  // Validate environment variables
  if (!process.env.NEXTCLOUD_URL || !process.env.NEXTCLOUD_ADMIN_USER || !process.env.NEXTCLOUD_ADMIN_PASSWORD) {
    throw new Error('Nextcloud configuration is missing. Please check your .env.local file.');
  }

  const nextcloudUrl = process.env.NEXTCLOUD_URL;
  const adminUser = process.env.NEXTCLOUD_ADMIN_USER;
  const adminPassword = process.env.NEXTCLOUD_ADMIN_PASSWORD;

  // Add free group if specified in env
  const defaultGroup = process.env.NEXTCLOUD_FREE_GROUP;
  if (defaultGroup && !groups.includes(defaultGroup)) {
    groups.push(defaultGroup);
  }

  try {
    // Create basic auth header
    const auth = Buffer.from(`${adminUser}:${adminPassword}`).toString('base64');

    // Step 1: Create the user
    const createUserResponse = await fetch(`${nextcloudUrl}/ocs/v2.php/cloud/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        userid: username,
        password: password,
        email: email,
        displayName: displayName,
      }),
    });

    const createResult: NextcloudResponse = await createUserResponse.json();

    console.log('Nextcloud API Response:', {
      statuscode: createResult.ocs.meta.statuscode,
      status: createResult.ocs.meta.status,
      message: createResult.ocs.meta.message,
    });

    // API v2 returns statuscode 200 for success (not 100 like v1)
    if (createResult.ocs.meta.statuscode !== 200) {
      console.error('Nextcloud user creation failed:', {
        statuscode: createResult.ocs.meta.statuscode,
        message: createResult.ocs.meta.message,
        username,
      });
      return {
        success: false,
        message: createResult.ocs.meta.message || 'Failed to create user',
      };
    }

    // Step 2: Add user to groups (if any)
    for (const group of groups) {
      console.log(`Adding user ${username} to group: ${group}`);
      const groupResponse = await fetch(`${nextcloudUrl}/ocs/v2.php/cloud/users/${username}/groups`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'OCS-APIRequest': 'true',
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          groupid: group,
        }),
      });
      const groupResult: NextcloudResponse = await groupResponse.json();
      // API v2 returns statuscode 200 for success
      if (groupResult.ocs.meta.statuscode !== 200) {
        console.warn(`Failed to add user to group ${group}:`, groupResult.ocs.meta.message);
      } else {
        console.log(`Successfully added user to group ${group}`);
      }
    }

    // Step 3: Set quota if provided
    if (quota) {
      console.log(`Setting quota for user ${username}: ${quota} bytes`);
      const quotaResult = await setUserQuota(username, `${quota} B`);
      if (!quotaResult.success) {
        console.warn(`User created but quota setting failed: ${quotaResult.message}`);
      } else {
        console.log(`Quota set successfully for user ${username}`);
      }
    }

    return {
      success: true,
      message: 'User created successfully',
    };
  } catch (error) {
    console.error('Nextcloud API error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Check if a username already exists in Nextcloud
 */
export async function checkUserExists(username: string): Promise<boolean> {
  if (!process.env.NEXTCLOUD_URL || !process.env.NEXTCLOUD_ADMIN_USER || !process.env.NEXTCLOUD_ADMIN_PASSWORD) {
    throw new Error('Nextcloud configuration is missing');
  }

  const nextcloudUrl = process.env.NEXTCLOUD_URL;
  const adminUser = process.env.NEXTCLOUD_ADMIN_USER;
  const adminPassword = process.env.NEXTCLOUD_ADMIN_PASSWORD;

  try {
    const auth = Buffer.from(`${adminUser}:${adminPassword}`).toString('base64');

    const response = await fetch(`${nextcloudUrl}/ocs/v2.php/cloud/users/${username}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
        'Accept': 'application/json',
      },
    });

    const result: NextcloudResponse = await response.json();

    // API v2: statuscode 200 means user exists, 404 means not found
    return result.ocs.meta.statuscode === 200;
  } catch (error) {
    console.error('Error checking user existence:', error);
    return false;
  }
}

/**
 * Set user quota in Nextcloud
 */
export async function setUserQuota(username: string, quota: string): Promise<{ success: boolean; message: string }> {
  if (!process.env.NEXTCLOUD_URL || !process.env.NEXTCLOUD_ADMIN_USER || !process.env.NEXTCLOUD_ADMIN_PASSWORD) {
    throw new Error('Nextcloud configuration is missing');
  }

  const nextcloudUrl = process.env.NEXTCLOUD_URL;
  const adminUser = process.env.NEXTCLOUD_ADMIN_USER;
  const adminPassword = process.env.NEXTCLOUD_ADMIN_PASSWORD;

  try {
    const auth = Buffer.from(`${adminUser}:${adminPassword}`).toString('base64');

    const response = await fetch(`${nextcloudUrl}/ocs/v2.php/cloud/users/${username}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        key: 'quota',
        value: quota,
      }),
    });

    const result: NextcloudResponse = await response.json();

    // API v2 returns statuscode 200 for success
    return {
      success: result.ocs.meta.statuscode === 200,
      message: result.ocs.meta.message,
    };
  } catch (error) {
    console.error('Error setting quota:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Update user quota (wrapper for setUserQuota with bytes input)
 */
export async function updateUserQuota(username: string, quotaInBytes: number): Promise<{ success: boolean; message: string }> {
  return setUserQuota(username, `${quotaInBytes} B`);
}
