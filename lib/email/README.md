# Felicloud Email System

Professional email template system with consistent branding, logo integration, and multi-language support.

## 📁 Structure

```
lib/email/
├── templates/               # Email templates
│   ├── components/         # Reusable email components
│   │   ├── header.ts      # Professional header with logo
│   │   └── footer.ts      # Netflix/Apple style footer
│   ├── base-layout.ts     # Base email layout (Header + Body + Footer)
│   ├── welcome-email.ts   # Welcome email for new users
│   ├── admin-account-created.ts      # Admin notification (account created)
│   └── admin-payment-initiated.ts    # Admin notification (payment started)
└── translations/           # Email content translations
    ├── footer.ts          # Footer translations (en, fr, de, es)
    ├── welcome-email.ts   # Welcome email translations
    └── admin-notifications.ts  # Admin notification translations
```

## 🎨 Features

### Professional Design
- **Header**: Gradient background with logo (uses `logo.svg` dynamically)
- **Footer**: Dark theme inspired by Netflix, Apple, Claude AI
  - Social media links
  - Navigation links (Help, Contact, Privacy, Terms)
  - Company information
  - Copyright and legal info

### Multi-language Support
All emails are fully translatable. Currently supported:
- 🇬🇧 English (en)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇪🇸 Spanish (es)

### Responsive Design
- Mobile-optimized
- Works across all email clients (Gmail, Outlook, Apple Mail, etc.)
- Proper fallbacks for older clients

### Logo Integration
- Automatically uses `logo.svg` from the website
- If the logo changes, all emails automatically update
- Served from `NEXT_PUBLIC_SITE_URL` environment variable

## 📧 Email Templates

### 1. Welcome Email
**Sent to:** New paid customers after account creation

**Template:** `templates/welcome-email.ts`

**Features:**
- Personalized greeting
- Account credentials (username + temporary password)
- Security warning to change password
- Getting started steps
- CTA button to access cloud
- Data security information

**Usage:**
```typescript
import { sendWelcomeEmail } from '@/lib/services/email';

await sendWelcomeEmail(
  'user@example.com',     // email
  'user@example.com',     // username
  'TempPass123!',         // temporary password
  'fr'                    // locale (optional, defaults to 'en')
);
```

### 2. Admin Account Created
**Sent to:** Admin when a new account is successfully created

**Template:** `templates/admin-account-created.ts`

**Features:**
- Green success theme
- Account details (name, email, quota, creation time)
- CTA button to Nextcloud admin panel

**Usage:**
```typescript
import { notifyAdminAccountCreated } from '@/lib/services/admin-notifications';

await notifyAdminAccountCreated(
  'John Doe',               // fullName
  'john@example.com',       // email
  new Date(),               // creationTime
  '1TB',                    // quota
  'en'                      // locale (optional)
);
```

### 3. Admin Payment Initiated
**Sent to:** Admin when a customer starts the checkout process (lead alert)

**Template:** `templates/admin-payment-initiated.ts`

**Features:**
- Orange lead alert theme
- Customer information (email, plan, billing, storage)
- Action type (New Purchase vs Upgrade)
- Important note about lead status

**Usage:**
```typescript
import { notifyAdminPaymentInitiated } from '@/lib/services/admin-notifications';

await notifyAdminPaymentInitiated(
  'customer@example.com',   // email
  '1TB_Lifetime',           // plan
  'lifetime',               // billing
  '1TB',                    // storage
  false,                    // isUpgrade
  'en'                      // locale (optional)
);
```

## 🌍 Adding New Languages

1. **Add footer translations** in `translations/footer.ts`:
```typescript
it: {
  help: 'Centro assistenza',
  contact: 'Contatto',
  // ... more translations
}
```

2. **Add email content translations** in respective translation files:
```typescript
// translations/welcome-email.ts
it: {
  subject: 'Benvenuto su Felicloud',
  title: 'Benvenuto su Felicloud!',
  // ... more translations
}
```

3. Use the new locale when sending emails:
```typescript
await sendWelcomeEmail(email, username, password, 'it');
```

## 📝 Creating New Email Templates

1. **Create translations file** in `translations/your-email.ts`
2. **Create template file** in `templates/your-email.ts`
3. **Use base layout**:
```typescript
import { renderBaseEmailLayout } from './base-layout';
import { getYourEmailTranslations } from '../translations/your-email';

export function renderYourEmail(data: YourEmailData) {
  const t = getYourEmailTranslations(data.locale);

  const body = `
    <h1>${t.title}</h1>
    <p>${t.content}</p>
  `;

  const html = renderBaseEmailLayout({ body, locale: data.locale });

  return { subject: t.subject, html };
}
```

4. **Create service function** in `lib/services/email.ts` or `lib/services/admin-notifications.ts`

## 🎯 Best Practices

1. **Always use the base layout** - Ensures consistent branding
2. **Always make emails translatable** - Add translations for all languages
3. **Use semantic HTML** - Better accessibility and email client compatibility
4. **Test across email clients** - Gmail, Outlook, Apple Mail, etc.
5. **Keep emails mobile-friendly** - Responsive design is crucial
6. **Use inline styles** - Email clients don't support external CSS

## 🔧 Configuration

### Environment Variables

```bash
# Logo URL (automatically constructed from site URL)
NEXT_PUBLIC_SITE_URL=https://felicloud.com

# Used in footer for Nextcloud admin link
NEXTCLOUD_URL=https://cloud.felicloud.com
```

### Update Company Information

Edit the footer component at `templates/components/footer.ts`:

```typescript
<p>
  Felicloud SAS<br />
  123 Rue de la Tech, 75001 Paris, France<br />
  SIRET: 123 456 789 00012
</p>
```

### Update Social Media Links

Edit the footer component social media section:

```typescript
<a href="https://twitter.com/felicloud">...</a>
<a href="https://linkedin.com/company/felicloud">...</a>
<a href="https://github.com/felicloud">...</a>
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#4A90E2` to `#357ABD` (gradient)
- **Success Green**: `#10B981` to `#059669` (gradient)
- **Warning Orange**: `#F59E0B` to `#D97706` (gradient)
- **Dark Footer**: `#1a1a1a`
- **Text Gray**: `#374151`
- **Light Gray**: `#6B7280`

### Typography

- **Font Family**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **Monospace**: `'Courier New', Courier, monospace` (for credentials)

### Spacing

- **Container Max Width**: `600px`
- **Padding**: `24px` (mobile), `48px` (desktop)
- **Border Radius**: `8px` (standard), `12px` (large cards)

## 🚀 Future Enhancements

- [ ] Add more email templates (password reset, upgrade confirmation, etc.)
- [ ] Add more language translations (IT, PT, NL, etc.)
- [ ] Add email preview tool for testing
- [ ] Add email analytics (open rates, click rates)
- [ ] Add A/B testing support

## 📄 License

Part of Felicloud - All rights reserved.
