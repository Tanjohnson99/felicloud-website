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
 * Uses professional email template with logo and structure
 */
export async function notifyAdminPaymentInitiated(
  email: string,
  plan: string,
  billing: string,
  storage: string,
  isUpgrade: boolean,
  locale: string = 'en'
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set, skipping admin notification');
    return;
  }

  const { renderAdminPaymentInitiatedEmail } = await import('../email/templates/admin-payment-initiated');

  const { subject, html } = renderAdminPaymentInitiatedEmail({
    email,
    plan,
    billing,
    storage,
    isUpgrade,
    locale,
  });

  try {
    await sendEmail({
      to: adminEmail,
      subject,
      html,
    });
    console.log(`Admin notification sent for payment initiation: ${email}`);
  } catch (error) {
    console.error('Failed to send admin notification for payment initiation:', error);
    // Don't throw - we don't want to fail the checkout if admin email fails
  }
}

/**
 * Send notification to admin when an account is successfully created
 * Uses professional email template with logo and structure
 */
export async function notifyAdminAccountCreated(
  fullName: string,
  email: string,
  creationTime: Date,
  quota: string = '10 GB',
  locale: string = 'en'
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not set, skipping admin notification');
    return;
  }

  const { renderAdminAccountCreatedEmail } = await import('../email/templates/admin-account-created');

  const { subject, html } = renderAdminAccountCreatedEmail({
    fullName,
    email,
    creationTime,
    quota,
    locale,
  });

  try {
    await sendEmail({
      to: adminEmail,
      subject,
      html,
    });
    console.log(`Admin notification sent for account creation: ${email}`);
  } catch (error) {
    console.error('Failed to send admin notification for account creation:', error);
    // Don't throw - we don't want to fail the signup if admin email fails
  }
}
