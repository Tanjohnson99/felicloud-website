# Cahier des Charges - Page Manage Account

**Date de création:** 2025-01-19
**Version:** 1.0
**Statut:** TODO - Non implémenté

---

## 1. Contexte et Objectif

### 1.1 Problématique
Actuellement, la page `/en/account/upgrade` existe mais :
- ❌ N'a aucune authentification
- ❌ Ne connaît pas le plan réel de l'utilisateur
- ❌ Affiche un plan fictif "10GB Free" en dur
- ❌ Ne permet que l'upgrade (pas de downgrade ni suppression)
- ❌ Les boutons ne sont pas fonctionnels (TODO dans le code)

### 1.2 Objectif
Créer une page de gestion de compte complète permettant aux utilisateurs de :
- ✅ S'authentifier avec leurs credentials Nextcloud
- ✅ Voir leur plan actuel et leur utilisation
- ✅ Upgrader vers un plan supérieur
- ✅ Downgrader vers un plan inférieur (y compris retour au gratuit)
- ✅ Supprimer définitivement leur compte

### 1.3 Point d'accès
Cette page sera accessible depuis **Nextcloud External Website** (menu Settings → External sites).
URL : `https://felicloud.com/en/account/manage`

---

## 2. Architecture Technique

### 2.1 Structure de la Page

**Nouvelle route à créer :**
- `/en/account/manage` → Page principale de gestion de compte
- Supprimer `/en/account/upgrade` (remplacé par /manage)

**Flux utilisateur :**
```
1. Utilisateur clique sur "Manage Account" dans Nextcloud
2. Arrive sur /en/account/manage
3. Voit formulaire de connexion (email + mot de passe)
4. Soumet credentials
5. API vérifie via Nextcloud
6. Si valide : affiche dashboard avec plan actuel
7. Utilisateur choisit action (Upgrade/Downgrade/Delete)
8. Confirmation et exécution
```

### 2.2 APIs à Créer

#### A. `/api/account/verify-credentials` (POST)
**Input:**
```json
{
  "email": "user@example.com",
  "password": "userPassword123"
}
```

**Process:**
1. Appeler Nextcloud API pour vérifier credentials
2. Si valide, récupérer :
   - Groupes de l'utilisateur
   - Quota total et utilisation
   - Email et display name

**Output:**
```json
{
  "success": true,
  "user": {
    "email": "user@example.com",
    "displayName": "John Doe",
    "plan": "1TB_Lifetime",
    "quota": {
      "total": "1099511627776",
      "used": "549755813888",
      "usedGB": 512,
      "totalGB": 1024,
      "percentageUsed": 50
    }
  }
}
```

**Fonction Nextcloud à créer:**
```typescript
// lib/services/nextcloud.ts
export async function verifyCredentials(email: string, password: string)
export async function getUserInfo(email: string)
export async function getUserQuota(email: string)
```

---

#### B. `/api/account/upgrade` (POST)
**Utilisation:** Rediriger vers Stripe Checkout pour upgrade

**Input:**
```json
{
  "email": "user@example.com",
  "newPlan": "2TB_Lifetime"
}
```

**Process:**
1. Vérifier que newPlan > currentPlan
2. Appeler `/api/checkout/create-session` avec `isUpgrade: true`
3. Retourner l'URL Stripe

**Output:**
```json
{
  "success": true,
  "checkoutUrl": "https://checkout.stripe.com/..."
}
```

**Note:** Le webhook Stripe gère déjà les upgrades automatiquement.

---

#### C. `/api/account/downgrade` (POST)
**Input:**
```json
{
  "email": "user@example.com",
  "password": "userPassword123",
  "newPlan": "500GB_Monthly"
}
```

**Process:**
1. Vérifier credentials
2. Récupérer plan actuel et quota utilisé
3. Calculer nouveau quota
4. **Vérifier si les données actuelles rentrent dans le nouveau quota**
   - Si utilisé > nouveau quota → ERREUR (demander de libérer de l'espace d'abord)
   - Si utilisé ≤ nouveau quota → OK, continuer
5. Récupérer groupes actuels
6. Supprimer de tous les groupes
7. Ajouter au nouveau groupe (ou "Free Users" si downgrade vers gratuit)
8. Mettre à jour le quota Nextcloud
9. **Gérer Stripe:**
   - Si abonnement actif → Annuler l'abonnement
   - Si lifetime → Pas de remboursement (mentionner dans CGV)
   - Si passage au gratuit → Annuler tout
