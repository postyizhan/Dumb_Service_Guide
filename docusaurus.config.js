// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {

  customFields: {
    // 标题前缀
    titlePrefix: "主页",
    // 开始按钮文字
    start: "快速开始 🥵",
  },

  title: '笨蛋MC开服教程',
  tagline: '一群笨蛋们写的Minecraft开服教程',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://postyizhan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL ?? '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'postyizhan', // Usually your GitHub org/user name.
  projectName: '傻瓜指南', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/postyizhan/NitWikit/tree/main'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-plugin',
        path: 'docs-plugin',
        routeBasePath: 'docs-plugin',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-porxy',
        path: 'docs-porxy',
        routeBasePath: 'docs-porxy',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-hybrid',
        path: 'docs-hybrid',
        routeBasePath: 'docs-hybrid',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NitWikit',
        logo: {
          alt: 'Logo',
          src: 'img/book.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            label: '开始',
            docsPluginId: "default"
          },
          {
            type: 'docSidebar',
            position: 'left',
            label: '插件',
            docsPluginId: "docs-plugin"
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'apiSidebar',
          //   position: 'left',
          //   label: 'API',
          //   docsPluginId: "api"
          // },
          // {
          //   to: '/docs/intro',
          //   position: 'left',
          //   label: '开始',
          //   activeBaseRegex: '/docs/',
          // },
          // {
          //   to: '/docs-plugin/intro',
          //   position: 'left',
          //   label: '插件',
          //   activeBaseRegex: '/docs-plugin/',
          // },
          // {
          //   to: '/docs-proxy/intro',
          //   position: 'left',
          //   label: '代理端',
          //   activeBaseRegex: '/docs-proxy/',
          // },
          // {
          //   to: '/docs-hybrid/intro',
          //   position: 'left',
          //   label: '混合端',
          //   activeBaseRegex: '/docs-hybrid/',
          // },
          // 搜索框
          {
            type: 'search',
            position: 'right',
          },
          // Github
          {
            href: "https://github.com/postyizhan/NitWikit",
            className: "header-github-link",
            position: "right",
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '开始',
                to: '/docs/intro',
              },
              {
                label: '插件',
                to: '/docs/intro',
              },
              {
                label: '代理端',
                to: '/docs-proxy/intro',
              },
              {
                label: '混合端',
                to: '/docs-hybrid/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/dENGavSflK',
              },
            ],
          },
          {
            title: '文档仓库',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/postyizhan/NitWikit',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} <b>postyizhan</b>, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 颜色随系统切换
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsRouteBasePath: "/"
      },
    ],
  ],
};

export default config;