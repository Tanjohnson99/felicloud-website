# Variables d'Environnement - Felicloud

Liste complète des variables d'environnement nécessaires pour Coolify.

## 🔴 OBLIGATOIRES (Le site ne marchera pas sans)

### Nextcloud API
```env
NEXTCLOUD_URL=https://cloud.felicloud.com
NEXTCLOUD_ADMIN_USER=admin
NEXTCLOUD_ADMIN_PASSWORD=ton_mot_de_passe_admin_ici
```

### SMTP (Envoi d'emails)
```env
SMTP_HOST=smtp.felicloud.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=noreply@felicloud.com
SMTP_PASSWORD=ton_mot_de_passe_smtp_ici
SMTP_FROM_EMAIL=noreply@felicloud.com
SMTP_FROM_NAME=Felicloud
```

### Admin
```env
ADMIN_EMAIL=contact@felicloud.com
```

## 🟡 RECOMMANDÉES (Pour Stripe paiements)

```env
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
```

**Note:** Les liens Stripe Checkout sont déjà dans le code (`lib/config/stripe.ts`), pas besoin de les mettre ici.

## 🟢 OPTIONNELLES (Pas nécessaires)

### Nextcloud - Groupe et quota par défaut
```env
NEXTCLOUD_FREE_GROUP=10GB Free
FREE_ACCOUNT_QUOTA_GB=10
```
- `NEXTCLOUD_FREE_GROUP`: Groupe pour les comptes gratuits (optionnel)
- `FREE_ACCOUNT_QUOTA_GB`: Quota en GB pour les comptes gratuits (défaut: 10 GB)

### Node.js
```env
NODE_ENV=production
```
Coolify le définit automatiquement.

## 📋 Template pour Coolify

Copie-colle ça directement dans Coolify → Environment Variables:

```env
# === NEXTCLOUD ===
NEXTCLOUD_URL=https://cloud.felicloud.com
NEXTCLOUD_ADMIN_USER=admin
NEXTCLOUD_ADMIN_PASSWORD=CHANGE_ME
NEXTCLOUD_FREE_GROUP=10GB Free
FREE_ACCOUNT_QUOTA_GB=10

# === SMTP ===
SMTP_HOST=smtp.felicloud.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=noreply@felicloud.com
SMTP_PASSWORD=CHANGE_ME
SMTP_FROM_EMAIL=noreply@felicloud.com
SMTP_FROM_NAME=Felicloud

# === ADMIN ===
ADMIN_EMAIL=contact@felicloud.com

# === STRIPE (optionnel pour l'instant) ===
STRIPE_SECRET_KEY=sk_live_CHANGE_ME
STRIPE_WEBHOOK_SECRET=whsec_CHANGE_ME

# === NODE ===
NODE_ENV=production
```

## ⚠️ Sécurité

**JAMAIS:**
- ❌ Commiter ces valeurs dans Git
- ❌ Les partager publiquement
- ❌ Les mettre dans le code

**TOUJOURS:**
- ✅ Les définir dans Coolify Dashboard uniquement
- ✅ Utiliser des mots de passe forts
- ✅ Renouveler régulièrement les secrets

## 🧪 Valeurs de Test (pour développement local)

Si tu veux tester en local, crée `.env.local`:

```env
NEXTCLOUD_URL=https://demo.nextcloud.com
NEXTCLOUD_ADMIN_USER=test
NEXTCLOUD_ADMIN_PASSWORD=test123

SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_SECURE=false
SMTP_USER=test
SMTP_PASSWORD=test
SMTP_FROM_EMAIL=test@localhost
SMTP_FROM_NAME=Felicloud Test

ADMIN_EMAIL=test@localhost

NODE_ENV=development
```

**Note:** Les fonctionnalités SMTP et Nextcloud ne marcheront pas vraiment, mais le site build correctement.

## 🔍 Comment obtenir ces valeurs?

### NEXTCLOUD_URL
L'URL de ton instance Nextcloud (ex: https://cloud.felicloud.com)

### NEXTCLOUD_ADMIN_USER / PASSWORD
Un compte admin Nextcloud avec permissions de créer des utilisateurs.

**Recommandation:** Crée un "App Password" dédié dans Nextcloud plutôt que d'utiliser ton vrai mot de passe admin.

### SMTP_*
Les credentials de ton serveur email.

**Options:**
- Ton propre serveur mail (Postfix, etc.)
- Gmail (avec App Password)
- SendGrid
- Mailgun
- Amazon SES

### STRIPE_SECRET_KEY
Dashboard Stripe → Developers → API Keys → Secret Key

### STRIPE_WEBHOOK_SECRET
Dashboard Stripe → Developers → Webhooks → [ton webhook] → Signing secret

## ✅ Vérification

Une fois déployé, teste que les variables sont bien chargées:

```
https://felicloud.com/api/health
```

Devrait retourner: `{"status": "ok"}`

Si erreur, vérifie les logs Coolify.