10. Envoyer emails de confirmation (client + admin)

**Output Success:**
```json
{
  "success": true,
  "message": "Account downgraded successfully",
  "newPlan": "500GB_Monthly",
  "newQuota": "500GB"
}
```

**Output Error (quota dépassé):**
```json
{
  "success": false,
  "error": "QUOTA_EXCEEDED",
  "message": "You are currently using 800 GB. Please free up space before downgrading to 500 GB.",
  "currentUsage": "800GB",
  "targetQuota": "500GB",
  "spaceToFree": "300GB"
}
```

**Fonctions à créer:**
- `calculateQuotaFromPlan(plan: string): number` → Convertit plan en bytes
- `cancelStripeSubscription(email: string): Promise<void>` → Annule abonnement Stripe
- `sendDowngradeEmail(email, oldPlan, newPlan)` → Email de confirmation downgrade
- `notifyAdminDowngrade(email, oldPlan, newPlan)` → Notification admin

---

#### D. `/api/account/delete` (POST)
**Input:**
```json
{
  "email": "user@example.com",
  "password": "userPassword123",
  "confirmation": "DELETE MY ACCOUNT"
}
```

**Process:**
1. Vérifier credentials
2. Vérifier que confirmation === "DELETE MY ACCOUNT"
3. **Nextcloud:**
   - Supprimer l'utilisateur (toutes ses données seront perdues)
4. **Stripe:**
   - Récupérer customer via email
   - Annuler tous les abonnements actifs
   - Supprimer le customer (optionnel)
5. **Emails:**
   - Envoyer confirmation de suppression au client
   - Notifier l'admin de la suppression
6. **Base de données locale:**
   - Supprimer les tokens de vérification email s'il en existe

**Output:**
```json
{
  "success": true,
  "message": "Account deleted successfully"
}
```

**Fonctions à créer:**
- `deleteNextcloudUser(email: string): Promise<void>`
- `getStripeCustomerByEmail(email: string): Promise<Stripe.Customer | null>`
- `deleteStripeCustomer(customerId: string): Promise<void>`
- `sendAccountDeletionEmail(email: string)` → Confirmation suppression
- `notifyAdminAccountDeletion(email: string)` → Notification admin

---

## 3. Interface Utilisateur

### 3.1 Page `/en/account/manage`

#### État 1 : Non connecté (Formulaire de connexion)

```
┌─────────────────────────────────────────────┐
│        Manage Your Felicloud Account        │
│                                             │
│  For security reasons, please login with   │
│  your Nextcloud credentials                │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Email                               │   │
│  │ user@example.com                    │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ Password                            │   │
│  │ ••••••••••                          │   │
│  └─────────────────────────────────────┘   │
│                                             │
│         [ Login ]                           │
│                                             │
│  Forgot your password?                      │
│  → Reset it in Nextcloud                    │
└─────────────────────────────────────────────┘
```

**Composants:**
- Input email (type="email", required)
- Input password (type="password", required)
- Bouton "Login"
- Lien vers Nextcloud pour reset password
- Messages d'erreur si credentials invalides

---

#### État 2 : Connecté (Dashboard)

```
┌─────────────────────────────────────────────────────────────┐
│  👤 Welcome, John Doe (user@example.com)                    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 📊 Current Plan: 1TB Lifetime                       │   │
│  │                                                      │   │
│  │ Storage Used:  512 GB / 1024 GB (50%)               │   │
│  │ ████████████░░░░░░░░░░░░                            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  What would you like to do?                                │
│                                                             │
│  ┌───────────────────────────────────────────────┐         │
│  │  🚀 Upgrade to a Larger Plan                 │         │
│  │  Get more storage and features                │         │
│  │                                [ Upgrade ]    │         │
│  └───────────────────────────────────────────────┘         │
│                                                             │
│  ┌───────────────────────────────────────────────┐         │
│  │  📉 Downgrade to a Smaller Plan               │         │
│  │  Reduce your plan and costs                   │         │
│  │                              [ Downgrade ]    │         │
│  └───────────────────────────────────────────────┘         │
│                                                             │
│  ┌───────────────────────────────────────────────┐         │
│  │  🗑️  Delete Account Permanently               │         │
│  │  ⚠️  Warning: This cannot be undone!          │         │
│  │                                 [ Delete ]    │         │
│  └───────────────────────────────────────────────┘         │
│                                                             │
│  [ Logout ]                                                │
└─────────────────────────────────────────────────────────────┘
```

