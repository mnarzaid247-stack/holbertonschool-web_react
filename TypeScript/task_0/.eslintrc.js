module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error']
  }
};