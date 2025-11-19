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

  const timestamp = new Date().toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #3b82f6;">Nouvelle demande d'inscription</h1>

      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="margin-top: 0; color: #92400e;">🕐 En attente de validation</h2>
        <p style="color: #78350f;">Une nouvelle demande d'inscription a été créée et attend que l'utilisateur valide son email.</p>
      </div>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Informations de la demande</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Nom complet:</strong></td>
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
            <td style="padding: 8px 0; color: #6b7280;"><strong>Adresse IP:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${ipAddress}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          Ce compte sera créé une fois que l'utilisateur aura validé son email et complété le formulaire d'inscription.
        </p>
        <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">
          Vous recevrez une autre notification lors de la création effective du compte.
        </p>
      </div>
    </div>
  `;

  const text = `Nouvelle demande d'inscription - EN ATTENTE DE VALIDATION

Informations de la demande:
- Nom complet: ${fullName}
- Email: ${email}
- Date: ${timestamp}
${ipAddress ? `- Adresse IP: ${ipAddress}` : ''}

Ce compte sera créé une fois que l'utilisateur aura validé son email et complété le formulaire d'inscription.
Vous recevrez une autre notification lors de la création effective du compte.`;

  try {
    await sendEmail({
      to: adminEmail,
      subject: `Nouvelle demande d'inscription - ${fullName}`,
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

  const requestTimestamp = requestedAt.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const createdTimestamp = new Date().toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  const nextcloudUrl = process.env.NEXTCLOUD_URL || 'https://cloud.felicloud.com';
  const groupName = process.env.NEXTCLOUD_FREE_GROUP || 'Free Users';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #10b981;">Nouveau compte créé</h1>

      <div style="background-color: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 4px;">
        <h2 style="margin-top: 0; color: #065f46;">✓ Compte actif</h2>
        <p style="color: #047857;">Un nouveau compte Felicloud a été créé avec succès et est maintenant accessible.</p>
      </div>

      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937;">Informations du compte</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Nom complet:</strong></td>
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
            <td style="padding: 8px 0; color: #6b7280;"><strong>Groupe:</strong></td>
            <td style="padding: 8px 0; color: #1f2937;">${groupName}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Timeline</h3>
        <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
          <strong>Demande d'inscription:</strong> ${requestTimestamp}
        </p>
        <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
          <strong>Compte créé:</strong> ${createdTimestamp}
        </p>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          Le compte est maintenant accessible sur: <a href="${nextcloudUrl}" style="color: #3b82f6;">${nextcloudUrl}</a>
        </p>
      </div>
    </div>
  `;

  const text = `Nouveau compte créé - ACTIF ✓

Un nouveau compte Felicloud a été créé avec succès:

Informations du compte:
- Nom complet: ${fullName}
- Email: ${email}
- Quota: ${quota}
- Groupe: ${groupName}

Timeline:
- Demande d'inscription: ${requestTimestamp}
- Compte créé: ${createdTimestamp}

Le compte est maintenant accessible sur: ${nextcloudUrl}`;

  try {
    await sendEmail({
      to: adminEmail,
      subject: `Nouveau compte créé - ${email}`,
      html,
      text,
    });
    console.log(`Admin notification sent for account creation: ${email}`);
  } catch (error) {
    console.error('Failed to send admin notification for account creation:', error);
    // Don't throw - we don't want to fail the signup if admin email fails
  }
}