**Éléments à afficher:**
- Nom et email de l'utilisateur
- Plan actuel (ex: "1TB Lifetime", "500GB Monthly", "Free")
- Quota utilisé / total avec barre de progression
- Pourcentage d'utilisation
- 3 sections cliquables : Upgrade / Downgrade / Delete

---

#### Modal 1 : Upgrade

```
┌─────────────────────────────────────────────┐
│  Upgrade Your Account                       │
│                                             │
│  Current Plan: 1TB Lifetime                 │
│                                             │
│  Choose your new plan:                      │
│                                             │
│  ○ 2TB Lifetime - €369 (one-time)          │
│                                             │
│  [ Cancel ]            [ Proceed to Pay ]  │
└─────────────────────────────────────────────┘
```

**Comportement:**
- Afficher uniquement les plans **supérieurs** au plan actuel
- Si déjà sur le plus gros plan → Message "You're on the best plan!"
- Bouton "Proceed to Pay" → Redirige vers Stripe Checkout

---

#### Modal 2 : Downgrade

```
┌─────────────────────────────────────────────┐
│  Downgrade Your Account                     │
│                                             │
│  Current Plan: 1TB Lifetime                 │
│  Current Usage: 512 GB                      │
│                                             │
│  Choose your new plan:                      │
│                                             │
│  ○ 500GB Monthly - €9/month                │
│  ○ 10GB Free - €0                          │
│                                             │
│  ⚠️  Important:                             │
│  • You are using 512 GB                    │
│  • Downgrading to 500GB will NOT work      │
│  • Please free up 12 GB first              │
│                                             │
│  [ Cancel ]            [ Confirm Downgrade ]│
└─────────────────────────────────────────────┘
```

**Logique de validation:**
- Calculer nouveau quota
- Comparer avec usage actuel
- Si usage > nouveau quota → **Désactiver le bouton + message d'avertissement**
- Si usage ≤ nouveau quota → **Activer le bouton**
- Afficher warning pour abonnements (perte de récurrence)
- Afficher warning pour lifetime (pas de remboursement)

**Comportement:**
- Bouton "Confirm Downgrade" → Appel API `/api/account/downgrade`
- Si succès → Message de confirmation + reload du dashboard
- Si erreur → Afficher message d'erreur

---

#### Modal 3 : Delete Account

```
┌─────────────────────────────────────────────┐
│  ⚠️  Delete Account Permanently             │
│                                             │
│  This action CANNOT be undone!              │
│                                             │
│  All your data will be:                     │
│  • ❌ Permanently deleted from Nextcloud    │
│  • ❌ All files lost forever                │
│  • ❌ All subscriptions cancelled           │
│  • ❌ No refunds for lifetime plans         │
│                                             │
│  Current Usage: 512 GB                      │
│  You will lose all this data!               │
│                                             │
│  To confirm, type: DELETE MY ACCOUNT        │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [ Cancel ]            [ Delete Forever ]  │
└─────────────────────────────────────────────┘
```

**Logique de validation:**
- Input text doit être exactement "DELETE MY ACCOUNT"
- Désactiver bouton "Delete Forever" tant que texte != confirmation
- Checkbox supplémentaire "I understand this cannot be undone"

**Comportement:**
- Bouton "Delete Forever" → Appel API `/api/account/delete`
- Si succès → Redirection vers page de confirmation
- Si erreur → Afficher message d'erreur

---

## 4. Gestion Stripe

### 4.1 Récupération du Customer

**Méthode:**
```typescript
async function getStripeCustomerByEmail(email: string): Promise<Stripe.Customer | null> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const customers = await stripe.customers.list({
    email: email,
    limit: 1,
  });

  return customers.data.length > 0 ? customers.data[0] : null;
}
```

### 4.2 Annulation d'Abonnement (Downgrade/Delete)

**Méthode:**
```typescript
async function cancelStripeSubscription(email: string): Promise<void> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const customer = await getStripeCustomerByEmail(email);

  if (!customer) {
    console.log('No Stripe customer found for:', email);
    return;
  }

  // Récupérer tous les abonnements actifs
  const subscriptions = await stripe.subscriptions.list({
    customer: customer.id,
    status: 'active',
  });

  // Annuler chaque abonnement
  for (const subscription of subscriptions.data) {
    await stripe.subscriptions.cancel(subscription.id);
    console.log('Cancelled subscription:', subscription.id);
  }
}
```

