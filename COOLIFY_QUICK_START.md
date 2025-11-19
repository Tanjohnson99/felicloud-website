# 🚀 Déploiement Coolify - Guide Rapide

## Étape 1: Créer l'Application

1. Coolify Dashboard → **+ New Resource** → **Application**
2. Repository: `https://github.com/ton-user/felicloud-website`
3. Branch: `main` (ou `claude/cleanup-translations-structure-012mWfvuNk1e7wezmgPEv38p`)
4. Build Pack: **nixpacks** (auto-détecté)

## Étape 2: Variables d'Environnement

Coolify → Ton app → **Environment Variables** → Copie-colle:

```env
NEXTCLOUD_URL=https://cloud.felicloud.com
NEXTCLOUD_ADMIN_USER=ton_admin
NEXTCLOUD_ADMIN_PASSWORD=ton_password
NEXTCLOUD_FREE_GROUP=10GB Free
FREE_ACCOUNT_QUOTA_GB=10

SMTP_HOST=smtp.felicloud.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@felicloud.com
SMTP_PASSWORD=ton_smtp_password
SMTP_FROM_EMAIL=noreply@felicloud.com
SMTP_FROM_NAME=Felicloud

ADMIN_EMAIL=contact@felicloud.com

STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

NODE_ENV=production
```

**⚠️ CHANGE LES MOTS DE PASSE!**

## Étape 3: Domaine

Coolify → Ton app → **Domains**:
- `felicloud.com`
- `www.felicloud.com` (optionnel)

SSL activé automatiquement ✅

## Étape 4: Deploy!

Clique sur **Deploy** → Attends 3-5 minutes

## Étape 5: Vérification

Teste ces URLs:
- ✅ https://felicloud.com
- ✅ https://felicloud.com/api/health
- ✅ https://felicloud.com/en/pricing

## Étape 6: Stripe Webhook

1. Stripe Dashboard → Webhooks → Add endpoint
2. URL: `https://felicloud.com/api/webhooks/stripe`
3. Event: `checkout.session.completed`
4. Copie le webhook secret → Ajoute dans Coolify env vars
5. Redéploie l'app

## ✅ C'est tout!

**Documentation complète:** `docs/COOLIFY_DEPLOYMENT.md`

**Variables d'env détaillées:** `docs/ENV_VARIABLES.md`

**Support:** Regarde les logs dans Coolify si problème.
