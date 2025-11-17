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
 * Send welcome email to new user
 */
export async function sendWelcomeEmail(email: string, username: string) {
  const html = `
    <h1>Welcome to Felicloud!</h1>
    <p>Hi ${username},</p>
    <p>Your account has been created successfully.</p>
    <p>You can now access your cloud storage at: <a href="${process.env.NEXTCLOUD_URL}">${process.env.NEXTCLOUD_URL}</a></p>
    <p>Your username: <strong>${username}</strong></p>
    <p>Thank you for choosing Felicloud!</p>
  `;

  return sendEmail({
    to: email,
    subject: 'Welcome to Felicloud - Your Account is Ready!',
    html,
    text: `Welcome to Felicloud!\n\nYour account has been created successfully.\n\nYou can access your cloud storage at: ${process.env.NEXTCLOUD_URL}\nUsername: ${username}\n\nThank you for choosing Felicloud!`,
  });
}
