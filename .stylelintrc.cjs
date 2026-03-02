module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      {
        message: 'Используйте camelCase для имен классов',
      },
    ],
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
