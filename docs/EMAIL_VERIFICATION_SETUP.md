# 📧 Configuration de la Vérification d'Email

Guide complet pour implémenter la vérification d'email avec PostgreSQL.

---

## 🗄️ ÉTAPE 1: Configurer PostgreSQL dans Coolify

### 1.1. Ajouter PostgreSQL

1. **Dans Coolify Dashboard:**
   - Clique sur **"+ New Resource"**
   - Sélectionne **"Database"**
   - Choisis **"PostgreSQL"**
   - Version: **16** (ou la dernière stable)

2. **Configuration:**
   - **Name:** `felicloud-db`
   - **Database Name:** `felicloud`
   - **Username:** `felicloud_user`
   - **Password:** Coolify génère automatiquement (copie-le!)

3. **Clique sur "Deploy"**
   - Attends 1-2 minutes
   - PostgreSQL sera disponible sur le réseau interne de Coolify

### 1.2. Récupérer la Connection String

Dans Coolify, va dans ta base de données PostgreSQL:
- Cherche **"Connection String"** ou **"DATABASE_URL"**
- Format: `postgresql://felicloud_user:PASSWORD@postgres:5432/felicloud`

**⚠️ IMPORTANT:** Le hostname est `postgres` (pas `localhost`) car c'est sur le réseau Docker interne.

### 1.3. Ajouter DATABASE_URL dans ton Application

1. Va dans ton **application Felicloud** (pas la base de données)
2. **Environment Variables**
3. Ajoute:
   ```env
   DATABASE_URL=postgresql://felicloud_user:TON_PASSWORD@postgres:5432/felicloud
   ```
4. **Redéploie** l'application

---

## 🏗️ ÉTAPE 2: Architecture de la Base de Données

### 2.1. Schéma de la Table `email_verifications`

```sql
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

-- Index pour rechercher par token rapidement
CREATE INDEX idx_email_verifications_token ON email_verifications(token);

-- Index pour nettoyer les tokens expirés
CREATE INDEX idx_email_verifications_expires_at ON email_verifications(expires_at);
```

### 2.2. Nettoyage Automatique

Les tokens expirés seront automatiquement ignorés par le code (vérification `expires_at < NOW()`).

Pour nettoyer la DB périodiquement, on peut ajouter un job cron plus tard.

---

## 🔄 ÉTAPE 3: Nouveau Flow d'Inscription

### Flow Complet

