/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RethinkDNS',
  tagline: 'A fast, secure, configurable, private DNS + Firewall for Android.',
  url: 'https://docs.rethinkdns.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'celzero', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Logo icon',
        src: 'img/android-icon-192x192.png',
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
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: '',
            // },
            // {
            //   label: 'Discord',
            //   href: '',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/rethinkdns',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.rethinkdns.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/celzero/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RethinkDNS + Firewall. Built with Docusaurus.`,
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
