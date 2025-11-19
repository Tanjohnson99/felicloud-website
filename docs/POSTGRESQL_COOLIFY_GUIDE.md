# 🐘 Configuration PostgreSQL dans Coolify - Guide Visuel

Guide étape par étape pour ajouter PostgreSQL à ton projet Felicloud.

---

## 📋 Étape 1: Créer la Base de Données PostgreSQL

### 1.1. Dans Coolify Dashboard

1. **Clique sur "+" ou "+ New Resource"** (en haut à droite)
2. **Sélectionne "Database"**
3. **Choisis "PostgreSQL"**

### 1.2. Configuration de la Base de Données

Remplis les champs suivants:

```
Name: felicloud-db
Description: Database for Felicloud email verifications and user data

┌─────────────────────────────────────┐
│ PostgreSQL Version: 16              │
│ (ou la dernière version stable)     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Database Name: felicloud            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Username: felicloud_user            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Password: (auto-généré par Coolify) │
│ ⚠️ COPIE CE MOT DE PASSE!           │
└─────────────────────────────────────┘
```

### 1.3. Options Avancées (optionnel)

Tu peux laisser les options par défaut, mais si tu veux:
- **Port:** 5432 (par défaut, ne change pas)
- **Data Volume:** Coolify gère automatiquement

### 1.4. Déployer

1. **Clique sur "Deploy"** ou "Create Database"
2. **Attends 1-2 minutes** - Coolify va:
   - Télécharger l'image PostgreSQL
   - Créer le container
   - Initialiser la base de données
   - Démarrer le service

Tu verras: `✓ Database is running`

---

## 📋 Étape 2: Récupérer la Connection String

### 2.1. Dans la Page de ta Base de Données

Une fois PostgreSQL déployé:

1. **Clique sur ta base de données "felicloud-db"**
2. **Cherche la section "Connection Details"** ou **"Environment Variables"**
3. **Tu devrais voir:**

```env
DATABASE_URL=postgresql://felicloud_user:AUTO_GENERATED_PASSWORD@postgres:5432/felicloud
```

**OU séparément:**
```env
DB_HOST=postgres
DB_PORT=5432
DB_NAME=felicloud
DB_USER=felicloud_user
DB_PASSWORD=AUTO_GENERATED_PASSWORD
```

### 2.2. Copier la Connection String

**Option A - Connection String complète (recommandé):**
```
postgresql://felicloud_user:XXXXXXXXXX@postgres:5432/felicloud
```

**⚠️ Points importants:**
- Le **hostname est `postgres`** (pas `localhost`!)
- Pourquoi? Car c'est sur le réseau Docker interne de Coolify
- Coolify gère le DNS automatiquement entre containers

---

## 📋 Étape 3: Ajouter DATABASE_URL à ton Application

### 3.1. Va dans ton Application Felicloud

1. **Dashboard Coolify** → Cherche ton app **"felicloud-website"**
2. **Clique dessus**
3. **Va dans l'onglet "Environment Variables"**

### 3.2. Ajouter la Variable

**Ajoute une nouvelle variable:**

```env
DATABASE_URL=postgresql://felicloud_user:TON_PASSWORD@postgres:5432/felicloud
```

**⚠️ Remplace:**
- `TON_PASSWORD` par le mot de passe que tu as copié à l'étape 1

**Exemple réel:**
```env
DATABASE_URL=postgresql://felicloud_user:k9mP2x8QwE5rZ@postgres:5432/felicloud
```

### 3.3. Configuration Importante

**Assure-toi que:**
- ✅ La variable est marquée comme **"Available at Runtime"** (pas seulement Build Time)
- ✅ Elle n'est **PAS** publique/exposée

---

## 📋 Étape 4: Redéployer l'Application

### 4.1. Redéploiement

1. **Dans ton application Felicloud**
2. **Clique sur "Deploy"** ou "Redeploy"
3. **Attends 3-5 minutes**

### 4.2. Vérification

Une fois le déploiement terminé:

1. **Vérifie les logs:**
   - Clique sur "Logs" ou "Application Logs"
   - Tu ne devrais voir **AUCUNE erreur de connexion DB**

2. **Teste la connexion (optionnel):**
   - On créera un endpoint `/api/db-test` plus tard pour vérifier

---

## 📋 Étape 5: Créer le Schéma de Base de Données

### 5.1. Se Connecter à PostgreSQL (via Coolify)

