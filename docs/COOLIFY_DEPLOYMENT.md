# Deploiement Felicloud sur Coolify

Guide complet pour déployer le site Felicloud sur Coolify.

## 📋 Prérequis

- Coolify installé et configuré sur ton serveur
- Accès à ton repository Git (GitHub, GitLab, etc.)
- Nom de domaine configuré (felicloud.com)

## 🚀 Étapes de Déploiement

### 1. Créer le Projet dans Coolify

1. Connecte-toi à ton interface Coolify
2. Clique sur **"+ New Resource"**
3. Sélectionne **"Application"**
4. Choisis **"Public Repository"** ou connecte ton compte Git

### 2. Configuration du Repository

**Repository URL:**
```
https://github.com/ton-user/felicloud-website
```

**Branch:**
```
main
```
(ou `claude/cleanup-translations-structure-012mWfvuNk1e7wezmgPEv38p` si tu veux déployer cette branche)

**Build Pack:**
```
nixpacks
```
(Coolify détectera automatiquement Next.js)

### 3. Variables d'Environnement

Dans Coolify → Ton application → **Environment Variables**, ajoute:

#### Nextcloud Configuration
```env
NEXTCLOUD_URL=https://cloud.felicloud.com
NEXTCLOUD_ADMIN_USER=ton_admin_nextcloud
NEXTCLOUD_ADMIN_PASSWORD=ton_mot_de_passe_admin
NEXTCLOUD_FREE_GROUP=10GB Free
```

#### SMTP Configuration
```env
SMTP_HOST=smtp.felicloud.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=noreply@felicloud.com
SMTP_PASSWORD=ton_mot_de_passe_smtp
SMTP_FROM_EMAIL=noreply@felicloud.com
SMTP_FROM_NAME=Felicloud
```

#### Admin Configuration
```env
ADMIN_EMAIL=contact@felicloud.com
```

#### Stripe Configuration (Optionnel pour l'instant)
```env
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

#### Node.js Configuration
```env
NODE_ENV=production
```

### 4. Configuration du Port

Coolify détecte automatiquement le port 3000 de Next.js.

**Si nécessaire, tu peux le forcer:**
```
Port: 3000
```

### 5. Configuration du Domaine

Dans Coolify → Ton application → **Domains**:

```
felicloud.com
www.felicloud.com
```

Coolify configurera automatiquement:
- ✅ SSL avec Let's Encrypt
- ✅ Redirection HTTP → HTTPS
- ✅ Proxy Nginx/Traefik

### 6. Build Configuration (Automatique)

Coolify utilisera automatiquement ces commandes:

**Install:**
```bash
npm install
```

**Build:**
```bash
npm run build
```

**Start:**
```bash
npm start
```

**Si tu veux personnaliser**, va dans **Advanced** → **Build Command**:
```bash
npm run build
```

### 7. Health Check (Optionnel mais recommandé)

Configure un health check pour que Coolify vérifie que l'app tourne:

**URL:**
```
/api/health
```

**Interval:** 30s
**Timeout:** 5s
**Retries:** 3

### 8. Déploiement

1. Clique sur **"Deploy"**
2. Coolify va:
   - Cloner le repo
   - Installer les dépendances
   - Builder l'application
   - Démarrer le serveur
   - Configurer SSL

**Temps estimé:** 2-5 minutes

### 9. Vérification Post-Déploiement

Une fois déployé, vérifie:

✅ **Site accessible:**
```
https://felicloud.com
```

✅ **API Health Check:**
```
https://felicloud.com/api/health
```

✅ **Pages principales:**
- https://felicloud.com/en
- https://felicloud.com/en/pricing
- https://felicloud.com/en/features

✅ **Logs Coolify:**
```
Coolify → Ton app → Logs
```
Vérifie qu'il n'y a pas d'erreurs

## 🔧 Configuration Stripe Webhook

### Dans Stripe Dashboard

1. Va sur https://dashboard.stripe.com/webhooks
2. Clique "Add endpoint"
3. URL du webhook:
   ```
   https://felicloud.com/api/webhooks/stripe
   ```
4. Événements à écouter:
   - `checkout.session.completed` ✅
   - `checkout.session.expired` (optionnel)

5. Copie le **Webhook Signing Secret** (commence par `whsec_`)

6. Ajoute-le dans Coolify → Environment Variables:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_ton_secret_ici
   ```

