/**
 * Admin Payment Initiated Notification Template
 * Lead alert when customer starts checkout
 */

import { renderBaseEmailLayout } from './base-layout';
import { getAdminNotificationTranslations } from '../translations/admin-notifications';

interface AdminPaymentInitiatedData {
  email: string;
  plan: string;
  billing: string;
  storage: string;
  isUpgrade: boolean;
  locale?: string;
}

export function renderAdminPaymentInitiatedEmail({
  email,
  plan,
  billing,
  storage,
  isUpgrade,
  locale = 'en',
}: AdminPaymentInitiatedData): { subject: string; html: string } {
  const t = getAdminNotificationTranslations(locale).paymentInitiated;
  const actionType = isUpgrade ? 'Upgrade' : 'New Purchase';

  const body = `
    <!-- Title -->
    <h1 style="margin: 0 0 24px; font-size: 28px; font-weight: 700; color: #111827; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      🛒 ${t.title}
    </h1>

    <!-- Lead Alert Badge -->
    <div style="margin: 0 0 24px; padding: 12px 20px; background-color: #FEF3C7; border-left: 4px solid #F59E0B; border-radius: 4px;">
      <p style="margin: 0; font-size: 14px; font-weight: 600; color: #92400E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        ⚡ LEAD ALERT - Payment initiated but not completed yet
      </p>
    </div>

    <!-- Intro -->
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #374151; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      ${t.intro}
    </p>

    <!-- Lead Details Box -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 32px; background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <tr>
        <td style="padding: 32px;">
          <h2 style="margin: 0 0 20px; font-size: 20px; font-weight: 600; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            ${t.detailsTitle}
          </h2>

          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.actionType}
                </span>
                <span style="display: block; font-size: 18px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${actionType}
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
                  ${t.plan}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${plan}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.storage}
                </span>
                <span style="display: block; font-size: 20px; font-weight: 700; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${storage}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0;">
                <span style="display: block; font-size: 13px; font-weight: 600; color: rgba(255, 255, 255, 0.8); margin-bottom: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${t.billing}
                </span>
                <span style="display: block; font-size: 16px; font-weight: 500; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  ${billing}
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Important Note -->
    <div style="margin: 0; padding: 20px; background-color: #FEF3C7; border-radius: 8px; border: 1px solid #FDE047;">
      <p style="margin: 0; font-size: 14px; line-height: 20px; color: #92400E; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        💡 <strong>${t.note}</strong>
      </p>
    </div>
  `;

  const html = renderBaseEmailLayout({ body, locale });

  return {
    subject: `${t.subject} - ${email} (${actionType})`,
    html,
  };
}
