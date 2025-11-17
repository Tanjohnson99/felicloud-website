import { useMemo } from 'react';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import pt from '@/locales/pt.json';
import es from '@/locales/es.json';
import it from '@/locales/it.json';
import de from '@/locales/de.json';

type TranslationKey = string;
type Translations = typeof en;

const translations: Record<string, any> = {
  en,
  fr,
  pt,
  es,
  it,
  de,
};

/**
 * Hook to access translations for a specific language
 * @param lang - The language code (en, fr, pt, es, it, de)
 * @returns Object with translation function and current language
 */
export function useTranslation(lang: string = 'en') {
  const t = useMemo(() => {
    const langTranslations = translations[lang] || translations.en;

    return (key: TranslationKey): string => {
      const keys = key.split('.');
      let value: any = langTranslations;

      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          // Fallback to English if translation is missing
          let fallbackValue: any = translations.en;
          for (const fk of keys) {
            fallbackValue = fallbackValue?.[fk];
          }
          return fallbackValue || key;
        }
      }

      return value || key;
    };
  }, [lang]);

  return { t, lang };
}
