/**
 * Welcome Email Translations
 */

interface WelcomeEmailTranslations {
  subject: string;
  title: string;
  greeting: string;
  intro: string;
  credentialsTitle: string;
  username: string;
  password: string;
  tempPasswordNote: string;
  nextStepsTitle: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  securityTitle: string;
  securityText: string;
  needHelp: string;
  ctaButton: string;
}

const translations: Record<string, WelcomeEmailTranslations> = {
  en: {
    subject: 'Welcome to Felicloud - Your Account is Ready',
    title: 'Welcome to Felicloud!',
    greeting: 'Hello',
    intro: 'Thank you for choosing Felicloud. Your secure cloud storage account has been created and is ready to use.',
    credentialsTitle: 'Your Account Credentials',
    username: 'Username',
    password: 'Temporary Password',
    tempPasswordNote: 'For security reasons, please change this password after your first login.',
    nextStepsTitle: 'Getting Started',
    step1: 'Sign in to your account at cloud.felicloud.com',
    step2: 'Change your temporary password to a secure one',
    step3: 'Download our apps for desktop and mobile',
    step4: 'Start uploading your files securely',
    securityTitle: 'Your Data Security',
    securityText: 'Your files are encrypted and stored on European servers with GDPR compliance. We never access your data without your explicit permission.',
    needHelp: 'Need help getting started? Visit our Help Center or contact our support team.',
    ctaButton: 'Access Your Cloud',
  },
  fr: {
    subject: 'Bienvenue sur Felicloud - Votre compte est prêt',
    title: 'Bienvenue sur Felicloud !',
    greeting: 'Bonjour',
    intro: 'Merci d\'avoir choisi Felicloud. Votre compte de stockage cloud sécurisé a été créé et est prêt à être utilisé.',
    credentialsTitle: 'Vos identifiants de compte',
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe temporaire',
    tempPasswordNote: 'Pour des raisons de sécurité, veuillez changer ce mot de passe après votre première connexion.',
    nextStepsTitle: 'Premiers pas',
    step1: 'Connectez-vous à votre compte sur cloud.felicloud.com',
    step2: 'Changez votre mot de passe temporaire pour un mot de passe sécurisé',
    step3: 'Téléchargez nos applications pour ordinateur et mobile',
    step4: 'Commencez à télécharger vos fichiers en toute sécurité',
    securityTitle: 'Sécurité de vos données',
    securityText: 'Vos fichiers sont chiffrés et stockés sur des serveurs européens conformes au RGPD. Nous n\'accédons jamais à vos données sans votre permission explicite.',
    needHelp: 'Besoin d\'aide pour commencer ? Visitez notre Centre d\'aide ou contactez notre équipe de support.',
    ctaButton: 'Accéder à votre Cloud',
  },
  de: {
    subject: 'Willkommen bei Felicloud - Ihr Konto ist bereit',
    title: 'Willkommen bei Felicloud!',
    greeting: 'Hallo',
    intro: 'Vielen Dank, dass Sie sich für Felicloud entschieden haben. Ihr sicheres Cloud-Speicherkonto wurde erstellt und ist einsatzbereit.',
    credentialsTitle: 'Ihre Kontodaten',
    username: 'Benutzername',
    password: 'Temporäres Passwort',
    tempPasswordNote: 'Aus Sicherheitsgründen ändern Sie bitte dieses Passwort nach Ihrer ersten Anmeldung.',
    nextStepsTitle: 'Erste Schritte',
    step1: 'Melden Sie sich bei Ihrem Konto unter cloud.felicloud.com an',
    step2: 'Ändern Sie Ihr temporäres Passwort in ein sicheres',
    step3: 'Laden Sie unsere Apps für Desktop und Mobile herunter',
    step4: 'Beginnen Sie, Ihre Dateien sicher hochzuladen',
    securityTitle: 'Ihre Datensicherheit',
    securityText: 'Ihre Dateien werden verschlüsselt und auf europäischen Servern mit DSGVO-Konformität gespeichert. Wir greifen niemals ohne Ihre ausdrückliche Erlaubnis auf Ihre Daten zu.',
    needHelp: 'Brauchen Sie Hilfe beim Einstieg? Besuchen Sie unser Hilfezentrum oder kontaktieren Sie unser Support-Team.',
    ctaButton: 'Auf Ihre Cloud zugreifen',
  },
  es: {
    subject: 'Bienvenido a Felicloud - Su cuenta está lista',
    title: '¡Bienvenido a Felicloud!',
    greeting: 'Hola',
    intro: 'Gracias por elegir Felicloud. Su cuenta de almacenamiento en la nube segura ha sido creada y está lista para usar.',
    credentialsTitle: 'Sus credenciales de cuenta',
    username: 'Nombre de usuario',
    password: 'Contraseña temporal',
    tempPasswordNote: 'Por razones de seguridad, cambie esta contraseña después de su primer inicio de sesión.',
    nextStepsTitle: 'Primeros pasos',
    step1: 'Inicie sesión en su cuenta en cloud.felicloud.com',
    step2: 'Cambie su contraseña temporal por una segura',
    step3: 'Descargue nuestras aplicaciones para escritorio y móvil',
    step4: 'Comience a subir sus archivos de forma segura',
    securityTitle: 'Seguridad de sus datos',
    securityText: 'Sus archivos están encriptados y almacenados en servidores europeos con cumplimiento GDPR. Nunca accedemos a sus datos sin su permiso explícito.',
    needHelp: '¿Necesita ayuda para comenzar? Visite nuestro Centro de ayuda o contacte a nuestro equipo de soporte.',
    ctaButton: 'Acceder a su nube',
  },
};

export function getWelcomeEmailTranslations(locale: string): WelcomeEmailTranslations {
  return translations[locale] || translations.en;
}