**Méthode 1: Terminal dans Coolify (recommandé)**

1. Dans Coolify, va dans ta **base de données "felicloud-db"**
2. Cherche **"Terminal"** ou **"Console"** ou **"Execute Command"**
3. Ça devrait ouvrir un terminal dans le container PostgreSQL

**Méthode 2: psql depuis ton ordinateur (avancé)**

Si tu as `psql` installé localement et que Coolify expose le port:
```bash
psql "postgresql://felicloud_user:PASSWORD@ton-serveur.com:5432/felicloud"
```

### 5.2. Exécuter le SQL

Une fois dans le terminal PostgreSQL (`psql`), exécute:

```sql
-- Se connecter à la base felicloud
\c felicloud

-- Créer la table email_verifications
CREATE TABLE email_verifications (
  id SERIAL PRIMARY KEY,
  token UUID UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP WITH TIME ZONE,
  ip_address VARCHAR(45)
);

-- Créer les index pour performances
CREATE INDEX idx_email_verifications_token ON email_verifications(token);
CREATE INDEX idx_email_verifications_expires_at ON email_verifications(expires_at);
CREATE INDEX idx_email_verifications_email ON email_verifications(email);

-- Vérifier que la table est créée
\dt

-- Afficher la structure de la table
\d email_verifications
```

Tu devrais voir:
```
Table "public.email_verifications"
    Column    |           Type           | Nullable |         Default
--------------+--------------------------+----------+-------------------------
 id           | integer                  | not null | nextval('...')
 token        | uuid                     | not null | gen_random_uuid()
 email        | character varying(255)   | not null |
 full_name    | character varying(255)   | not null |
 created_at   | timestamp with time zone |          | now()
 expires_at   | timestamp with time zone | not null |
 verified     | boolean                  |          | false
 verified_at  | timestamp with time zone |          |
 ip_address   | character varying(45)    |          |
```

---

## 📋 Étape 6: Tester la Connexion depuis Next.js

On créera un fichier de test dans le code pour vérifier que Next.js peut se connecter.

**Plus tard, je vais créer:**
- `lib/db/postgres.ts` - Connexion
- Un endpoint `/api/db-test` pour tester

---

## ✅ Checklist Complète

Vérifie que tu as fait tout ça:

- [ ] PostgreSQL créé dans Coolify
- [ ] Base de données nommée `felicloud`
- [ ] Utilisateur `felicloud_user` créé
- [ ] Mot de passe copié et sauvegardé
- [ ] `DATABASE_URL` ajoutée dans les env vars de l'application
- [ ] Application redéployée
- [ ] Pas d'erreurs dans les logs
- [ ] Table `email_verifications` créée
- [ ] Index créés

---

## 🆘 Dépannage

### Erreur: "Connection refused"

**Cause:** Le hostname est incorrect

**Solution:** Assure-toi d'utiliser `postgres` (pas `localhost`)
```env
DATABASE_URL=postgresql://felicloud_user:xxx@postgres:5432/felicloud
                                                ^^^^^^^^
```

### Erreur: "Password authentication failed"

**Cause:** Mauvais mot de passe

**Solution:**
1. Retourne dans Coolify → ta DB
2. Copie le mot de passe exact
3. Remplace dans `DATABASE_URL`

### Erreur: "Database does not exist"

**Cause:** Le nom de la base est incorrect

**Solution:** Vérifie que c'est bien `felicloud`:
```env
DATABASE_URL=postgresql://felicloud_user:xxx@postgres:5432/felicloud
                                                            ^^^^^^^^^
```

### PostgreSQL ne démarre pas

**Cause:** Problème de volume ou ressources

**Solution:**
1. Dans Coolify, vérifie les logs de la base de données
2. Vérifie que ton serveur a assez de RAM/espace disque
3. Redémarre le container PostgreSQL

---

## 📞 Prochaines Étapes

**Une fois que PostgreSQL est configuré et que la table est créée:**

1. ✅ Dis-moi "PostgreSQL est prêt!"
2. 🔧 Je vais créer tout le code Next.js pour:
   - Se connecter à PostgreSQL
   - Gérer les tokens de vérification
   - Nouveau flow d'inscription
   - Emails de notification admin

**Questions? Bloqué quelque part?** Envoie-moi une capture d'écran ou copie-colle l'erreur!

---

**Bon courage! Tu vas y arriver! 💪**
