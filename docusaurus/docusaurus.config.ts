import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const path = require('path');

const config: Config = {
  title: 'React Verdict',
  tagline: 'A highly customizable star rating display',

  url: 'https://mmkari.github.io',
  baseUrl: '/react-verdict/',

  organizationName: 'mmkari', // Usually your GitHub org/user name.
  projectName: 'react-verdict', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-react-docgen-typescript',
      {
        /** @type {import('docusaurus-plugin-react-docgen-typescript').Options} */
        // pass in a single string or an array of strings
        src: ['../src/*.tsx'], // , '!path/to/**/*test.*'
        parserOptions: {
          // pass parserOptions to react-docgen-typescript
          // here is a good starting point which filters out all
          // types from react
          propFilter: (prop, component) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('@types/react');
            }

            return true;
          },
        },
      },
    ],
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'react-verdict': path.resolve(__dirname, '../src/index.ts'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: '/category/getting-started',
          position: 'left',
          label: 'Getting Started',
        },
        {
          href: 'https://github.com/mmkari/react-verdict',
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
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
              label: 'NPM',
              href: 'https://www.npmjs.com/package/react-verdict',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mmkari/react-verdict',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
