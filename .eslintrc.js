module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'next', 'next/core-web-vitals'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // General rules
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'comma-dangle': ['warn', 'never']
  }
};