7. **Redéploie** l'application dans Coolify pour prendre en compte la nouvelle variable

### Test du Webhook

Teste avec Stripe CLI:
```bash
stripe listen --forward-to https://felicloud.com/api/webhooks/stripe
stripe trigger checkout.session.completed
```

Ou fais un vrai test de paiement (mode test).

## 🔄 Déploiement Automatique (CI/CD)

Coolify peut redéployer automatiquement quand tu push sur Git:

1. Dans Coolify → Ton app → **Settings**
2. Active **"Auto Deploy"**
3. Sélectionne la branche (ex: `main`)

Maintenant, chaque fois que tu push sur `main`, Coolify redéploie automatiquement! 🎉

## 🐛 Debugging

### Voir les logs en temps réel
```
Coolify → Ton app → Logs → Real-time
```

### Erreurs courantes

**❌ "Build failed"**
- Vérifie que toutes les variables d'environnement sont définies
- Regarde les logs de build dans Coolify

**❌ "Application not responding"**
- Vérifie que le port 3000 est bien détecté
- Vérifie les logs de l'application

**❌ "502 Bad Gateway"**
- L'app a crashé, regarde les logs
- Probablement une variable d'environnement manquante

**❌ Emails ne partent pas**
- Vérifie la config SMTP
- Teste avec `curl https://felicloud.com/api/health`

**❌ Webhook Stripe ne fonctionne pas**
- Vérifie `STRIPE_WEBHOOK_SECRET` dans Coolify
- Vérifie les logs: `Coolify → Logs`
- Vérifie dans Stripe Dashboard → Webhooks → Recent deliveries

## 📊 Monitoring

### Voir l'utilisation des ressources
```
Coolify → Ton app → Metrics
```

Tu peux voir:
- CPU usage
- Memory usage
- Network traffic

### Logs persistants

Les logs sont dans Coolify, mais tu peux aussi les exporter:
```
Coolify → Settings → Logs → Export
```

## 🔒 Sécurité

**Checklist avant production:**

- [ ] Toutes les variables d'environnement sont définies
- [ ] `STRIPE_WEBHOOK_SECRET` configuré
- [ ] SSL activé (Let's Encrypt)
- [ ] Health check configuré
- [ ] `.env.local` JAMAIS dans Git (vérifié ✅)
- [ ] Mot de passe Nextcloud admin fort
- [ ] Mot de passe SMTP sécurisé

## 🔄 Mise à jour

Pour déployer une nouvelle version:

**Méthode 1: Auto (si CI/CD activé)**
```bash
git add .
git commit -m "Update feature X"
git push origin main
```
→ Coolify redéploie automatiquement

**Méthode 2: Manuel**
1. Push ton code sur Git
2. Dans Coolify → Ton app → **Redeploy**

## 🆘 Support

**Problèmes avec Coolify:**
- Documentation: https://coolify.io/docs
- Discord: https://discord.gg/coolify

**Problèmes avec le code:**
- Regarde les logs dans Coolify
- Vérifie les variables d'environnement
- Teste en local: `npm run dev`

## 📝 Checklist Finale

Avant de passer en production:

- [ ] Application déployée sur Coolify
- [ ] Domaine configuré avec SSL
- [ ] Variables d'environnement toutes définies
- [ ] Health check fonctionne
- [ ] Pages principales accessibles
- [ ] Formulaire de contact fonctionne
- [ ] Stripe webhooks configurés
- [ ] Test de paiement réussi (mode test)
- [ ] Emails de bienvenue arrivent bien
- [ ] Comptes Nextcloud créés correctement

Une fois tout ✅, tu peux passer en production! 🚀
