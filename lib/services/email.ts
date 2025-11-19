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
 */
export async function sendVerificationEmail(email: string, fullName: string, verificationToken: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://felicloud.com';
  const verificationUrl = `${baseUrl}/en/signup/verify?token=${verificationToken}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #3b82f6;">Verify Your Email Address</h1>
      <p>Hello ${fullName},</p>
      <p>Thank you for your interest in Felicloud!</p>

      <p>To complete your registration and create your free 10 GB account, please click the button below:</p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #3b82f6; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
          Complete My Registration
        </a>
      </div>

      <p style="color: #6b7280; font-size: 14px;">
        Or copy this link into your browser:
      </p>
      <p style="color: #3b82f6; font-size: 14px; word-break: break-all;">
        ${verificationUrl}
      </p>

      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;">
        <p style="color: #92400e; margin: 0; font-size: 14px;">
          ⏱️ This link is valid for <strong>24 hours</strong>.
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          If you didn't request this registration, you can safely ignore this email.
        </p>
        <p style="color: #6b7280; font-size: 14px;">
          Best regards,<br>
          The Felicloud Team
        </p>
      </div>
    </div>
  `;

  const text = `Verify Your Email Address - Felicloud

Hello ${fullName},

Thank you for your interest in Felicloud!

To complete your registration and create your free 10 GB account,
please click the link below:

${verificationUrl}

⏱️ This link is valid for 24 hours.

If you didn't request this registration, you can safely ignore this email.

Best regards,
The Felicloud Team`;

  return sendEmail({
    to: email,
    subject: 'Verify Your Email Address - Felicloud',
    html,
    text,
  });
}

/**
 * Send welcome email to new user
 */
export async function sendWelcomeEmail(email: string, username: string, tempPassword?: string) {
  const cloudUrl = process.env.NEXTCLOUD_URL || 'https://cloud.felicloud.com';

  let credentialsSection = '';
  let credentialsTextSection = '';

  if (tempPassword) {
    credentialsSection = `
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Your Login Credentials</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Temporary Password:</strong> <code style="background-color: #e5e7eb; padding: 4px 8px; border-radius: 4px;">${tempPassword}</code></p>
        <p style="color: #ef4444; margin-top: 15px;">⚠️ Please change your password after your first login for security.</p>
      </div>
    `;

    credentialsTextSection = `
Your Login Credentials:
Username: ${username}
Temporary Password: ${tempPassword}

⚠️ Please change your password after your first login for security.
`;
  } else {
    credentialsSection = `<p>Your username: <strong>${username}</strong></p>`;
    credentialsTextSection = `Username: ${username}`;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #3b82f6;">Welcome to Felicloud!</h1>
      <p>Hi ${username.split('@')[0]},</p>
      <p>Your account has been created successfully and is now ready to use!</p>

      ${credentialsSection}

      <p>You can access your cloud storage at:</p>
      <p><a href="${cloudUrl}" style="color: #3b82f6; font-weight: bold;">${cloudUrl}</a></p>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          If you have any questions or need assistance, please don't hesitate to contact our support team.
        </p>
        <p style="color: #6b7280; font-size: 14px;">Thank you for choosing Felicloud!</p>
      </div>
    </div>
  `;

  const text = `Welcome to Felicloud!

Hi ${username.split('@')[0]},

Your account has been created successfully and is now ready to use!

${credentialsTextSection}

You can access your cloud storage at: ${cloudUrl}

If you have any questions or need assistance, please don't hesitate to contact our support team.

Thank you for choosing Felicloud!`;

  return sendEmail({
    to: email,
    subject: 'Welcome to Felicloud - Your Account is Ready!',
    html,
    text,
  });
}
