import StyleDictionary from 'style-dictionary';

StyleDictionary.registerTransform({
  name: 'value/calcWrap',
  type: 'value',
  transitive: true,
  filter: ({ value }) => value?.includes('*'),
  transform: ({ value }) => `calc(${value})`
});

const sd = new StyleDictionary({
  source: ['./style-dictionary/tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: './src/generated/style-dictionary/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    },
    css: {
      transformGroup: 'css',
      buildPath: './src/generated/style-dictionary/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    }
  },
  hooks: {
    transformGroups: {
      js: ['value/calcWrap'],
      css: ['value/calcWrap']
    }
  }
})

sd.buildAllPlatforms();
console.log('Style Dictionary build complete.');
export default sd;