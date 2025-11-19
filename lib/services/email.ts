import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send email using SMTP configuration
 * This runs on the SERVER only - credentials are never exposed to the client
 */
export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  // Validate environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error('SMTP configuration is missing. Please check your .env.local file.');
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Send email
  const info = await transporter.sendMail({
    from: `${process.env.SMTP_FROM_NAME || 'Felicloud'} <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
    to,
    subject,
    text,
    html,
  });

  return info;
}

/**
 * Send contact form email to admin
 */
export async function sendContactEmail(name: string, email: string, message: string) {
  const adminEmail = process.env.ADMIN_EMAIL || 'contact@felicloud.com';

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  return sendEmail({
    to: adminEmail,
    subject: `Contact Form: ${name}`,
    html,
    text: `From: ${name} (${email})\n\nMessage:\n${message}`,
  });
}

/**
 * Send email verification link to new user
 * Uses professional email template with logo and structure
 */
export async function sendVerificationEmail(
  email: string,
  fullName: string,
  verificationToken: string,
  locale: string = 'en'
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://felicloud.com';
  const verificationUrl = `${baseUrl}/en/signup/verify?token=${verificationToken}`;

  const { renderVerificationEmail } = await import('../email/templates/verification-email');

  const { subject, html } = renderVerificationEmail({
    email,
    fullName,
    verificationUrl,
    locale,
  });

  return sendEmail({
    to: email,
    subject,
    html,
  });
}

/**
 * Send welcome email to new user
 * Uses professional email template with logo and structure
 */
export async function sendWelcomeEmail(
  email: string,
  username: string,
  tempPassword: string,
  locale: string = 'en'
) {
  const { renderWelcomeEmail } = await import('../email/templates/welcome-email');

  const { subject, html } = renderWelcomeEmail({
    username,
    tempPassword,
    displayName: username.split('@')[0],
    locale,
  });

  return sendEmail({
    to: email,
    subject,
    html,
  });
}

/**
 * Send upgrade confirmation email to existing user
 * Uses professional email template - NO PASSWORD (user keeps existing password)
 */
export async function sendUpgradeEmail(
  email: string,
  username: string,
  newQuota: string,
  newPlan: string,
  locale: string = 'en'
) {
  const { renderUpgradeEmail } = await import('../email/templates/upgrade-email');

  const { subject, html } = renderUpgradeEmail({
    username,
    displayName: username.split('@')[0],
    newQuota,
    newPlan,
    locale,
  });

  return sendEmail({
    to: email,
    subject,
    html,
  });
}
