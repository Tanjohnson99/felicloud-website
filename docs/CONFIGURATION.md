# Configuration Guide

## 🔧 Variables d'environnement

### **IMPORTANT : Avant ou après le build ?**

**AVANT LE BUILD** ✅

Les configurations SMTP et API Nextcloud doivent être faites **AVANT** de compiler le site.

### Comment configurer :

1. **Copiez le fichier d'exemple** :
   ```bash
   cp .env.example .env.local
   ```

2. **Éditez `.env.local`** avec vos vraies valeurs :
   ```bash
   nano .env.local   # ou votre éditeur préféré
   ```

3. **Ne commitez JAMAIS `.env.local`** (déjà dans .gitignore)

---

## 📧 Configuration SMTP

Pour envoyer des emails (formulaire contact, notifications, etc.) :

```env
# Dans .env.local
SMTP_HOST=smtp.votre-serveur.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=noreply@felicloud.com
SMTP_PASSWORD=votre_mot_de_passe_smtp
SMTP_FROM_EMAIL=noreply@felicloud.com
SMTP_FROM_NAME=Felicloud
```

**Fournisseurs SMTP recommandés :**
- **Mailgun** : Gratuit jusqu'à 5000 emails/mois
- **SendGrid** : Gratuit jusqu'à 100 emails/jour
- **Amazon SES** : Très bon marché
- **Votre hébergeur** : Souvent inclus

---

## ☁️ Configuration API Nextcloud

Pour créer automatiquement des comptes Nextcloud :

```env
# Dans .env.local
NEXTCLOUD_URL=https://cloud.felicloud.com
NEXTCLOUD_ADMIN_USER=admin
NEXTCLOUD_ADMIN_PASSWORD=mot_de_passe_admin
NEXTCLOUD_FREE_GROUP=10GB Free
```

**Comment obtenir ces infos :**
1. Connectez-vous à votre Nextcloud en tant qu'admin
2. Allez dans **Paramètres → Sécurité**
3. Créez un **mot de passe d'application** (recommandé au lieu du vrai mot de passe)
4. Utilisez ce mot de passe dans `NEXTCLOUD_ADMIN_PASSWORD`

---

## ⚠️ MODE STATIQUE vs SERVEUR

**Votre configuration actuelle : STATIQUE**

Le site est configuré avec `output: 'export'` dans `next.config.mjs`, ce qui génère un site **100% statique** (HTML/CSS/JS uniquement).

### Limitations du mode statique :

❌ **Pas de backend côté serveur**
- Les appels SMTP ne fonctionnent pas directement
- Les appels API Nextcloud ne fonctionnent pas directement
- Pas de routes API (`/api/*`)

### Solutions :

#### Option 1 : Créer un backend séparé (RECOMMANDÉ)

Créez une API séparée pour :
- Envoyer des emails via SMTP
- Créer des comptes Nextcloud
- Gérer les paiements Stripe

**Avantages :**
- Site statique = ultra rapide
- Hébergement gratuit (Netlify, Vercel, CloudFlare Pages)
- Backend peut être sur un petit serveur

#### Option 2 : Passer en mode serveur

Retirer `output: 'export'` de `next.config.mjs` :

```javascript
// next.config.mjs
const nextConfig = {
  // output: 'export',  // ← Commenter cette ligne
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

**Avantages :**
- Toutes les fonctionnalités Next.js
- Routes API fonctionnelles
- SMTP et Nextcloud API marchent

**Inconvénients :**
- Besoin d'un serveur Node.js (Vercel, VPS, etc.)
- Plus cher qu'un site statique

---

## 🔐 Variables côté client

Les variables préfixées `NEXT_PUBLIC_*` sont **visibles dans le navigateur**.

**N'UTILISEZ JAMAIS pour :**
- ❌ Mots de passe SMTP
- ❌ Clés API secrètes
- ❌ Mots de passe Nextcloud

**Utilisez pour :**
- ✅ URL publiques (`NEXT_PUBLIC_APP_URL`)
- ✅ Clés API publiques (clé publique Stripe)

---

## 📝 Variables disponibles

Voir le fichier `.env.example` pour la liste complète avec :
- Application (URLs publiques)
- Database (si vous ajoutez une base de données)
- Nextcloud API
- Stripe (paiements)
- SMTP (emails)
- Security (secrets JWT)
- Redis (sessions)
- Monitoring (Sentry)
- Feature flags

---

## 🚀 Workflow de développement

1. **Développement local** :
   ```bash
   cp .env.example .env.local
   # Éditez .env.local avec vos configs de dev
   npm run dev
   ```

2. **Build de production** :
   ```bash
   # Les variables dans .env.local sont lues au build
   npm run build
   ```

3. **Déploiement** :
   - **Netlify/Vercel** : Ajoutez les variables dans leur interface
   - **Serveur VPS** : Créez `.env.local` sur le serveur
   - **GitHub Actions** : Utilisez les secrets GitHub

---

## ❓ Questions fréquentes

**Q: Puis-je mettre SMTP_PASSWORD dans le build ?**
**R:** NON ! En mode statique, tout est visible. Il faut un backend.

**Q: Comment tester les emails en local ?**
**R:** Utilisez [Mailtrap](https://mailtrap.io/) (emails de test gratuits)

**Q: Où héberger le backend séparé ?**
**R:** Options : Vercel (fonctions serverless), Railway, Render, VPS

**Q: Les variables changent après le build ?**
**R:** Il faut rebuild. Les variables sont "compilées" dans le code.

---

**Pour plus d'aide, consultez la [documentation Next.js](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)**
