// @ts-check
// Docusaurus config — see https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Photo Slideshow App',
  tagline: 'Project documentation — living spec, roadmap & architecture',
  favicon: 'img/favicon.ico',

  url: 'https://sushbizapps.github.io',
  baseUrl: '/DigiFrameApp/',
  trailingSlash: true,

  organizationName: 'sushbizapps',
  projectName: 'DigiFrameApp',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // docs become the homepage of the site
          sidebarPath: './sidebars.js',
          editUrl: undefined, // set to your repo edit URL once you push this to GitHub
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/updates', // use the blog as a running "changelog / dev log"
          blogTitle: 'Project Updates',
          blogDescription: 'Running log of decisions, changes and progress',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Photo Slideshow App',
        logo: {
          alt: 'Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/updates', label: 'Updates', position: 'left' },
          {
            href: 'https://github.com/sushbizapps/DigiFrameApp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Product Vision', to: '/overview/product-vision' },
              { label: 'Roadmap', to: '/roadmap/phase-1-android' },
              { label: 'Architecture', to: '/architecture/shared-backend' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Project Updates', to: '/updates' },
              { label: 'GitHub', href: 'https://github.com/sushbizapps/DigiFrameApp' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Photo Slideshow App Project.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
