/**
 * Email Verification Translations
 */

interface VerificationEmailTranslations {
  subject: string;
  title: string;
  greeting: string;
  intro: string;
  benefitsTitle: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  ctaButton: string;
  orCopy: string;
  expiryNote: string;
  didntRequest: string;
  needHelp: string;
}

const translations: Record<string, VerificationEmailTranslations> = {
  en: {
    subject: 'Verify Your Email Address - Felicloud',
    title: 'Verify Your Email Address',
    greeting: 'Hello',
    intro: 'Thank you for your interest in Felicloud! To complete your registration and create your free 10 GB account, please verify your email address by clicking the button below.',
    benefitsTitle: 'What You Get with Your Free Account',
    benefit1: '10 GB of secure cloud storage',
    benefit2: '100% European servers with GDPR compliance',
    benefit3: 'Access from any device (desktop, mobile, tablet)',
    benefit4: 'End-to-end encryption for your files',
    ctaButton: 'Complete My Registration',
    orCopy: 'Or copy this link into your browser:',
    expiryNote: 'This verification link is valid for 24 hours.',
    didntRequest: 'If you didn\'t request this registration, you can safely ignore this email.',
    needHelp: 'Need help? Visit our Help Center or contact our support team.',
  },
  fr: {
    subject: 'Vérifiez votre adresse e-mail - Felicloud',
    title: 'Vérifiez votre adresse e-mail',
    greeting: 'Bonjour',
    intro: 'Merci de votre intérêt pour Felicloud ! Pour compléter votre inscription et créer votre compte gratuit de 10 Go, veuillez vérifier votre adresse e-mail en cliquant sur le bouton ci-dessous.',
    benefitsTitle: 'Ce que vous obtenez avec votre compte gratuit',
    benefit1: '10 Go de stockage cloud sécurisé',
    benefit2: 'Serveurs 100% européens conformes au RGPD',
    benefit3: 'Accès depuis n\'importe quel appareil (ordinateur, mobile, tablette)',
    benefit4: 'Chiffrement de bout en bout pour vos fichiers',
    ctaButton: 'Compléter mon inscription',
    orCopy: 'Ou copiez ce lien dans votre navigateur :',
    expiryNote: 'Ce lien de vérification est valable pendant 24 heures.',
    didntRequest: 'Si vous n\'avez pas demandé cette inscription, vous pouvez ignorer cet e-mail en toute sécurité.',
    needHelp: 'Besoin d\'aide ? Visitez notre Centre d\'aide ou contactez notre équipe de support.',
  },
  de: {
    subject: 'Bestätigen Sie Ihre E-Mail-Adresse - Felicloud',
    title: 'Bestätigen Sie Ihre E-Mail-Adresse',
    greeting: 'Hallo',
    intro: 'Vielen Dank für Ihr Interesse an Felicloud! Um Ihre Registrierung abzuschließen und Ihr kostenloses 10 GB-Konto zu erstellen, bestätigen Sie bitte Ihre E-Mail-Adresse, indem Sie auf die Schaltfläche unten klicken.',
    benefitsTitle: 'Was Sie mit Ihrem kostenlosen Konto erhalten',
    benefit1: '10 GB sicherer Cloud-Speicher',
    benefit2: '100% europäische Server mit DSGVO-Konformität',
    benefit3: 'Zugriff von jedem Gerät (Desktop, Mobil, Tablet)',
    benefit4: 'Ende-zu-Ende-Verschlüsselung für Ihre Dateien',
    ctaButton: 'Registrierung abschließen',
    orCopy: 'Oder kopieren Sie diesen Link in Ihren Browser:',
    expiryNote: 'Dieser Bestätigungslink ist 24 Stunden gültig.',
    didntRequest: 'Wenn Sie diese Registrierung nicht angefordert haben, können Sie diese E-Mail einfach ignorieren.',
    needHelp: 'Brauchen Sie Hilfe? Besuchen Sie unser Hilfezentrum oder kontaktieren Sie unser Support-Team.',
  },
  es: {
    subject: 'Verifique su dirección de correo electrónico - Felicloud',
    title: 'Verifique su dirección de correo electrónico',
    greeting: 'Hola',
    intro: '¡Gracias por su interés en Felicloud! Para completar su registro y crear su cuenta gratuita de 10 GB, verifique su dirección de correo electrónico haciendo clic en el botón de abajo.',
    benefitsTitle: 'Lo que obtiene con su cuenta gratuita',
    benefit1: '10 GB de almacenamiento en la nube seguro',
    benefit2: 'Servidores 100% europeos con cumplimiento GDPR',
    benefit3: 'Acceso desde cualquier dispositivo (escritorio, móvil, tableta)',
    benefit4: 'Cifrado de extremo a extremo para sus archivos',
    ctaButton: 'Completar mi registro',
    orCopy: 'O copie este enlace en su navegador:',
    expiryNote: 'Este enlace de verificación es válido por 24 horas.',
    didntRequest: 'Si no solicitó este registro, puede ignorar este correo electrónico de forma segura.',
    needHelp: '¿Necesita ayuda? Visite nuestro Centro de ayuda o contacte a nuestro equipo de soporte.',
  },
};

export function getVerificationEmailTranslations(locale: string): VerificationEmailTranslations {
  return translations[locale] || translations.en;
}
