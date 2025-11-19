/**
 * Upgrade Email Translations
 */

interface UpgradeEmailTranslations {
  subject: string;
  title: string;
  greeting: string;
  intro: string;
  newQuotaTitle: string;
  newQuotaLabel: string;
  newPlanLabel: string;
  passwordNote: string;
  nextStepsTitle: string;
  step1: string;
  step2: string;
  step3: string;
  benefitsTitle: string;
  benefitsText: string;
  needHelp: string;
  ctaButton: string;
}

const translations: Record<string, UpgradeEmailTranslations> = {
  en: {
    subject: 'Account Upgraded Successfully - Welcome to Your New Plan',
    title: 'Account Upgraded!',
    greeting: 'Hello',
    intro: 'Thank you for upgrading your Felicloud account. Your new storage plan is now active and ready to use.',
    newQuotaTitle: 'Your New Plan Details',
    newQuotaLabel: 'Storage Quota',
    newPlanLabel: 'Plan',
    passwordNote: 'You can continue using your existing password - no need to change anything!',
    nextStepsTitle: 'What\'s Next?',
    step1: 'Sign in to your account at cloud.felicloud.com with your existing password',
    step2: 'Your new storage quota is now available',
    step3: 'Start uploading more files and enjoy your expanded storage',
    benefitsTitle: 'Enhanced Storage',
    benefitsText: 'With your upgraded plan, you now have more space to store your important files, photos, and documents securely on our European servers with GDPR compliance.',
    needHelp: 'Questions about your upgrade? Visit our Help Center or contact our support team.',
    ctaButton: 'Access Your Cloud',
  },
  fr: {
    subject: 'Compte mis à niveau avec succès - Bienvenue dans votre nouveau plan',
    title: 'Compte mis à niveau !',
    greeting: 'Bonjour',
    intro: 'Merci d\'avoir mis à niveau votre compte Felicloud. Votre nouveau plan de stockage est maintenant actif et prêt à être utilisé.',
    newQuotaTitle: 'Détails de votre nouveau plan',
    newQuotaLabel: 'Quota de stockage',
    newPlanLabel: 'Plan',
    passwordNote: 'Vous pouvez continuer à utiliser votre mot de passe actuel - pas besoin de changer quoi que ce soit !',
    nextStepsTitle: 'Et maintenant ?',
    step1: 'Connectez-vous à votre compte sur cloud.felicloud.com avec votre mot de passe actuel',
    step2: 'Votre nouveau quota de stockage est maintenant disponible',
    step3: 'Commencez à télécharger plus de fichiers et profitez de votre stockage étendu',
    benefitsTitle: 'Stockage amélioré',
    benefitsText: 'Avec votre plan mis à niveau, vous disposez désormais de plus d\'espace pour stocker vos fichiers, photos et documents importants en toute sécurité sur nos serveurs européens conformes au RGPD.',
    needHelp: 'Des questions sur votre mise à niveau ? Visitez notre Centre d\'aide ou contactez notre équipe de support.',
    ctaButton: 'Accéder à votre Cloud',
  },
  de: {
    subject: 'Konto erfolgreich aktualisiert - Willkommen zu Ihrem neuen Plan',
    title: 'Konto aktualisiert!',
    greeting: 'Hallo',
    intro: 'Vielen Dank für die Aktualisierung Ihres Felicloud-Kontos. Ihr neuer Speicherplan ist jetzt aktiv und einsatzbereit.',
    newQuotaTitle: 'Details zu Ihrem neuen Plan',
    newQuotaLabel: 'Speicherkontingent',
    newPlanLabel: 'Plan',
    passwordNote: 'Sie können Ihr bestehendes Passwort weiterhin verwenden - es muss nichts geändert werden!',
    nextStepsTitle: 'Wie geht es weiter?',
    step1: 'Melden Sie sich bei Ihrem Konto unter cloud.felicloud.com mit Ihrem bestehenden Passwort an',
    step2: 'Ihr neues Speicherkontingent ist jetzt verfügbar',
    step3: 'Laden Sie mehr Dateien hoch und genießen Sie Ihren erweiterten Speicher',
    benefitsTitle: 'Erweiterter Speicher',
    benefitsText: 'Mit Ihrem aktualisierten Plan haben Sie jetzt mehr Platz, um Ihre wichtigen Dateien, Fotos und Dokumente sicher auf unseren europäischen Servern mit DSGVO-Konformität zu speichern.',
    needHelp: 'Fragen zu Ihrem Upgrade? Besuchen Sie unser Hilfezentrum oder kontaktieren Sie unser Support-Team.',
    ctaButton: 'Auf Ihre Cloud zugreifen',
  },
  es: {
    subject: 'Cuenta actualizada con éxito - Bienvenido a su nuevo plan',
    title: '¡Cuenta actualizada!',
    greeting: 'Hola',
    intro: 'Gracias por actualizar su cuenta de Felicloud. Su nuevo plan de almacenamiento ya está activo y listo para usar.',
    newQuotaTitle: 'Detalles de su nuevo plan',
    newQuotaLabel: 'Cuota de almacenamiento',
    newPlanLabel: 'Plan',
    passwordNote: '¡Puede seguir usando su contraseña actual - no necesita cambiar nada!',
    nextStepsTitle: '¿Qué sigue?',
    step1: 'Inicie sesión en su cuenta en cloud.felicloud.com con su contraseña actual',
    step2: 'Su nueva cuota de almacenamiento ya está disponible',
    step3: 'Comience a subir más archivos y disfrute de su almacenamiento ampliado',
    benefitsTitle: 'Almacenamiento mejorado',
    benefitsText: 'Con su plan actualizado, ahora tiene más espacio para almacenar sus archivos, fotos y documentos importantes de forma segura en nuestros servidores europeos con cumplimiento GDPR.',
    needHelp: '¿Preguntas sobre su actualización? Visite nuestro Centro de ayuda o contacte a nuestro equipo de soporte.',
    ctaButton: 'Acceder a su nube',
  },
};

export function getUpgradeEmailTranslations(locale: string): UpgradeEmailTranslations {
  return translations[locale] || translations.en;
}
