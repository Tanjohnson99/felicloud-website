/**
 * Base Email Layout
 * Professional structure with Header, Body, Footer
 */

import { renderEmailHeader } from './components/header';
import { renderEmailFooter } from './components/footer';

interface BaseLayoutProps {
  body: string;
  locale?: string;
  unsubscribeUrl?: string;
}

export function renderBaseEmailLayout({
  body,
  locale = 'en',
  unsubscribeUrl,
}: BaseLayoutProps): string {
  // Use absolute URL for logo in emails
  const logoUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.svg`
    : 'https://felicloud.com/images/logo.svg';

  return `
<!DOCTYPE html>
<html lang="${locale}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>Felicloud</title>

  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->

  <style>
    /* Reset styles */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }

    /* Base styles */
    body {
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #f3f4f6;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }

    /* Responsive styles */
    @media screen and (max-width: 600px) {
      .mobile-padding {
        padding: 16px !important;
      }
      .mobile-text-center {
        text-align: center !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6;">
  <!-- Preview text (hidden but shows in inbox preview) -->
  <div style="display: none; max-height: 0px; overflow: hidden;">
    Felicloud - Your secure European cloud storage
  </div>

  <!-- Email wrapper -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 0;">

        <!-- Header -->
        ${renderEmailHeader({ logoUrl, locale })}

        <!-- Body -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;">
          <tr>
            <td align="center" style="padding: 48px 24px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">
                <tr>
                  <td style="padding: 0;">
                    ${body}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        ${renderEmailFooter({ locale, unsubscribeUrl })}

      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
