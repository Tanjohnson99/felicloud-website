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

## Développement

### Ajouter une Traduction

1. Ajoutez les clés dans `messages/en/common.json`
2. Traduisez dans `messages/fr/common.json` et `messages/pt/common.json`
3. Utilisez avec `useTranslations()` dans vos composants

### Créer une Nouvelle Page

1. Créez un dossier dans `app/[locale]/`
2. Ajoutez un fichier `page.tsx`
3. La page sera automatiquement disponible pour toutes les langues

## Licence

© 2024 Felicloud. Tous droits réservés.