### 4.3 Politique de Remboursement

**Abonnements (Monthly/Annual):**
- ✅ Remboursement au prorata si downgrade
- ✅ Annulation immédiate sans remboursement si delete
- ❌ Pas de remboursement partiel de mois entamé

**Lifetime:**
- ❌ Pas de remboursement (one-time payment)
- ⚠️  À mentionner clairement dans les CGV et dans l'UI

---

## 5. Emails de Notification

### 5.1 Email Downgrade (Client)

**Template à créer:** `lib/email/templates/downgrade-email.ts`

**Contenu:**
- Confirmation du downgrade
- Ancien plan → Nouveau plan
- Nouveau quota
- Date d'effet
- Information sur l'abonnement (si annulé)
- Lien vers Nextcloud

**Traductions:** EN, FR, DE, ES

---

### 5.2 Email Downgrade (Admin)

**Template à créer:** `lib/email/templates/admin-downgrade.ts`

**Contenu:**
- Email du client
- Ancien plan → Nouveau plan
- Date du downgrade
- Raison (si collectée - optionnel)

---

### 5.3 Email Suppression de Compte (Client)

**Template à créer:** `lib/email/templates/account-deleted.ts`

**Contenu:**
- Confirmation de suppression
- Toutes les données ont été supprimées
- Abonnements annulés (si applicable)
- Invitation à revenir si besoin
- Contact support

---

### 5.4 Email Suppression de Compte (Admin)

**Template à créer:** `lib/email/templates/admin-account-deleted.ts`

**Contenu:**
- Email du client
- Plan au moment de la suppression
- Date de suppression
- Abonnements annulés (si applicable)

---

## 6. Sécurité

### 6.1 Authentification
- ✅ Vérification email + mot de passe via Nextcloud
- ✅ Session temporaire côté client (localStorage avec expiration)
- ✅ Pas de stockage de mot de passe côté serveur
- ✅ Re-demander password pour actions critiques (delete)

### 6.2 Validation des Actions
- ✅ Vérifier que l'utilisateur existe avant toute action
- ✅ Vérifier credentials avant downgrade/delete
- ✅ Vérifier quota disponible avant downgrade
- ✅ Confirmation textuelle pour suppression

### 6.3 Rate Limiting
- ⚠️  Ajouter rate limiting sur `/api/account/*` (max 10 requêtes/minute)
- ⚠️  Protection contre brute force sur login

---

## 7. Cas d'Usage

### 7.1 Upgrade : Free → 1TB Lifetime
1. Login avec credentials
2. Clic sur "Upgrade"
3. Sélection "1TB Lifetime"
4. Redirection Stripe Checkout
5. Paiement
6. Webhook met à jour quota + groupe automatiquement
7. Email de bienvenue avec nouveau plan

**Résultat:**
- Groupe: "Free Users" → "1TB_Lifetime"
- Quota: 10GB → 1TB
- Mot de passe: inchangé

---

### 7.2 Downgrade : 1TB Lifetime → 500GB Monthly
1. Login avec credentials
2. Clic sur "Downgrade"
3. Sélection "500GB Monthly"
4. Validation quota (usage = 400GB < 500GB ✅)
5. Confirmation
6. API exécute :
   - Change groupe: "1TB_Lifetime" → "500GB_Monthly"
   - Réduit quota: 1TB → 500GB
   - Pas d'abonnement Stripe à créer (c'était lifetime)
7. Emails envoyés (client + admin)

