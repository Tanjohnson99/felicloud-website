/**
 * Professional Email Footer Component
 * Style inspired by Netflix, Apple, Claude AI
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
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #1a1a1a; padding: 48px 24px;">
      <tr>
        <td align="center">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

            <!-- Links Section -->
            <tr>
              <td align="center" style="padding-bottom: 32px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 0 16px;">
                      <a href="https://felicloud.com/${locale}/help" style="color: #9CA3AF; text-decoration: none; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.help}</a>
                    </td>
                    <td style="padding: 0 16px; border-left: 1px solid #374151;">
                      <a href="https://felicloud.com/${locale}/contact" style="color: #9CA3AF; text-decoration: none; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.contact}</a>
                    </td>
                    <td style="padding: 0 16px; border-left: 1px solid #374151;">
                      <a href="https://felicloud.com/${locale}/privacy" style="color: #9CA3AF; text-decoration: none; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.privacy}</a>
                    </td>
                    <td style="padding: 0 16px; border-left: 1px solid #374151;">
                      <a href="https://felicloud.com/${locale}/terms" style="color: #9CA3AF; text-decoration: none; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">${t.terms}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Social Media Icons -->
            <tr>
              <td align="center" style="padding-bottom: 32px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 0 12px;">
                      <a href="https://twitter.com/felicloud" style="color: #9CA3AF; text-decoration: none;">
                        <img src="https://felicloud.com/icons/twitter.png" alt="Twitter" width="24" height="24" style="display: block;" />
                      </a>
                    </td>
                    <td style="padding: 0 12px;">
                      <a href="https://linkedin.com/company/felicloud" style="color: #9CA3AF; text-decoration: none;">
                        <img src="https://felicloud.com/icons/linkedin.png" alt="LinkedIn" width="24" height="24" style="display: block;" />
                      </a>
                    </td>
                    <td style="padding: 0 12px;">
                      <a href="https://github.com/felicloud" style="color: #9CA3AF; text-decoration: none;">
                        <img src="https://felicloud.com/icons/github.png" alt="GitHub" width="24" height="24" style="display: block;" />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Company Info -->
            <tr>
              <td align="center" style="padding-bottom: 16px;">
                <p style="margin: 0; color: #6B7280; font-size: 14px; line-height: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  <strong style="color: #9CA3AF;">Felicloud</strong><br />
                  ${t.tagline}
                </p>
              </td>
            </tr>

            <!-- Address -->
            <tr>
              <td align="center" style="padding-bottom: 24px;">
                <p style="margin: 0; color: #6B7280; font-size: 12px; line-height: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  Felicloud SAS<br />
                  123 Rue de la Tech, 75001 Paris, France<br />
                  SIRET: 123 456 789 00012
                </p>
              </td>
            </tr>

            <!-- Copyright & Unsubscribe -->
            <tr>
              <td align="center" style="border-top: 1px solid #374151; padding-top: 24px;">
                <p style="margin: 0; color: #6B7280; font-size: 12px; line-height: 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                  © ${currentYear} Felicloud. ${t.allRightsReserved}
                  ${unsubscribeUrl ? `<br /><a href="${unsubscribeUrl}" style="color: #9CA3AF; text-decoration: underline;">${t.unsubscribe}</a>` : ''}
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  `;
}