```
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 1: Demande d'Inscription                             │
│  Page: /en/signup                                           │
│  ─────────────────────────────────────────────────          │
│  Formulaire:                                                │
│    - Nom complet                                            │
│    - Email                                                  │
│  ─────────────────────────────────────────────────          │
│  Action:                                                    │
│    1. Validation de l'email (format)                        │
│    2. Vérifier si email déjà utilisé (Nextcloud)            │
│    3. Vérifier si token en attente existe déjà              │
│    4. Créer token de vérification (DB)                      │
│    5. Envoyer email de vérification (utilisateur)           │
│    6. Envoyer notification (admin)                          │
│    7. Afficher "Vérifiez votre email"                       │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  EMAIL: Vérification d'Adresse                              │
│  ─────────────────────────────────────────────────          │
│  Contenu:                                                   │
│    "Bonjour [Nom],                                          │
│     Cliquez sur le lien pour finaliser votre inscription:"  │
│                                                             │
│     [Bouton: Finaliser mon inscription]                     │
│     https://felicloud.com/en/signup/verify?token=xxx        │
│                                                             │
│     Lien valide pendant 24h."                               │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  NOTIFICATION ADMIN: Nouvelle Demande                        │
│  ─────────────────────────────────────────────────          │
│  À: ADMIN_EMAIL                                             │
│  Sujet: "Nouvelle demande d'inscription - [Nom]"            │
│  ─────────────────────────────────────────────────          │
│  Contenu:                                                   │
│    "Nouvelle demande d'inscription en attente:              │
│     - Nom: [Nom complet]                                    │
│     - Email: [email]                                        │
│     - Date: [timestamp]                                     │
│     - IP: [adresse IP]                                      │
│                                                             │
│     Statut: EN ATTENTE DE VALIDATION"                       │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 2: Finalisation (Vérification du Token)              │
│  Page: /en/signup/verify?token=xxx                          │
│  ─────────────────────────────────────────────────          │
│  Vérifications:                                             │
│    1. Token existe?                                         │
│    2. Token non expiré? (< 24h)                             │
│    3. Token pas déjà utilisé?                               │
│  ─────────────────────────────────────────────────          │
│  Si valide, afficher formulaire:                            │
│    - Nom complet (read-only, pré-rempli)                    │
│    - Email (read-only, pré-rempli)                          │
│    - Mot de passe (validation stricte)                      │
│    - Confirmer mot de passe                                 │
│    - ☑️ J'accepte les CGU                                   │
│    - ☑️ J'accepte la politique de confidentialité           │
│  ─────────────────────────────────────────────────          │
│  Si invalide/expiré:                                        │
│    "Ce lien est invalide ou a expiré.                       │
│     Veuillez refaire une demande d'inscription."            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Action: Création du Compte                                 │
│  ─────────────────────────────────────────────────          │
│  1. Valider mot de passe (10 chars, maj, min, spécial)     │
│  2. Vérifier CGU + Privacy acceptés                         │
│  3. Créer compte Nextcloud (username = email)               │
│  4. Assigner quota 10GB                                     │
│  5. Ajouter au groupe "Free Users"                          │
│  6. Marquer token comme "verified" (DB)                     │
│  7. Envoyer email de bienvenue (utilisateur)                │
│  8. Envoyer notification création (admin)                   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  EMAIL: Bienvenue sur Felicloud!                            │
│  ─────────────────────────────────────────────────          │
│  À: [email]                                                 │
│  Sujet: "Bienvenue sur Felicloud!"                          │
│  ─────────────────────────────────────────────────          │
│  Contenu:                                                   │
│    "Votre compte a été créé avec succès!                    │
│     - Email: [email]                                        │
│     - Quota: 10 GB                                          │
│                                                             │
│     [Bouton: Accéder à mon cloud]                           │
│     https://cloud.felicloud.com"                            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  NOTIFICATION ADMIN: Compte Créé                            │
│  ─────────────────────────────────────────────────          │
│  À: ADMIN_EMAIL                                             │
│  Sujet: "Nouveau compte créé - [email]"                     │
│  ─────────────────────────────────────────────────          │
│  Contenu:                                                   │
│    "Un nouveau compte a été créé:                           │
│     - Nom: [Nom complet]                                    │
│     - Email: [email]                                        │
│     - Date inscription: [timestamp demande]                 │
│     - Date validation: [timestamp maintenant]               │
│     - Quota: 10 GB                                          │
│     - Groupe: Free Users                                    │
│                                                             │
│     Statut: ACTIF ✓"                                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  Page de Succès                                             │
│  ─────────────────────────────────────────────────          │
│  Message:                                                   │
│    "🎉 Votre compte a été créé avec succès!                 │
│                                                             │
│     Vous pouvez maintenant accéder à votre cloud."          │
│                                                             │
│     [Bouton: Se connecter]                                  │
│     → https://cloud.felicloud.com                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 ÉTAPE 4: Fichiers à Créer/Modifier

### Nouveaux Fichiers

1. **`lib/db/postgres.ts`** - Connexion PostgreSQL
2. **`lib/db/email-verifications.ts`** - CRUD pour tokens
3. **`app/api/signup/request/route.ts`** - Étape 1 (demande)
4. **`app/api/signup/verify/route.ts`** - Étape 2 (vérification + création)
5. **`app/en/signup/verify/page.tsx`** - Page de finalisation
6. **`lib/services/admin-notifications.ts`** - Emails admin

### Fichiers à Modifier

1. **`app/en/signup/page.tsx`** - Simplifier (juste nom + email)
2. **`lib/services/email.ts`** - Ajouter templates de vérification
3. **`package.json`** - Ajouter dépendance `pg`
4. **`docs/ENV_VARIABLES.md`** - Ajouter DATABASE_URL

---

## 🔐 ÉTAPE 5: Sécurité

### Token Sécurisé

- UUID v4 (128-bit, cryptographiquement sécurisé)
- Expiration 24h
- Usage unique (marqué `verified=true` après usage)
- Stockage de l'IP pour audit

### Validation Email

- Vérifier que l'email n'existe pas déjà dans Nextcloud
- Empêcher les demandes multiples (1 token en attente max par email)
- Rate limiting (optionnel, à ajouter plus tard)

### GDPR Compliance

- Consentement explicite (checkbox CGU + Privacy)
- Email stocké uniquement après validation
- Possibilité de supprimer les tokens expirés

---

## 📊 ÉTAPE 6: Dépendances NPM

Installer PostgreSQL client:

```bash
npm install pg
npm install --save-dev @types/pg
```

---

## ✅ Checklist d'Implémentation

- [ ] Configurer PostgreSQL dans Coolify
- [ ] Ajouter DATABASE_URL dans env vars
- [ ] Créer le schéma de base de données
- [ ] Installer `pg` package
- [ ] Créer `lib/db/postgres.ts`
- [ ] Créer `lib/db/email-verifications.ts`
- [ ] Créer templates email (vérification + notifications admin)
- [ ] Modifier `/en/signup` (formulaire simplifié)
- [ ] Créer `/api/signup/request` (étape 1)
- [ ] Créer `/en/signup/verify` (page finalisation)
- [ ] Créer `/api/signup/verify` (étape 2 + création compte)
- [ ] Tester flow complet
- [ ] Vérifier emails admin reçus
- [ ] Déployer sur Coolify

---

## 🧪 Test du Flow

### Test 1: Demande Normale

1. Va sur `/en/signup`
2. Entre nom + email valide
3. Vérifie email de vérification reçu
4. Vérifie admin a reçu notification "en attente"
5. Clique sur lien dans email
6. Entre mot de passe + accepte CGU
7. Vérifie compte créé dans Nextcloud
8. Vérifie email de bienvenue reçu
9. Vérifie admin a reçu notification "compte créé"

### Test 2: Token Expiré

1. Créer token manuellement avec `expires_at` dans le passé
2. Essayer d'accéder au lien
3. Devrait afficher "Lien expiré"

### Test 3: Email Déjà Utilisé

1. Créer compte avec email
2. Essayer de refaire une demande avec même email
3. Devrait afficher "Email déjà utilisé"

---

## 📧 Templates des Emails

### Email Vérification (utilisateur)

**Sujet:** Vérifiez votre adresse email - Felicloud

**Corps:**
```
Bonjour [Nom],

