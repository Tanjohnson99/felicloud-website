# API Documentation

## 🔒 Sécurité

Toutes les routes API fonctionnent **côté serveur** uniquement. Les credentials SMTP et Nextcloud ne sont **JAMAIS** exposés au client.

---

## 📧 POST /api/contact

Envoie un email de contact à l'administrateur.

### Request

```typescript
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

### Response

**Success (200)**
```json
{
  "message": "Email sent successfully"
}
```

**Error (400)**
```json
{
  "error": "Missing required fields"
}
```

**Error (500)**
```json
{
  "error": "Failed to send email. Please try again later."
}
```

### Exemple d'utilisation (Frontend)

```typescript
async function handleContactSubmit(name: string, email: string, message: string) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
}
```

---

## 👤 POST /api/signup

Crée un nouveau compte Nextcloud et envoie un email de bienvenue.

### Request

```typescript
POST /api/signup
Content-Type: application/json

{
  "username": "johndoe",
  "password": "securePassword123",
  "email": "john@example.com",
  "displayName": "John Doe"  // optional
}
```

### Validation

- **username**: 3-20 caractères alphanumériques, tirets et underscores
- **password**: Minimum 8 caractères
- **email**: Format email valide

### Response

**Success (201)**
```json
{
  "message": "Account created successfully",
  "username": "johndoe",
  "nextcloudUrl": "https://cloud.felicloud.com"
}
```

**Error (400)**
```json
{
  "error": "Invalid email address"
}
```

**Error (409)**
```json
{
  "error": "Username already taken"
}
```

**Error (500)**
```json
{
  "error": "Failed to create account. Please try again later."
}
```

### Exemple d'utilisation (Frontend)

```typescript
async function handleSignup(username: string, password: string, email: string) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      email,
      displayName: username,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
}
```

---

## 💚 GET /api/health

Vérifie que l'API fonctionne.

### Request

```typescript
GET /api/health
```

### Response

**Success (200)**
```json
{
  "status": "ok",
  "timestamp": "2024-11-17T21:00:00.000Z",
  "environment": "production"
}
```

---

## 🔐 Configuration requise

Avant d'utiliser ces APIs, vous devez configurer `.env.local` :

```bash
# Copiez le fichier d'exemple
cp .env.example .env.local

# Éditez avec vos vraies valeurs
nano .env.local
```

### Variables essentielles :

```env
# SMTP (pour l'API /contact et les emails de bienvenue)
SMTP_HOST=smtp.votre-serveur.com
SMTP_PORT=587
SMTP_SECURE=true
SMTP_USER=noreply@felicloud.com
SMTP_PASSWORD=votre_mot_de_passe_smtp
SMTP_FROM_EMAIL=noreply@felicloud.com
SMTP_FROM_NAME=Felicloud
ADMIN_EMAIL=contact@felicloud.com

# Nextcloud (pour l'API /signup)
NEXTCLOUD_URL=https://cloud.felicloud.com
NEXTCLOUD_ADMIN_USER=admin
NEXTCLOUD_ADMIN_PASSWORD=mot_de_passe_admin
NEXTCLOUD_FREE_GROUP=10GB Free
```

---

## 🚀 Déploiement

### Option 1: Vercel (Recommandé)

```bash
# 1. Installez Vercel CLI
npm i -g vercel

# 2. Déployez
vercel

# 3. Ajoutez les variables d'environnement dans le dashboard Vercel
```

### Option 2: VPS avec Node.js

```bash
# 1. Build
npm run build

# 2. Démarrez le serveur
npm start

# 3. Assurez-vous que .env.local existe sur le serveur
```

---

## ⚠️ Sécurité

### ✅ Bonnes pratiques implémentées :

1. **Validation des entrées** : Tous les champs sont validés
2. **Credentials serveur uniquement** : SMTP et Nextcloud API ne sont accessibles que côté serveur
3. **Gestion d'erreurs** : Messages d'erreur sûrs pour le client
4. **Rate limiting recommandé** : Ajoutez un middleware pour limiter les requêtes

### 🔒 Variables à JAMAIS exposer au client :

- `SMTP_PASSWORD`
- `NEXTCLOUD_ADMIN_PASSWORD`
- `STRIPE_SECRET_KEY`
- `JWT_SECRET`
- `SESSION_SECRET`

Seules les variables préfixées `NEXT_PUBLIC_*` sont visibles côté client.

---

## 🧪 Tests

### Test local (développement)

```bash
# 1. Lancez le serveur de dev
npm run dev

# 2. Testez l'API health
curl http://localhost:3000/api/health

# 3. Testez le formulaire de contact
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

### Test en production

```bash
# Test health check
curl https://votre-site.com/api/health

# Test signup
curl -X POST https://votre-site.com/api/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123","email":"test@test.com"}'
```

---

## 📝 Services disponibles

Les services sont dans `/lib/services/` :

### `email.ts`
- `sendEmail()` - Envoyer un email générique
- `sendContactEmail()` - Email de contact
- `sendWelcomeEmail()` - Email de bienvenue

### `nextcloud.ts`
- `createNextcloudUser()` - Créer un utilisateur
- `checkUserExists()` - Vérifier si un username existe
- `setUserQuota()` - Définir le quota d'un utilisateur

Ces services peuvent être réutilisés dans d'autres routes API.

---

**Vos données sensibles sont maintenant sécurisées ! 🔒**
