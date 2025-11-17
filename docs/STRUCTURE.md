# Felicloud Website - Structure Documentation

## 📁 Project Structure

```
felicloud-website/
├── app/                          # Next.js App Router
│   ├── en/                       # English language routes
│   │   ├── layout.tsx           # English layout with Header/Footer
│   │   ├── page.tsx             # Homepage
│   │   ├── pricing/page.tsx     # Pricing page
│   │   ├── about/page.tsx       # About page
│   │   └── ...                  # Other pages
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
│
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── header.tsx           # Unified header (all languages)
│   │   └── footer.tsx           # Unified footer (all languages)
│   ├── sections/                # Page sections
│   │   ├── hero.tsx             # Hero section
│   │   ├── features.tsx         # Features section
│   │   ├── comparison.tsx       # Comparison table
│   │   ├── cta.tsx              # Call-to-action section
│   │   └── social-proof.tsx     # Social proof/testimonials
│   └── ui/                      # UI components
│       └── card.tsx             # Card component
│
├── lib/                         # Utilities and hooks
│   └── hooks/
│       └── useTranslation.ts    # Translation hook
│
├── locales/                     # Translation files (JSON)
│   ├── en.json                  # English translations (COMPLETE)
│   ├── fr.json                  # French translations (TODO)
│   ├── pt.json                  # Portuguese translations (TODO)
│   ├── es.json                  # Spanish translations (TODO)
│   ├── it.json                  # Italian translations (TODO)
│   └── de.json                  # German translations (TODO)
│
├── public/                      # Static assets
│   ├── images/                  # 📸 PUT YOUR IMAGES HERE
│   │   ├── logos/               # Logo files
│   │   ├── screenshots/         # Product screenshots
│   │   ├── icons/               # Icon files
│   │   └── ...                  # Other images
│   ├── logo.svg                 # Main logo
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
│
└── docs/                        # Documentation
    └── STRUCTURE.md             # This file
```

## 🌍 Translation System

### How it works

1. **All translations are in `/locales/*.json`**
   - `en.json` is the source of truth (100% complete)
   - Other language files use the same structure but with translated values

2. **Components use the `useTranslation` hook**
   ```tsx
   import { useTranslation } from '@/lib/hooks/useTranslation';

   function MyComponent({ lang = 'en' }) {
     const { t } = useTranslation(lang);

     return <h1>{t('hero.title')}</h1>;
   }
   ```

3. **Access nested translations with dot notation**
   ```tsx
   t('common.brandName')        // "Felicloud"
   t('nav.features')            // "Features"
   t('hero.title')              // "European Cloud Storage..."
   ```

### Adding a new language

1. Copy `/locales/en.json` to `/locales/XX.json` (where XX is the language code)
2. Translate all values in the new file
3. The system automatically falls back to English if a translation is missing

### Adding new translation keys

1. Add the key to `/locales/en.json`
2. Use it in components with `t('your.new.key')`
3. Translate it to other languages later

## 🖼️ Images

### Where to put images

**All images go in `/public/images/`**

Suggested organization:
```
public/images/
├── logos/              # Brand logos, partner logos
├── screenshots/        # Product screenshots, demos
├── icons/              # UI icons, feature icons
├── blog/               # Blog post images
├── team/               # Team member photos
└── misc/               # Other images
```

### How to use images in code

```tsx
import Image from 'next/image';

// Simple usage
<Image
  src="/images/screenshots/dashboard.png"
  alt="Dashboard"
  width={800}
  height={600}
/>

// With optimization
<Image
  src="/images/logos/partner.png"
  alt="Partner logo"
  width={200}
  height={100}
  priority={true}  // For above-the-fold images
/>
```

### Best practices

- Use `.webp` or `.avif` for best compression
- Always specify `width` and `height` for Next.js optimization
- Use descriptive filenames: `feature-sync.png` instead of `img1.png`
- Optimize images before uploading (use tools like TinyPNG)

## 🚀 Development Workflow

### Running the dev server
```bash
npm run dev
```

### Building for production
```bash
npm run build
npm start
```

### Type checking
```bash
npm run type-check
```

## 🎨 Styling

- Using **Tailwind CSS** for all styling
- Primary color: `bg-primary`, `text-primary`
- Secondary color: `bg-secondary`, `text-secondary`
- Consistent spacing with Tailwind utilities

## 📝 Adding a new page

1. Create a new file in `/app/en/your-page/page.tsx`
2. Import and use the translation-ready components
3. Pass `lang="en"` to all components
4. Add navigation links in Header and Footer components

Example:
```tsx
// app/en/services/page.tsx
import { Hero } from '@/components/sections/hero';

export default function ServicesPage() {
  return (
    <>
      <Hero lang="en" />
      {/* Your page content */}
    </>
  );
}
```

## 🔧 Adding a new component

1. Create component in `/components/sections/` or `/components/ui/`
2. Accept `lang` prop and use `useTranslation(lang)`
3. Add translations to `/locales/en.json`
4. Import and use in pages

Example:
```tsx
// components/sections/pricing-table.tsx
import { useTranslation } from '@/lib/hooks/useTranslation';

interface PricingTableProps {
  lang?: string;
}

export function PricingTable({ lang = 'en' }: PricingTableProps) {
  const { t } = useTranslation(lang);

  return (
    <section>
      <h2>{t('pricing.title')}</h2>
      {/* Component content */}
    </section>
  );
}
```

## ✅ Clean Code Principles

1. **One component per file**
2. **Use TypeScript for type safety**
3. **All text goes in translation files** (no hardcoded strings)
4. **Consistent naming**: `kebab-case` for files, `PascalCase` for components
5. **Props interface for every component**

## 🎯 Next Steps

When ready to add other languages:

1. Translate `/locales/en.json` → `fr.json`, `pt.json`, etc.
2. Create routes: `/app/fr/`, `/app/pt/`, etc.
3. Copy the `/app/en/layout.tsx` structure with `lang="fr"` or `lang="pt"`
4. All components already support multi-language!

---

**Questions?** Check the code or ask the team!
