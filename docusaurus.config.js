/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RethinkDNS Docs',
  tagline: 'A fast, secure, configurable, private DNS + Firewall for Android.',
  url: 'https://docs.rethinkdns.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'celzero', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Logo icon',
        src: 'img/app_icon.svg',
        srcDark: 'img/app_icon_Light.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // { 
        //   to: 'blog',
        //   label: 'Blog',
        //   position: 'left'
        // },
        {
          href: 'https://github.com/celzero/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Logo icon',
        src: 'img/app_icon_Light.svg',
        href: 'https://rethinkdns.com',
      },
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'RethinkDNS',
              to: 'https://rethinkdns.com',
            },
            {
              label: 'Downloads',
              to: 'https://rethinkdns.com/downloads',
            },
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'FAQs',
              href: 'https://rethinkdns.com/faq'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/celzero/',
            },
            {
              label: 'Roadmap',
              href: 'https://github.com/celzero/rethink-app/milestones'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.rethinkdns.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/rethinkdns',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/rethinkdns'
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Celzero. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/celzero/docs/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