Merci de votre intérêt pour Felicloud!

Pour finaliser votre inscription et créer votre compte gratuit de 10 GB,
veuillez cliquer sur le bouton ci-dessous:

[Bouton: Finaliser mon inscription]

Ce lien est valide pendant 24 heures.

Si vous n'avez pas demandé cette inscription, vous pouvez ignorer cet email.

Cordialement,
L'équipe Felicloud
```

### Notification Admin - Demande

**Sujet:** Nouvelle demande d'inscription - [Nom]

**Corps:**
```
Nouvelle demande d'inscription en attente de validation:

Nom: [Nom complet]
Email: [email]
Date: [timestamp]
IP: [adresse IP]

Statut: EN ATTENTE DE VALIDATION

Ce compte sera créé une fois que l'utilisateur aura validé son email
et complété le formulaire d'inscription.
```

### Notification Admin - Compte Créé

**Sujet:** Nouveau compte créé - [email]

**Corps:**
```
Un nouveau compte Felicloud a été créé avec succès:

Nom: [Nom complet]
Email: [email]
Date demande: [timestamp demande]
Date validation: [timestamp validation]
Quota: 10 GB
Groupe: Free Users

Statut: ACTIF ✓

Le compte est maintenant accessible sur cloud.felicloud.com
```

---

## 🚀 Ordre d'Implémentation

1. ✅ Configuration PostgreSQL (TOI)
2. 🔧 Création des fichiers de base (MOI)
3. 🔧 Nouveau flow signup (MOI)
4. 🧪 Tests (ENSEMBLE)
5. 🚀 Déploiement (TOI)

---

**Prêt à commencer?** Dis-moi quand tu as configuré PostgreSQL dans Coolify! 🚀
