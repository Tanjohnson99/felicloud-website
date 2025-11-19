/**
 * Welcome Email Template
 * Sent when a new paid account is created
 */

import { renderBaseEmailLayout } from './base-layout';
import { getWelcomeEmailTranslations } from '../translations/welcome-email';

interface WelcomeEmailData {
  username: string;
  tempPassword: string;
  displayName?: string;
  locale?: string;
}

export function renderWelcomeEmail({
  username,
  tempPassword,
  displayName,
  locale = 'en',
}: WelcomeEmailData): { subject: string; html: string } {
  const t = getWelcomeEmailTranslations(locale);
  const name = displayName || username.split('@')[0];

  const body = `
    <!-- Title -->
    <h1 style="margin: 0 0 24px; font-size: 32px; font-weight: 700; color: #111827; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.title}
    </h1>

    <!-- Greeting -->
    <p style="margin: 0 0 24px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.greeting} <strong>${name}</strong>,
    </p>

    <!-- Intro -->
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.intro}
    </p>

    <!-- Credentials Box -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 32px; background-color: #F3F4F6; border-radius: 8px; border: 1px solid #E5E7EB;">
      <tr>
        <td style="padding: 24px;">
          <h2 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.credentialsTitle}
          </h2>

          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 8px 0;">
                <span style="display: block; font-size: 14px; font-weight: 600; color: #6B7280; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.username}:
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #111827; font-family: 'Courier New', Courier, monospace; background-color: #FFFFFF; padding: 8px 12px; border-radius: 4px; border: 1px solid #E5E7EB;">
                  ${username}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0;">
                <span style="display: block; font-size: 14px; font-weight: 600; color: #6B7280; margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.password}:
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #111827; font-family: 'Courier New', Courier, monospace; background-color: #FFFFFF; padding: 8px 12px; border-radius: 4px; border: 1px solid #E5E7EB;">
                  ${tempPassword}
                </span>
              </td>
            </tr>
          </table>

          <p style="margin: 16px 0 0; font-size: 14px; line-height: 20px; color: #EF4444; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ⚠️ ${t.tempPasswordNote}
          </p>
        </td>
      </tr>
    </table>

    <!-- CTA Button -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 32px;">
      <tr>
        <td align="center">
          <a href="https://cloud.felicloud.com" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.ctaButton} →
          </a>
        </td>
      </tr>
    </table>

    <!-- Next Steps -->
    <div style="margin: 0 0 32px; padding: 24px; background-color: #EFF6FF; border-radius: 8px; border-left: 4px solid #4A90E2;">
      <h2 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ${t.nextStepsTitle}
      </h2>
      <ol style="margin: 0; padding-left: 24px; color: #374151; font-size: 15px; line-height: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <li style="margin-bottom: 8px;">${t.step1}</li>
        <li style="margin-bottom: 8px;">${t.step2}</li>
        <li style="margin-bottom: 8px;">${t.step3}</li>
        <li style="margin-bottom: 0;">${t.step4}</li>
      </ol>
    </div>

    <!-- Security Info -->
    <div style="margin: 0 0 32px; padding: 20px; background-color: #F0FDF4; border-radius: 8px; border: 1px solid #BBF7D0;">
      <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600; color: #166534; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        🔒 ${t.securityTitle}
      </h3>
      <p style="margin: 0; font-size: 14px; line-height: 20px; color: #166534; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ${t.securityText}
      </p>
    </div>

    <!-- Need Help -->
    <p style="margin: 0; font-size: 14px; line-height: 20px; color: #6B7280; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.needHelp}
    </p>
  `;

  const html = renderBaseEmailLayout({ body, locale });

  return {
    subject: t.subject,
    html,
  };
}
