import Link from 'next/link';

export default function DownloadPage() {
  const webAccess = {
    name: 'Web Access',
    icon: (
      <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    description: 'Access Felicloud from any web browser without installing anything',
    url: 'https://cloud.felicloud.com',
  };

  const platforms = [
    {
      name: 'Windows',
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
      description: 'For Windows 10 and later',
      downloadLink: '#',
    },
    {
      name: 'macOS',
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      description: 'For macOS 10.15 and later',
      downloadLink: '#',
    },
    {
      name: 'Linux',
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.869.637 1.235-.01.452-.31.878-.849 1.021-.473.104-.932-.072-1.294-.291-.368-.27-.611-.427-.926-.427-.18 0-.436.03-.794.343-.222.2-.488.334-.787.334-.17-.003-.339-.036-.459-.068-.886-.26-1.485-.78-1.688-1.638-.297-1.058.058-1.668.517-2.203.233-.267.489-.465.74-.598.136-.068.369-.268.561-.465.076-.078.13-.145.186-.215.064-.082.145-.166.215-.196.027-.014.055-.02.083-.02.035 0 .068.015.11.034l.067.003c.111 0 .259-.015.412-.045.116-.022.23-.05.342-.078-.02.055-.037.111-.052.167-.051.176-.105.352-.197.515-.094.165-.269.31-.479.31-.013 0-.027 0-.041-.002h-.002c-.015 0-.027-.011-.043-.016l-.002-.001c-.008-.003-.015-.007-.023-.014-.033-.024-.054-.053-.075-.104a.542.542 0 01-.034-.103.013.013 0 00-.004-.007c-.006-.013-.016-.025-.026-.038-.018-.023-.04-.047-.063-.068a.265.265 0 00-.096-.053.092.092 0 00-.037-.005.118.118 0 00-.074.036c-.028.03-.051.06-.065.096a.24.24 0 00-.017.1c0 .024.004.047.011.07.03.119.157.232.347.277.045.011.091.017.135.017.167 0 .324-.062.427-.169a.472.472 0 00.149-.353c0-.077-.014-.154-.043-.23a.639.639 0 00-.143-.245.444.444 0 00-.169-.117.33.33 0 00-.131-.026c-.045 0-.089.008-.133.022-.123.035-.244.078-.363.122l-.002.001-.003.001a1.137 1.137 0 00-.285.13.422.422 0 00-.154.157c-.04.068-.058.146-.058.225 0 .08.018.161.054.24.036.08.09.15.16.211.07.061.156.111.25.146.094.035.195.053.297.053.103 0 .206-.018.305-.055.099-.037.188-.092.268-.16.08-.068.144-.15.195-.243.051-.093.08-.198.08-.306a.773.773 0 00-.049-.275.65.65 0 00-.141-.23z" />
        </svg>
      ),
      description: 'AppImage, .deb, .rpm available',
      downloadLink: '#',
    },
    {
      name: 'Android',
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
        </svg>
      ),
      description: 'Available on Google Play',
      downloadLink: '#',
    },
    {
      name: 'iOS',
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      ),
      description: 'Available on App Store',
      downloadLink: '#',
    },
    {
      name: 'WebDAV',
      icon: (
        <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      description: 'Connect any WebDAV client',
      tutorialLink: '/en/support/webdav-tutorial',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Download Felicloud
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access your files from any device. Available for all major platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Web Access - Featured */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {webAccess.icon}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900">{webAccess.name}</h2>
                <p className="mt-4 text-lg text-gray-600">{webAccess.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                  No installation required • Works on any device • Instant access
                </p>
                <div className="mt-8">
                  <a
                    href={webAccess.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors shadow-xl"
                  >
                    Access Now
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Native Apps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Download our apps for the best experience on your device
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {platform.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">{platform.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{platform.description}</p>
                  {platform.tutorialLink ? (
                    <Link
                      href={platform.tutorialLink}
                      className="mt-6 inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary-dark transition-colors shadow-lg"
                    >
                      Tutorial
                    </Link>
                  ) : (
                    <a
                      href={platform.downloadLink}
                      className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Links */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help?</h3>
            <p className="text-gray-600 mb-8">
              Visit our support center for installation guides and system requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/en/support"
                className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Installation Guides
              </Link>
              <Link
                href="/en/support"
                className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                System Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
