const path = require('path');
const fs = require('fs');
const wpc = require('./config/webpack-prod-config.js');

module.exports = {
  theme: {
    fontFamily: {
      base: '"Montserrat", sans-serif',
    },
    fontSize: {
      h1: 35,
      h2: 22,
      h3: 18,
    },
    color: {
      link: 'firebrick',
      linkHover: 'salmon',
      base: 'darkgray',
    },
  },
  getExampleFilename(componentPath) {
    if (componentPath.indexOf('src') > -1) {
      return componentPath.replace(/src/, 'examples').replace(/\.jsx?$/, '.md');
    }
    return componentPath;
  },

  sections: [
    {
      name: 'Documentation',
      content: 'examples/Documentation.md',
      sectionDepth: 1,

      sections: [
        {
          name: 'Installation',
          content: 'examples/installation.md',
        },
        // {
        //   name: 'Configuration',
        //   content: 'examples/configuration.md',
        // },
      ],
    },
    {
      name: 'Components',
      // content: 'examples/Components.md',
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: ['src/RatingDisplay.tsx'],
      skipComponentsWithoutExample: true,
      // sectionDepth: 1,
    },
    {
      name: 'Props',
      // components: 'dist/ui/*.js',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'hide', // 'hide' | 'collapse' | 'expand'
      // sectionDepth: 1,
      // content: 'examples/Examples.md',

      sections: [
        {
          name: 'value',
          content: 'examples/Props_value.md',
        },
        {
          name: 'size',
          content: 'examples/Props_size.md',
        },
        {
          name: 'numberStars',
          content: 'examples/Props_numberStars.md',
        },
        {
          name: 'showRatingOnHover',
          content: 'examples/Props_showRatingOnHover.md',
        },

        {
          name: 'starRenderer',
          // content: 'examples/Examples_customStar.md',
          sections: [
            {
              name: 'simple',
              content: 'examples/Props_starRenderer_simple.md',
            },
            {
              name: 'animated',
              content: 'examples/Props_starRenderer_animated.md',
            },
          ],
        },
        // {
        //   name: 'XXX',
        //   content: 'examples/Examples_XXX.md',
        // },
      ],
    },
  ],
  webpackConfig: wpc,
  components: 'src/**/*.{js,jsx}',
  styleguideDir: 'styleguidistHtml',
  pagePerSection: true,
  moduleAliases: {
    'react-verdict': path.resolve(__dirname, 'index.js'),
  },
  require: [path.join(__dirname, 'examples/Examples_overrides.css')],
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props;
    if (settings && typeof settings.file === 'string') {
      const filepath = path.resolve(exampleFilePath, settings.file);
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      };
    }
    return props;
  },
};
