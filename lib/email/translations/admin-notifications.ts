/**
 * Admin Notification Email Translations
 */

interface AdminNotificationTranslations {
  accountCreated: {
    subject: string;
    title: string;
    intro: string;
    detailsTitle: string;
    fullName: string;
    email: string;
    creationTime: string;
    quota: string;
    ctaButton: string;
  };
  paymentInitiated: {
    subject: string;
    title: string;
    intro: string;
    detailsTitle: string;
    email: string;
    plan: string;
    billing: string;
    storage: string;
    actionType: string;
    note: string;
  };
}

const translations: Record<string, AdminNotificationTranslations> = {
  en: {
    accountCreated: {
      subject: 'New Account Created',
      title: 'New Account Created Successfully',
      intro: 'A new paid account has been created on Felicloud.',
      detailsTitle: 'Account Details',
      fullName: 'Full Name',
      email: 'Email',
      creationTime: 'Creation Time',
      quota: 'Storage Quota',
      ctaButton: 'View in Nextcloud Admin',
    },
    paymentInitiated: {
      subject: 'Payment Initiated',
      title: 'Customer Initiated Checkout',
      intro: 'A customer has started the payment process. This is a lead alert.',
      detailsTitle: 'Lead Details',
      email: 'Email',
      plan: 'Plan',
      billing: 'Billing Type',
      storage: 'Storage',
      actionType: 'Action Type',
      note: 'Note: This is a lead alert. The account will be created only after successful payment.',
    },
  },
  fr: {
    accountCreated: {
      subject: 'Nouveau compte créé',
      title: 'Nouveau compte créé avec succès',
      intro: 'Un nouveau compte payant a été créé sur Felicloud.',
      detailsTitle: 'Détails du compte',
      fullName: 'Nom complet',
      email: 'Email',
      creationTime: 'Heure de création',
      quota: 'Quota de stockage',
      ctaButton: 'Voir dans l\'admin Nextcloud',
    },
    paymentInitiated: {
      subject: 'Paiement initié',
      title: 'Client a initié le paiement',
      intro: 'Un client a commencé le processus de paiement. Ceci est une alerte de prospect.',
      detailsTitle: 'Détails du prospect',
      email: 'Email',
      plan: 'Plan',
      billing: 'Type de facturation',
      storage: 'Stockage',
      actionType: 'Type d\'action',
      note: 'Note : Ceci est une alerte de prospect. Le compte sera créé uniquement après un paiement réussi.',
    },
  },
};

export function getAdminNotificationTranslations(locale: string): AdminNotificationTranslations {
  return translations[locale] || translations.en;
}
