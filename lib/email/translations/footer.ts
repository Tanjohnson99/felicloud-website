/**
 * Email Footer Translations
 */

interface FooterTranslations {
  help: string;
  contact: string;
  privacy: string;
  terms: string;
  tagline: string;
  allRightsReserved: string;
  unsubscribe: string;
}

const translations: Record<string, FooterTranslations> = {
  en: {
    help: 'Help Center',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    tagline: 'Secure European Cloud Storage',
    allRightsReserved: 'All rights reserved.',
    unsubscribe: 'Unsubscribe from marketing emails',
  },
  fr: {
    help: 'Centre d\'aide',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    tagline: 'Stockage Cloud Européen Sécurisé',
    allRightsReserved: 'Tous droits réservés.',
    unsubscribe: 'Se désabonner des emails marketing',
  },
  de: {
    help: 'Hilfezentrum',
    contact: 'Kontakt',
    privacy: 'Datenschutz',
    terms: 'AGB',
    tagline: 'Sicherer Europäischer Cloud-Speicher',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    unsubscribe: 'Von Marketing-E-Mails abmelden',
  },
  es: {
    help: 'Centro de ayuda',
    contact: 'Contacto',
    privacy: 'Privacidad',
    terms: 'Términos',
    tagline: 'Almacenamiento en la Nube Europeo Seguro',
    allRightsReserved: 'Todos los derechos reservados.',
    unsubscribe: 'Darse de baja de correos de marketing',
  },
};

export function getFooterTranslations(locale: string): FooterTranslations {
  return translations[locale] || translations.en;
}
