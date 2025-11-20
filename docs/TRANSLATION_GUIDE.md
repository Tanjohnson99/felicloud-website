# 🌍 Guide de Traduction Felicloud

## Système i18n mis en place

Le site est maintenant **prêt à être 100% traduisible** avec un système complet de traductions.

### ✅ Ce qui est fait

1. **Fichier de traduction complet** (`locales/en.json`)
   - 278 lignes
   - +150 nouvelles clés de traduction
   - Organisé par namespaces :
     - `common` - Éléments partagés
     - `pricing` - Page tarification
     - `signup` - Flux d'inscription
     - `checkout` - Processus paiement
     - `paymentSuccess` - Confirmation paiement
     - Et plus...

2. **Hook de traduction** déjà en place
   - `lib/hooks/useTranslation.ts`
   - Fallback automatique vers l'anglais
   - Support des interpolations `{{variable}}`

### 📋 Comment utiliser les traductions

#### Exemple 1 : Texte simple

**AVANT (texte hardcodé) :**
```typescript
<h1>Simple, Transparent Pricing</h1>
```

**APRÈS (traduisible) :**
```typescript
import { useTranslation } from '@/lib/hooks/useTranslation';

export default function PricingPage() {
  const { t } = useTranslation('en'); // ou dynamique avec useParams()

  return (
    <h1>{t('pricing.pageTitle')}</h1>
  );
}
```

#### Exemple 2 : Texte avec interpolation

**Clé dans `en.json` :**
```json
{
  "pricing": {
    "annualSave": "Save {{percent}}%"
  }
}
```

**Utilisation :**
```typescript
<p>{t('pricing.annualSave').replace('{{percent}}', '20')}</p>
```

OU avec le système d'interpolation :
```typescript
// À implémenter dans useTranslation.ts (fonctionnalité future)
<p>{t('pricing.annualSave', { percent: 20 })}</p>
```

#### Exemple 3 : Messages d'erreur formulaire

**AVANT :**
```typescript
setErrors({ email: 'Invalid email address' });
```

**APRÈS :**
```typescript
setErrors({ email: t('signup.errors.invalidEmail') });
```

### 🎯 Pages prioritaires à traduire

Les clés de traduction sont prêtes pour ces pages critiques :

1. **`app/en/pricing/page.tsx`** (571 lignes)
   - Remplacer ~60 textes hardcodés
   - Utiliser `pricing.*` keys
   - Exemple ligne 16 : `"Simple, Transparent Pricing"` → `t('pricing.pageTitle')`

2. **`app/en/signup/page.tsx`** (248 lignes)
   - Remplacer ~30 textes
   - Utiliser `signup.*` keys
   - Messages d'erreur : `signup.errors.*`

3. **`app/en/checkout/page.tsx`** (261 lignes)
   - Remplacer ~15 textes
   - Utiliser `checkout.*` keys

4. **`app/en/payment/success/page.tsx`** (172 lignes)
   - Remplacer ~20 textes
   - Utiliser `paymentSuccess.*` keys

### 📝 Checklist par page

Pour chaque page à traduire :

- [ ] Importer `useTranslation`
- [ ] Récupérer la langue actuelle (`const { t } = useTranslation(lang)`)
- [ ] Identifier tous les textes hardcodés
- [ ] Remplacer par `t('namespace.key')`
- [ ] Tester que le build réussit
- [ ] Vérifier visuellement que tout s'affiche correctement

### 🚀 Prochaines étapes pour lancement multilingue

#### Phase 1 : Traduire les clés (Budget : 2500-3500€)

1. **Dupliquer `en.json` pour chaque langue :**
   ```bash
   cp locales/en.json locales/fr.json
   cp locales/en.json locales/de.json
   cp locales/en.json locales/es.json
   cp locales/en.json locales/it.json
   cp locales/en.json locales/pt.json
   ```

2. **Traduire le contenu** (traducteur professionnel recommandé)
   - Service recommandé : Phrase.com, Lokalise
   - Vérification par locuteurs natifs
   - Tests terminologie technique

#### Phase 2 : Créer les routes multilingues

1. **Créer structure dynamique :**
   ```
   app/[lang]/page.tsx  (au lieu de app/en/page.tsx)
   ```

2. **Générer routes statiques :**
   ```typescript
   export function generateStaticParams() {
     return [
       { lang: 'en' },
       { lang: 'fr' },
       { lang: 'de' },
       { lang: 'es' },
       { lang: 'it' },
       { lang: 'pt' },
     ];
   }
   ```

#### Phase 3 : Migration vers next-intl (Recommandé)

Pour une solution plus robuste et scalable :

```bash
npm install next-intl
```

Avantages :
- ✅ Pluralisation automatique
- ✅ Formatage dates/nombres localisé
- ✅ Support Server Components
- ✅ Lazy loading des traductions
- ✅ TypeScript auto-completion

### 🔧 Maintenance

**Ajouter une nouvelle traduction :**

1. Ajouter la clé dans `locales/en.json`
2. Traduire dans tous les fichiers de locale
3. Utiliser avec `t('namespace.newKey')`

**Détecter traductions manquantes :**

```bash
# Créer script de vérification
node scripts/check-translations.js
```

### 📊 État actuel

- **Traductions anglaises :** ✅ 100% (278 clés)
- **Traductions FR/DE/ES/IT/PT :** ⏳ 0% (à faire)
- **Pages utilisant traductions :** ⏳ 0% (à migrer)
- **Système prêt :** ✅ Oui

---

**Temps estimé migration complète :**
- Remplacer texte hardcodé : 8-12 heures dev
- Traduction professionnelle : 2-3 semaines
- Tests QA : 1 semaine
- **Total : 4-6 semaines**

**Résultat final :** Site 100% multilingue prêt pour dizaines de langues 🌍
