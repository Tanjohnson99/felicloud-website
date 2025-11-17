# Felicloud Website

Site web marketing moderne pour Felicloud, construit avec Next.js, React et TypeScript.

## Stack Technique

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Internationalisation**: next-intl (EN, FR, PT)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **TypeScript**: Full type safety

## Démarrage

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build

```bash
npm run build
```

Le site sera exporté en fichiers statiques dans le dossier `./out/`

## Configuration GitHub Actions

Pour activer le déploiement automatique, configurez les secrets suivants dans votre repository GitHub :

1. Allez dans **Settings** > **Secrets and variables** > **Actions**
2. Ajoutez les secrets suivants :
   - `FTP_SERVER`: L'adresse de votre serveur FTP (ex: ftp.votrehebergeur.com)
   - `FTP_USERNAME`: Votre nom d'utilisateur FTP
   - `FTP_PASSWORD`: Votre mot de passe FTP

Le déploiement se lancera automatiquement lors d'un push sur la branche configurée.

## Structure du Projet

```
felicloud-website/
├── app/                    # Pages Next.js (App Router)
│   ├── [locale]/          # Pages internationalisées
│   │   ├── page.tsx       # Homepage
│   │   ├── pricing/       # Page tarifs
│   │   ├── features/      # Page fonctionnalités
│   │   ├── about/         # À propos
│   │   ├── signup/        # Inscription
│   │   └── legal/         # Pages légales
│   ├── layout.tsx         # Layout racine
│   └── globals.css        # Styles globaux
├── components/
│   ├── ui/                # Composants UI de base
│   ├── sections/          # Sections de pages
│   └── layout/            # Header, Footer
├── lib/
│   ├── i18n/              # Configuration i18n
│   └── utils/             # Utilitaires
├── messages/              # Traductions
│   ├── en/
│   ├── fr/
│   └── pt/
└── public/                # Assets statiques

```

## Langues Supportées

- 🇬🇧 English (EN)
- 🇫🇷 Français (FR)
- 🇵🇹 Português (PT)

## Pages Disponibles

- `/` - Homepage avec Hero, Features, Comparison
- `/features` - Page des fonctionnalités détaillées
- `/pricing` - Plans tarifaires
- `/about` - À propos de Felicloud
- `/signup` - Formulaire d'inscription
- `/legal/terms` - Conditions d'utilisation
- `/legal/privacy` - Politique de confidentialité
- `/legal/gdpr` - Conformité RGPD

## Configuration Backend (API)

### Variables d'Environnement

1. Copiez `.env.example` vers `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Remplissez TOUTES les variables requises dans `.env.local`:
   - Nextcloud OCS API credentials
   - Stripe API keys et webhook secret
   - SMTP configuration
   - Database URLs (PostgreSQL, Redis)
   - JWT secrets

**IMPORTANT:** `.env.local` est dans `.gitignore` et ne sera JAMAIS commité. Ne partagez jamais ce fichier!

### Structure de Configuration

```
lib/config/
├── env.ts          # Validation et export des variables d'environnement
└── plans.ts        # Configuration des plans (Nextcloud groups + Stripe)
```

Toujours importer depuis `@/lib/config/env` au lieu d'utiliser `process.env` directement!

### API Routes

Voir `app/api/README.md` pour la documentation complète des endpoints:

- `/api/auth/register-free` - Inscription compte gratuit
- `/api/auth/verify-email` - Vérification email
- `/api/checkout/create-session` - Créer session Stripe
- `/api/webhooks/stripe` - Webhooks Stripe (CRITIQUE!)
- `/api/user/upgrade` - Upgrade de compte

### Configuration Stripe

1. Créez vos produits dans le Dashboard Stripe
2. Copiez les Price IDs dans `.env.local`
3. Configurez le webhook endpoint: `https://votre-domaine.com/api/webhooks/stripe`
4. Copiez le webhook secret dans `.env.local`

### Configuration Nextcloud

1. Créez un compte admin dédié pour les API calls
2. Créez les groupes Nextcloud selon `lib/config/plans.ts`:
   - `10GB Free`
   - `500GB Monthly`, `500GB Annual`, `500GB Lifetime`
   - `1TB Monthly`, `1TB Annual`, `1TB Lifetime`
   - `2TB Monthly`, `2TB Annual`, `2TB Lifetime`
   - etc.

3. Configurez les quotas par défaut pour chaque groupe

### Sécurité

- ✅ Secrets dans `.env.local` uniquement
- ✅ Validation Stripe webhook signatures
- ✅ Input validation avec Zod
- ✅ Rate limiting sur inscriptions
- ✅ HTTPS obligatoire en production
- ⚠️ À implémenter: CSRF protection, logging, monitoring

## Développement

### Ajouter une Traduction

1. Ajoutez les clés dans `messages/en/common.json`
2. Traduisez dans `messages/fr/common.json` et `messages/pt/common.json`
3. Utilisez avec `useTranslations()` dans vos composants

### Créer une Nouvelle Page

1. Créez un dossier dans `app/[locale]/`
2. Ajoutez un fichier `page.tsx`
3. La page sera automatiquement disponible pour toutes les langues

### Ajouter un Nouveau Plan

1. Créez le produit/prix dans Stripe Dashboard
2. Ajoutez le Price ID dans `.env.local`
3. Ajoutez le plan dans `lib/config/plans.ts`
4. Créez le groupe correspondant dans Nextcloud
5. Le plan sera automatiquement disponible!

## Licence

© 2024 Felicloud. Tous droits réservés.
