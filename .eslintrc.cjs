module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
  },
};