**Résultat:**
- Groupe: "1TB_Lifetime" → "500GB_Monthly"
- Quota: 1TB → 500GB
- Mot de passe: inchangé
- Stripe: Aucun changement (pas d'abonnement actif)

---

### 7.3 Downgrade : 2TB Monthly → Free
1. Login avec credentials
2. Clic sur "Downgrade"
3. Sélection "10GB Free"
4. Validation quota (usage = 800GB > 10GB ❌)
5. **Erreur affichée:**
   ```
   ⚠️  Cannot downgrade
   You are using 800 GB but the free plan only offers 10 GB.
   Please free up 790 GB before downgrading.
   ```
6. Utilisateur ne peut pas continuer

**Alternative si quota OK:**
6. Confirmation (warning: perte d'abonnement, pas de remboursement)
7. API exécute:
   - Change groupe: "2TB_Monthly" → "Free Users"
   - Réduit quota: 2TB → 10GB
   - **Annule abonnement Stripe**
8. Emails envoyés

---

### 7.4 Suppression de Compte
1. Login avec credentials
2. Clic sur "Delete Account"
3. Modal avec warning sévère
4. Tape "DELETE MY ACCOUNT"
5. Confirmation (re-demander password)
6. API exécute:
   - Supprime utilisateur Nextcloud (toutes données perdues)
   - Annule tous abonnements Stripe actifs
   - Supprime customer Stripe (optionnel)
7. Emails envoyés (confirmation client + notification admin)
8. Redirection vers page "Account Deleted"

---

## 8. Fichiers à Créer

### 8.1 Frontend
- [ ] `app/en/account/manage/page.tsx` - Page principale
- [ ] `components/account/LoginForm.tsx` - Formulaire de connexion
- [ ] `components/account/Dashboard.tsx` - Dashboard après login
- [ ] `components/account/UpgradeModal.tsx` - Modal upgrade
- [ ] `components/account/DowngradeModal.tsx` - Modal downgrade
- [ ] `components/account/DeleteModal.tsx` - Modal suppression
- [ ] `components/account/QuotaBar.tsx` - Barre de progression quota

### 8.2 Backend APIs
- [ ] `app/api/account/verify-credentials/route.ts`
- [ ] `app/api/account/upgrade/route.ts`
- [ ] `app/api/account/downgrade/route.ts`
- [ ] `app/api/account/delete/route.ts`

### 8.3 Services Nextcloud
- [ ] `lib/services/nextcloud.ts` - Ajouter fonctions:
  - `verifyCredentials(email, password)`
  - `getUserInfo(email)`
  - `getUserQuota(email)`
  - `deleteUser(email)`

### 8.4 Services Stripe
- [ ] `lib/services/stripe.ts` - Créer fichier avec:
  - `getStripeCustomerByEmail(email)`
  - `cancelStripeSubscription(email)`
  - `deleteStripeCustomer(customerId)`

### 8.5 Email Templates
- [ ] `lib/email/templates/downgrade-email.ts`
- [ ] `lib/email/templates/account-deleted.ts`
- [ ] `lib/email/templates/admin-downgrade.ts`
- [ ] `lib/email/templates/admin-account-deleted.ts`
- [ ] `lib/email/translations/downgrade-email.ts`
- [ ] `lib/email/translations/account-deleted.ts`

### 8.6 Utilities
- [ ] `lib/utils/quota.ts` - Fonctions:
  - `calculateQuotaFromPlan(plan)`
  - `formatQuota(bytes)`
  - `canDowngrade(currentUsage, newQuota)`

### 8.7 Cleanup
- [ ] Supprimer `app/en/account/upgrade/page.tsx`

---

## 9. Tests à Effectuer

### 9.1 Tests Fonctionnels
- [ ] Login avec credentials valides
- [ ] Login avec credentials invalides
- [ ] Affichage plan Free
- [ ] Affichage plan 500GB Monthly
- [ ] Affichage plan 1TB Lifetime
- [ ] Affichage plan 2TB Annual
- [ ] Barre de progression quota (0%, 50%, 100%)
- [ ] Upgrade Free → 1TB Lifetime
- [ ] Downgrade 2TB → 1TB (quota OK)
- [ ] Downgrade 1TB → Free (quota dépassé)
- [ ] Suppression compte Free
- [ ] Suppression compte avec abonnement actif
- [ ] Vérification emails envoyés (client + admin)

### 9.2 Tests Stripe
- [ ] Annulation abonnement Monthly
- [ ] Annulation abonnement Annual
- [ ] Pas de remboursement Lifetime
- [ ] Customer retrouvé par email
- [ ] Customer non existant géré correctement

### 9.3 Tests Nextcloud
- [ ] Vérification credentials correcte
- [ ] Récupération groupes correcte
- [ ] Changement de groupe
- [ ] Mise à jour quota
- [ ] Suppression utilisateur
- [ ] Suppression utilisateur non existant

### 9.4 Tests Sécurité
- [ ] Impossible de downgrade avec mauvais password
- [ ] Impossible de delete sans confirmation exacte
- [ ] Session expirée après 30 minutes
- [ ] Rate limiting fonctionne

---

## 10. Configuration Nextcloud

### 10.1 External Website
Dans Nextcloud → Settings → Administration → External sites:

**Nom:** Manage Account
**URL:** `https://felicloud.com/en/account/manage`
**Icône:** 👤 (ou icône de paramètres)

Cela permettra aux utilisateurs d'accéder directement à la page depuis Nextcloud.

---

## 11. Politique de Remboursement (CGV)

**À ajouter dans les Conditions Générales de Vente:**

> ### Downgrades et Annulations
>
> **Abonnements Mensuels/Annuels:**
> - Les downgrades sont possibles à tout moment sous réserve que vos données actuelles ne dépassent pas le nouveau quota.
> - En cas de downgrade, votre abonnement actuel sera annulé immédiatement sans remboursement du mois/année en cours.
> - Aucun remboursement partiel n'est accordé pour les périodes non utilisées.
>
> **Plans Lifetime:**
> - Les plans Lifetime sont des paiements uniques non remboursables.
> - Vous pouvez downgrader vers un plan inférieur ou gratuit, mais aucun remboursement ne sera accordé.
> - Le downgrade prendra effet immédiatement.
>
> **Suppression de Compte:**
> - La suppression de votre compte entraîne la perte définitive de toutes vos données.
> - Tous les abonnements actifs seront annulés immédiatement sans remboursement.
> - Cette action est irréversible.

---

## 12. Priorités d'Implémentation

### Phase 1 : Foundation (2-3 jours)
1. ✅ Créer fonctions Nextcloud (verify credentials, get user info, get quota)
2. ✅ Créer API `/api/account/verify-credentials`
3. ✅ Créer page `/en/account/manage` avec formulaire login
4. ✅ Créer dashboard affichant plan actuel + quota

### Phase 2 : Upgrade (1 jour)
5. ✅ Créer modal upgrade
6. ✅ Connecter à `/api/checkout/create-session` avec `isUpgrade: true`
7. ✅ Tester flux upgrade complet

### Phase 3 : Downgrade (2-3 jours)
8. ✅ Créer API `/api/account/downgrade`
9. ✅ Créer fonction Stripe `cancelStripeSubscription`
10. ✅ Créer modal downgrade avec validation quota
11. ✅ Créer templates emails downgrade
12. ✅ Tester flux downgrade (avec/sans quota dépassé)

### Phase 4 : Delete (2 jours)
13. ✅ Créer API `/api/account/delete`
14. ✅ Créer fonction Nextcloud `deleteUser`
15. ✅ Créer modal delete avec confirmation textuelle
16. ✅ Créer templates emails suppression
17. ✅ Tester flux suppression complet

### Phase 5 : Polish (1 jour)
18. ✅ Ajouter rate limiting
19. ✅ Améliorer UX (loading states, error messages)
20. ✅ Tests finaux
21. ✅ Supprimer `/en/account/upgrade`
22. ✅ Mettre à jour Nextcloud External sites

**Estimation totale:** 8-10 jours de développement

---

## 13. Notes Importantes

### 13.1 Gestion des Erreurs
- Toujours afficher des messages d'erreur clairs à l'utilisateur
- Logger tous les échecs côté serveur pour debug
- Ne jamais exposer de détails techniques sensibles au client

### 13.2 UX
- Ajouter loading spinners pendant les opérations
- Désactiver boutons pendant les requêtes API
- Afficher confirmations de succès claires
- Warnings très visibles pour actions irréversibles

### 13.3 Performance
- Cacher les informations utilisateur pendant 5 minutes (localStorage)
- Éviter requêtes Nextcloud répétées
- Optimiser chargement des modals (lazy loading)

---

## 14. Ressources et Dépendances

### APIs Nécessaires
- ✅ Nextcloud OCS API (déjà configurée)
- ✅ Stripe API (déjà configurée)
- ✅ Email SMTP (déjà configuré)

### Variables d'Environnement
Toutes déjà configurées :
- `NEXTCLOUD_URL`
- `NEXTCLOUD_ADMIN_USER`
- `NEXTCLOUD_ADMIN_PASSWORD`
- `STRIPE_SECRET_KEY`
- `SMTP_*`

### Aucune nouvelle dépendance npm requise ✅

---

**Fin du Cahier des Charges**

Document créé le: 2025-01-19
Dernière mise à jour: 2025-01-19
Statut: À implémenter
