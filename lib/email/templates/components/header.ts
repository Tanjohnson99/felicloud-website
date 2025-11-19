/**
 * Professional Email Header Component
 * Design matching Felicloud website
 */

interface HeaderProps {
  logoUrl: string; // URL to logo.svg
  locale?: string;
}

export function renderEmailHeader({ logoUrl, locale = 'en' }: HeaderProps): string {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FFFFFF; padding: 32px 24px; border-bottom: 1px solid #E5E7EB;">
      <tr>
        <td align="center">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">
            <tr>
              <td align="center" style="padding: 0;">
                <!-- Logo -->
                <img
                  src="${logoUrl}"
                  alt="Felicloud"
                  width="180"
                  height="auto"
                  style="display: block; max-width: 180px; height: auto; margin: 0 auto;"
                />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}
