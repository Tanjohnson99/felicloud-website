/**
 * Admin Notification Emails
 * Sends notifications to admin about signup events
 */

import { sendEmail } from './email';

/**
 * Send notification to admin when a new signup request is created
 */
export async function notifyAdminSignupRequest(
  fullName: string,
  email: string,
  ipAddress?: string
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set, skipping admin notification');
    return;
  }

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #3b82f6;">New Signup Request</h1>

      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="margin-top: 0; color: #92400e;">🕐 Pending Validation</h2>
        <p style="color: #78350f;">A new signup request has been created and is waiting for the user to verify their email.</p>
      </div>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Request Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Full Name:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Date:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${timestamp}</td>
          </tr>
          ${ipAddress ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>IP Address:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${ipAddress}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          This account will be created once the user has verified their email and completed the registration form.
        </p>
        <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">
          You will receive another notification when the account is actually created.
        </p>
      </div>
    </div>
  `;

  const text = `New Signup Request - PENDING VALIDATION

Request Information:
- Full Name: ${fullName}
- Email: ${email}
- Date: ${timestamp}
${ipAddress ? `- IP Address: ${ipAddress}` : ''}

This account will be created once the user has verified their email and completed the registration form.
You will receive another notification when the account is actually created.`;

  try {
    await sendEmail({
      to: adminEmail,
      subject: `New Signup Request - ${fullName}`,
      html,
      text,
    });
    console.log(`Admin notification sent for signup request: ${email}`);
  } catch (error) {
    console.error('Failed to send admin notification for signup request:', error);
    // Don't throw - we don't want to fail the signup if admin email fails
  }
}

/**
 * Send notification to admin when a customer initiates a payment
 */
export async function notifyAdminPaymentInitiated(
  email: string,
  plan: string,
  billing: string,
  storage: string,
  isUpgrade: boolean
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set, skipping admin notification');
    return;
  }

  const timestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const actionType = isUpgrade ? 'Upgrade' : 'New Purchase';
  const actionColor = isUpgrade ? '#f59e0b' : '#3b82f6';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: ${actionColor};">Payment Initiated - ${actionType}</h1>

      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="margin-top: 0; color: #92400e;">🛒 Lead Alert</h2>
        <p style="color: #78350f;">A customer has initiated the checkout process. This is a potential lead even if they don't complete the purchase.</p>
      </div>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Customer Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Action:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${actionType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Plan:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${plan}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Billing:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${billing}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Storage:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${storage}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Date:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${timestamp}</td>
          </tr>
        </table>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          The customer has been redirected to Stripe for payment. You will receive another notification if the payment is completed.
        </p>
      </div>
    </div>
  `;

  const text = `Payment Initiated - ${actionType}

Customer Information:
- Email: ${email}
- Action: ${actionType}
- Plan: ${plan}
- Billing: ${billing}
- Storage: ${storage}
- Date: ${timestamp}

The customer has been redirected to Stripe for payment. You will receive another notification if the payment is completed.`;

  try {
    await sendEmail({
      to: adminEmail,
      subject: `Payment Initiated - ${email} (${actionType})`,
      html,
      text,
    });
    console.log(`Admin notification sent for payment initiation: ${email}`);
  } catch (error) {
    console.error('Failed to send admin notification for payment initiation:', error);
    // Don't throw - we don't want to fail the checkout if admin email fails
  }
}

/**
 * Send notification to admin when an account is successfully created
 */
export async function notifyAdminAccountCreated(
  fullName: string,
  email: string,
  requestedAt: Date,
  quota: string = '10 GB'
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set, skipping admin notification');
    return;
  }

  const requestTimestamp = requestedAt.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const createdTimestamp = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const nextcloudUrl = process.env.NEXTCLOUD_URL || 'https://cloud.felicloud.com';
  const groupName = process.env.NEXTCLOUD_FREE_GROUP || 'Free Users';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #10b981;">New Account Created</h1>

      <div style="background-color: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="margin-top: 0; color: #065f46;">✓ Account Active</h2>
        <p style="color: #047857;">A new Felicloud account has been successfully created and is now accessible.</p>
      </div>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Account Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Full Name:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Quota:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${quota}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Group:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${groupName}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Timeline</h3>
        <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
          <strong>Signup Requested:</strong> ${requestTimestamp}
        </p>
        <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
          <strong>Account Created:</strong> ${createdTimestamp}
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          The account is now accessible at: <a href="${nextcloudUrl}" style="color: #3b82f6;">${nextcloudUrl}</a>
        </p>
      </div>
    </div>
  `;

  const text = `New Account Created - ACTIVE ✓

A new Felicloud account has been successfully created:

Account Information:
- Full Name: ${fullName}
- Email: ${email}
- Quota: ${quota}
- Group: ${groupName}

Timeline:
- Signup Requested: ${requestTimestamp}
- Account Created: ${createdTimestamp}

The account is now accessible at: ${nextcloudUrl}`;

  try {
    await sendEmail({
      to: adminEmail,
      subject: `New Account Created - ${email}`,
      html,
      text,
    });
    console.log(`Admin notification sent for account creation: ${email}`);
  } catch (error) {
    console.error('Failed to send admin notification for account creation:', error);
    // Don't throw - we don't want to fail the signup if admin email fails
  }
}
