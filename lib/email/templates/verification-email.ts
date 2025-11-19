/**
 * Email Verification Template
 * Sent when a user signs up for a free account
 */

import { renderBaseEmailLayout } from './base-layout';
import { getVerificationEmailTranslations } from '../translations/verification-email';

interface VerificationEmailData {
  email: string;
  fullName: string;
  verificationUrl: string;
  locale?: string;
}

export function renderVerificationEmail({
  email,
  fullName,
  verificationUrl,
  locale = 'en',
}: VerificationEmailData): { subject: string; html: string } {
  const t = getVerificationEmailTranslations(locale);

  const body = `
    <!-- Title -->
    <h1 style="margin: 0 0 24px; font-size: 32px; font-weight: 700; color: #111827; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.title}
    </h1>

    <!-- Greeting -->
    <p style="margin: 0 0 24px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.greeting} <strong>${fullName}</strong>,
    </p>

    <!-- Intro -->
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.intro}
    </p>

    <!-- CTA Button -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 32px;">
      <tr>
        <td align="center">
          <a href="${verificationUrl}" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.ctaButton} →
          </a>
        </td>
      </tr>
    </table>

    <!-- Link Text -->
    <p style="margin: 0 0 8px; font-size: 14px; line-height: 20px; color: #6B7280; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.orCopy}
    </p>
    <p style="margin: 0 0 32px; font-size: 14px; line-height: 20px; color: #2B7FFF; text-align: center; word-break: break-all; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${verificationUrl}
    </p>

    <!-- Expiry Warning -->
    <div style="margin: 0 0 32px; padding: 20px; background-color: #FEF3C7; border-radius: 8px; border-left: 4px solid #F59E0B;">
      <p style="margin: 0; font-size: 14px; line-height: 20px; color: #92400E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ⏱️ ${t.expiryNote}
      </p>
    </div>

    <!-- Benefits Box -->
    <div style="margin: 0 0 32px; padding: 24px; background-color: #EFF6FF; border-radius: 8px; border-left: 4px solid #4A90E2;">
      <h2 style="margin: 0 0 16px; font-size: 18px; font-weight: 600; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ${t.benefitsTitle}
      </h2>
      <ul style="margin: 0; padding-left: 24px; color: #374151; font-size: 15px; line-height: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <li style="margin-bottom: 8px;">${t.benefit1}</li>
        <li style="margin-bottom: 8px;">${t.benefit2}</li>
        <li style="margin-bottom: 8px;">${t.benefit3}</li>
        <li style="margin-bottom: 0;">${t.benefit4}</li>
      </ul>
    </div>

    <!-- Didn't Request -->
    <p style="margin: 0 0 16px; font-size: 14px; line-height: 20px; color: #6B7280; text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.didntRequest}
    </p>

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
