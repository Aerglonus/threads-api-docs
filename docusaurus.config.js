// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Making Threads Work in Code',
  tagline: 'Threads API — Documentation.',
  favicon: 'img/threads-api-logos/favicon.ico',

  // Set the production url of your site here
  url: 'https://aerglonus.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aerglonus', // Usually your GitHub org/user name.
  projectName: 'threads-api-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          lastVersion: '0.1.1',
          versions: {
            current: {
              label: '0.1.1',
              path: '0.1.1',
              badge: true,
            }
          },
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/rocket.png',
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Documentation for the Unofficial threads-api',
      //   backgroundColor: '#8e7bff',
      //   textColor: '#ffff',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'threads-api',
        logo: {
          alt: 'threads-api',
          src: 'img/threads-api-logos/apple-touch-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/junhoyeo/threads-api',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/junhoyeo/threads-api',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },

          // {
          //   type: 'html',
          //   position: 'right',
          //   value: '<div class="stargazer"><iframe src="https://ghbtns.com/github-btn.html?user=junhoyeo&repo=threads-api&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe></div> '
          // },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/basics/getting-started',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: '@aelonus',
                href: 'https://threads.net/@aelonus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/junhoyeo/threads-api',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} threads-api`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
