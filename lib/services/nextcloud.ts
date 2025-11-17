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
    const createUserResponse = await fetch(`${nextcloudUrl}/ocs/v1.php/cloud/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
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

    if (createResult.ocs.meta.statuscode !== 100) {
      return {
        success: false,
        message: createResult.ocs.meta.message || 'Failed to create user',
      };
    }

    // Step 2: Add user to groups (if any)
    for (const group of groups) {
      await fetch(`${nextcloudUrl}/ocs/v1.php/cloud/users/${username}/groups`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'OCS-APIRequest': 'true',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          groupid: group,
        }),
      });
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

    const response = await fetch(`${nextcloudUrl}/ocs/v1.php/cloud/users/${username}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
      },
    });

    const result: NextcloudResponse = await response.json();

    // Status code 100 means user exists
    return result.ocs.meta.statuscode === 100;
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

    const response = await fetch(`${nextcloudUrl}/ocs/v1.php/cloud/users/${username}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Basic ${auth}`,
        'OCS-APIRequest': 'true',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        key: 'quota',
        value: quota,
      }),
    });

    const result: NextcloudResponse = await response.json();

    return {
      success: result.ocs.meta.statuscode === 100,
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
