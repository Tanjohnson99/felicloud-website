/**
 * Admin Account Created Notification Template
 */

import { renderBaseEmailLayout } from './base-layout';
import { getAdminNotificationTranslations } from '../translations/admin-notifications';

interface AdminAccountCreatedData {
  fullName: string;
  email: string;
  creationTime: Date;
  quota: string;
  locale?: string;
}

export function renderAdminAccountCreatedEmail({
  fullName,
  email,
  creationTime,
  quota,
  locale = 'en',
}: AdminAccountCreatedData): { subject: string; html: string } {
  const t = getAdminNotificationTranslations(locale).accountCreated;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(creationTime);

  const body = `
    <!-- Title -->
    <h1 style="margin: 0 0 24px; font-size: 28px; font-weight: 700; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ✅ ${t.title}
    </h1>

    <!-- Intro -->
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.intro}
    </p>

    <!-- Account Details Box -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 32px; background: linear-gradient(135deg, #10B981 0%, #059669 100%); border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <tr>
        <td style="padding: 32px;">
          <h2 style="margin: 0 0 20px; font-size: 20px; font-weight: 600; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.detailsTitle}
          </h2>

          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.fullName}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${fullName}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.email}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${email}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.creationTime}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${formattedDate}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0;">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.quota}
                </span>
                <span style="display: block; font-size: 20px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${quota}
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- CTA Button -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
      <tr>
        <td align="center">
          <a href="${process.env.NEXTCLOUD_URL || 'https://cloud.felicloud.com'}/settings/users" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.ctaButton} →
          </a>
        </td>
      </tr>
    </table>
  `;

  const html = renderBaseEmailLayout({ body, locale });

  return {
    subject: `${t.subject} - ${email}`,
    html,
  };
}
