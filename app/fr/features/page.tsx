export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Everything You Need in One Place
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powered by Nextcloud, Felicloud offers a complete suite of productivity and collaboration tools
              with privacy and security at its core
            </p>
          </div>
        </div>
      </section>

      {/* Core Features - Large Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The essential tools you need, every day
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* File Sync and Share */}
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white mb-6">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">File Sync & Share</h3>
              <p className="text-gray-600 mb-4">
                Access your files from any device. Automatic sync across all your computers, phones, and tablets.
                Share files securely with password protection and expiration dates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time synchronization
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Selective sync for large libraries
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Public and private sharing links
                </li>
              </ul>
            </div>

            {/* Photo and Video Backup */}
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white mb-6">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Photos & Videos</h3>
              <p className="text-gray-600 mb-4">
                Automatic photo and video upload from your mobile devices. Smart galleries with face recognition,
                timeline view, and powerful search.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Auto-upload from mobile
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Timeline and album view
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Face recognition and tagging
                </li>
              </ul>
            </div>

            {/* Document Management */}
            <div className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white mb-6">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Document Management</h3>
              <p className="text-gray-600 mb-4">
                Create and edit Office documents directly in your browser. Real-time collaboration with colleagues.
                Version history keeps your work safe.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Online document editing
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time collaboration
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Full version history
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Security & Privacy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your data protected with industry-leading security
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* End-to-End Encryption */}
            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600">
                Your files are encrypted before they leave your device. Only you have the keys.
              </p>
            </div>

            {/* Two-Factor Authentication */}
            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Two-Factor Auth</h3>
              <p className="text-sm text-gray-600">
                Add an extra layer of security with 2FA using TOTP apps or hardware tokens.
              </p>
            </div>

            {/* Password Protection */}
            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Password Protection</h3>
              <p className="text-sm text-gray-600">
                Protect shared links with passwords and set expiration dates for added security.
              </p>
            </div>

            {/* GDPR Compliant */}
            <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-600">
                Full compliance with European data protection laws. Your data stays in the EU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity & Collaboration Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Productivity & Collaboration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Work smarter, together
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Calendar */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calendar</h3>
              <p className="text-gray-600">
                Manage your schedule with shared calendars, reminders, and CalDAV sync to all devices.
              </p>
            </div>

            {/* Contacts */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contacts</h3>
              <p className="text-gray-600">
                Centralized contact management with CardDAV sync across all your devices and apps.
              </p>
            </div>

            {/* Tasks */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tasks</h3>
              <p className="text-gray-600">
                Create and organize tasks with due dates, priorities, and categories. Share task lists with teams.
              </p>
            </div>

            {/* Notes */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Notes</h3>
              <p className="text-gray-600">
                Take notes in Markdown format. Organize with categories, share with others, and sync everywhere.
              </p>
            </div>

            {/* Office Suite */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office Suite</h3>
              <p className="text-gray-600">
                Edit Word, Excel, and PowerPoint files directly in your browser with Collabora Online.
              </p>
            </div>

            {/* Video Calls */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Calls</h3>
              <p className="text-gray-600">
                Built-in video conferencing with screen sharing. No third-party tools needed.
              </p>
            </div>

            {/* Chat */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chat</h3>
              <p className="text-gray-600">
                Team chat with channels, direct messages, and file sharing. Keep conversations organized.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Integration</h3>
              <p className="text-gray-600">
                Connect your email accounts and manage all your mail from one unified interface.
              </p>
            </div>

            {/* Passwords */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Password Manager</h3>
              <p className="text-gray-600">
                Securely store passwords with client-side encryption. Generate strong passwords automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Even More Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for a complete cloud experience
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* File Versioning */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">File Versioning</h4>
                  <p className="text-sm text-gray-600 mt-1">Restore previous versions of any file</p>
                </div>
              </div>
            </div>

            {/* Deleted Files Recovery */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Trash & Recovery</h4>
                  <p className="text-sm text-gray-600 mt-1">Recover deleted files easily</p>
                </div>
              </div>
            </div>

            {/* Full-Text Search */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Full-Text Search</h4>
                  <p className="text-sm text-gray-600 mt-1">Search inside documents</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Tags & Labels</h4>
                  <p className="text-sm text-gray-600 mt-1">Organize files with custom tags</p>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">File Comments</h4>
                  <p className="text-sm text-gray-600 mt-1">Discuss files with your team</p>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Activity Feed</h4>
                  <p className="text-sm text-gray-600 mt-1">Track all file activities</p>
                </div>
              </div>
            </div>

            {/* WebDAV */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">WebDAV Access</h4>
                  <p className="text-sm text-gray-600 mt-1">Mount as network drive</p>
                </div>
              </div>
            </div>

            {/* Music Player */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Music Player</h4>
                  <p className="text-sm text-gray-600 mt-1">Stream your music library</p>
                </div>
              </div>
            </div>

            {/* Offline Access */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Offline Access</h4>
                  <p className="text-sm text-gray-600 mt-1">Work without internet connection</p>
                </div>
              </div>
            </div>

            {/* Selective Sync */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Selective Sync</h4>
                  <p className="text-sm text-gray-600 mt-1">Choose what to sync locally</p>
                </div>
              </div>
            </div>

            {/* External Storage */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">External Storage</h4>
                  <p className="text-sm text-gray-600 mt-1">Connect other cloud services</p>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Notifications</h4>
                  <p className="text-sm text-gray-600 mt-1">Stay updated on all changes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Mockup Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Beautiful, Intuitive Interface
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Access all your files from a clean, modern interface
            </p>
          </div>

          {/* Placeholder for screenshots/mockups */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200 p-12 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-white shadow-xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg className="h-20 w-20 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className="text-gray-400 text-lg font-medium">
                  Interface Screenshot Placeholder
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Add screenshots or mockups of the Nextcloud interface here
                </p>
              </div>
            </div>
          </div>

          {/* Feature Highlights with Image Placeholders */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Files Interface */}
            <div>
              <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="h-16 w-16 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                  <p className="text-gray-400 text-sm">Files Interface Screenshot</p>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">File Management</h3>
              <p className="mt-2 text-gray-600">
                Organize your files with drag-and-drop, favorites, and powerful search
              </p>
            </div>

            {/* Photos Gallery */}
            <div>
              <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="h-16 w-16 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className="text-gray-400 text-sm">Photos Gallery Screenshot</p>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Photo Gallery</h3>
              <p className="mt-2 text-gray-600">
                View your photos in beautiful timelines and albums with face recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Try All Features Free
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Start with 10 GB of free storage and experience the full power of Nextcloud
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/fr/signup/">
                <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-gray-100 transition-colors">
                  Get Started Free
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
