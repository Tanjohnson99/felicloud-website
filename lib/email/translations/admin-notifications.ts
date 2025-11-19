/**
 * Admin Notification Email Translations
 */

interface AdminNotificationTranslations {
  signupRequest: {
    subject: string;
    title: string;
    intro: string;
    detailsTitle: string;
    fullName: string;
    email: string;
    date: string;
    ipAddress: string;
    note: string;
  };
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
    signupRequest: {
      subject: 'New Signup Request',
      title: 'New Signup Request - Pending Validation',
      intro: 'A new signup request has been created and is waiting for the user to verify their email.',
      detailsTitle: 'Request Information',
      fullName: 'Full Name',
      email: 'Email',
      date: 'Date',
      ipAddress: 'IP Address',
      note: 'This account will be created once the user has verified their email and completed the registration form. You will receive another notification when the account is actually created.',
    },
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
    signupRequest: {
      subject: 'Nouvelle demande d\'inscription',
      title: 'Nouvelle demande d\'inscription - En attente de validation',
      intro: 'Une nouvelle demande d\'inscription a été créée et attend que l\'utilisateur vérifie son e-mail.',
      detailsTitle: 'Informations de la demande',
      fullName: 'Nom complet',
      email: 'Email',
      date: 'Date',
      ipAddress: 'Adresse IP',
      note: 'Ce compte sera créé une fois que l\'utilisateur aura vérifié son e-mail et complété le formulaire d\'inscription. Vous recevrez une autre notification lorsque le compte sera effectivement créé.',
    },
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
