/**
 * Professional Email Footer Component
 * Design matching Felicloud website
 */

import { getFooterTranslations } from '../../translations/footer';

interface FooterProps {
  locale?: string;
  unsubscribeUrl?: string;
}

export function renderEmailFooter({ locale = 'en', unsubscribeUrl }: FooterProps): string {
  const t = getFooterTranslations(locale);
  const currentYear = new Date().getFullYear();

  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #F9FAFB; padding: 40px 24px;">
      <tr>
        <td align="center">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

            <!-- Links Section -->
            <tr>
              <td align="center" style="padding-bottom: 24px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 0 12px;">
                      <a href="https://felicloud.com/${locale}/help" style="color: #6B7280; text-decoration: none; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.help}</a>
                    </td>
                    <td style="padding: 0 12px; border-left: 1px solid #D1D5DB;">
                      <a href="https://felicloud.com/${locale}/contact" style="color: #6B7280; text-decoration: none; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.contact}</a>
                    </td>
                    <td style="padding: 0 12px; border-left: 1px solid #D1D5DB;">
                      <a href="https://felicloud.com/${locale}/privacy" style="color: #6B7280; text-decoration: none; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.privacy}</a>
                    </td>
                    <td style="padding: 0 12px; border-left: 1px solid #D1D5DB;">
                      <a href="https://felicloud.com/${locale}/terms" style="color: #6B7280; text-decoration: none; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.terms}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Social Media Icons -->
            <tr>
              <td align="center" style="padding-bottom: 24px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 0 8px;">
                      <a href="https://facebook.com/felicloud" style="display: inline-block; width: 32px; height: 32px; background-color: #2B7FFF; border-radius: 50%; text-align: center; line-height: 32px; text-decoration: none;">
                        <span style="color: white; font-size: 16px; font-weight: bold; font-family: Arial, sans-serif;">f</span>
                      </a>
                    </td>
                    <td style="padding: 0 8px;">
                      <a href="https://www.instagram.com/felicloudsecurecloudstorage/" style="display: inline-block; width: 32px; height: 32px; background-color: #2B7FFF; border-radius: 50%; text-align: center; line-height: 32px; text-decoration: none;">
                        <span style="color: white; font-size: 16px; font-weight: bold; font-family: Arial, sans-serif;">i</span>
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Company Info -->
            <tr>
              <td align="center" style="padding-bottom: 16px;">
                <p style="margin: 0; color: #6B7280; font-size: 13px; line-height: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  <strong style="color: #111827;">FELIDATA</strong><br />
                  Part of BTJT Group<br />
                  Tax ID: PT516034332
                </p>
              </td>
            </tr>

            <!-- Copyright & Unsubscribe -->
            <tr>
              <td align="center" style="border-top: 1px solid #E5E7EB; padding-top: 20px;">
                <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  © ${currentYear} Felicloud. ${t.allRightsReserved}
                  ${unsubscribeUrl ? `<br /><a href="${unsubscribeUrl}" style="color: #2B7FFF; text-decoration: underline;">${t.unsubscribe}</a>` : ''}
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  `;
}
