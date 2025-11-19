# Setup Nextcloud Groups

Ce guide explique comment créer les groupes Nextcloud nécessaires pour les utilisateurs payants.

## 🔐 Prérequis

### 1. Configurer le secret admin

Ajoute cette variable d'environnement dans **Coolify** (ou ton `.env.local`):

```env
ADMIN_SECRET=ton_secret_super_securise_ici
```

💡 **Génère un secret sécurisé:**
```bash
# Génère un secret aléatoire de 32 caractères
openssl rand -hex 32
```

### 2. Redéployer l'application

Après avoir ajouté `ADMIN_SECRET`, redéploie l'application pour que la variable soit disponible.

## 🚀 Exécution

### Option A: Via curl (Recommandé)

```bash
curl -X POST https://dev.felicloud.com/api/admin/setup-nextcloud-groups \
  -H "Authorization: Bearer TON_ADMIN_SECRET" \
  -H "Content-Type: application/json"
```

**Remplace:**
- `https://dev.felicloud.com` par ton URL
- `TON_ADMIN_SECRET` par la valeur de ta variable `ADMIN_SECRET`

### Option B: Via navigateur (avec extension REST client)

**URL:** `POST https://dev.felicloud.com/api/admin/setup-nextcloud-groups`

**Headers:**
```
Authorization: Bearer TON_ADMIN_SECRET
Content-Type: application/json
```

## ✅ Résultat attendu

Si tout fonctionne, tu recevras une réponse JSON comme:

```json
{
  "success": true,
  "message": "All Nextcloud groups created successfully",
  "summary": {
    "total": 9,
    "success": 9,
    "failed": 0
  },
  "results": [
    {
      "group": "500GB_Monthly",
      "success": true,
      "message": "Created group: \"500GB_Monthly\""
    },
    {
      "group": "1TB_Monthly",
      "success": true,
      "message": "Created group: \"1TB_Monthly\""
    },
    ...
  ]
}
```

## 📋 Groupes créés

Le script crée **9 groupes** (Option A - un groupe par plan):

### Plans Mensuels
- `500GB_Monthly`
- `1TB_Monthly`
- `2TB_Monthly`

### Plans Annuels
- `500GB_Annual`
- `1TB_Annual`
- `2TB_Annual`

### Plans Lifetime
- `500GB_Lifetime`
- `1TB_Lifetime`
- `2TB_Lifetime`

## 🔒 Sécurité

- L'endpoint est protégé par le secret `ADMIN_SECRET`
- Ne partage **jamais** ton `ADMIN_SECRET`
- Utilise un secret fort (32+ caractères aléatoires)
- Cet endpoint peut être appelé plusieurs fois sans problème (idempotent)

## ❌ Erreurs courantes

### Erreur 401: Unauthorized
```json
{
  "error": "Unauthorized: Invalid or missing admin secret"
}
```
**Solution:** Vérifie que:
- Le header `Authorization: Bearer TON_ADMIN_SECRET` est correct
- La variable `ADMIN_SECRET` est bien configurée dans Coolify
- Tu as redéployé après avoir ajouté la variable

### Erreur 500: Admin secret not configured
```json
{
  "error": "Admin secret not configured on server"
}
```
**Solution:** Ajoute la variable `ADMIN_SECRET` dans Coolify et redéploie

### Erreur 500: Missing Nextcloud configuration
**Solution:** Vérifie que ces variables sont configurées:
- `NEXTCLOUD_URL`
- `NEXTCLOUD_ADMIN_USER`
- `NEXTCLOUD_ADMIN_PASSWORD`

## 📝 Notes

- Ce setup est à faire **une seule fois** lors de la mise en production
- Le script est idempotent: tu peux le relancer sans problème
- Les groupes existants ne seront pas modifiés, juste détectés
- Les logs détaillés sont visibles dans les logs de l'application Coolify

## 🎯 Après le setup

Une fois les groupes créés, les utilisateurs payants seront automatiquement assignés au bon groupe lors de la création de leur compte via le webhook Stripe.

Par exemple:
- Client achète le plan "1TB Lifetime"
- Webhook Stripe reçoit le paiement
- Compte Nextcloud créé avec 1TB de quota
- Utilisateur assigné au groupe `1TB_Lifetime` automatiquement ✨
