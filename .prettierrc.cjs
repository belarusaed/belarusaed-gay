module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'avoid',
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss') // MUST come last
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  astroAllowShorthand: false,
  tailwindConfig: './tailwind.config.cjs',
  tailwindFunctions: ['clsx']
};
