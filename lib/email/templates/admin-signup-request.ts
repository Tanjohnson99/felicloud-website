/**
 * Admin Signup Request Notification Template
 */

import { renderBaseEmailLayout } from './base-layout';
import { getAdminNotificationTranslations } from '../translations/admin-notifications';

interface AdminSignupRequestData {
  fullName: string;
  email: string;
  date: Date;
  ipAddress?: string;
  locale?: string;
}

export function renderAdminSignupRequestEmail({
  fullName,
  email,
  date,
  ipAddress,
  locale = 'en',
}: AdminSignupRequestData): { subject: string; html: string } {
  const t = getAdminNotificationTranslations(locale).signupRequest;

  const formattedDate = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);

  const body = `
    <!-- Title -->
    <h1 style="margin: 0 0 24px; font-size: 28px; font-weight: 700; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      🕐 ${t.title}
    </h1>

    <!-- Intro -->
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.intro}
    </p>

    <!-- Pending Warning Box -->
    <div style="margin: 0 0 32px; padding: 20px; background-color: #FEF3C7; border-radius: 8px; border-left: 4px solid #F59E0B;">
      <h2 style="margin: 0 0 8px; font-size: 16px; font-weight: 600; color: #92400E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ⏳ Pending Email Validation
      </h2>
      <p style="margin: 0; font-size: 14px; line-height: 20px; color: #78350F; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ${t.intro}
      </p>
    </div>

    <!-- Request Details Box -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 32px; background-color: #F3F4F6; border-radius: 8px; border: 1px solid #E5E7EB;">
      <tr>
        <td style="padding: 24px;">
          <h2 style="margin: 0 0 20px; font-size: 18px; font-weight: 600; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.detailsTitle}
          </h2>

          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                <span style="display: block; font-size: 13px; font-weight: 600; color: #6B7280; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.fullName}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${fullName}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E7EB;">
                <span style="display: block; font-size: 13px; font-weight: 600; color: #6B7280; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.email}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${email}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; ${ipAddress ? 'border-bottom: 1px solid #E5E7EB;' : ''}">
                <span style="display: block; font-size: 13px; font-weight: 600; color: #6B7280; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.date}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${formattedDate}
                </span>
              </td>
            </tr>
            ${ipAddress ? `
            <tr>
              <td style="padding: 12px 0;">
                <span style="display: block; font-size: 13px; font-weight: 600; color: #6B7280; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.ipAddress}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #111827; font-family: 'Courier New', Courier, monospace;">
                  ${ipAddress}
                </span>
              </td>
            </tr>
            ` : ''}
          </table>
        </td>
      </tr>
    </table>

    <!-- Note Box -->
    <div style="margin: 0; padding: 20px; background-color: #EFF6FF; border-radius: 8px; border: 1px solid #BFDBFE;">
      <p style="margin: 0; font-size: 14px; line-height: 20px; color: #1E40AF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ℹ️ ${t.note}
      </p>
    </div>
  `;

  const html = renderBaseEmailLayout({ body, locale });

  return {
    subject: `${t.subject} - ${fullName}`,
    html,
  };
}
