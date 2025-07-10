import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import tsEslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ...reactRecommended,
    settings: {
      react: {
        version: '18.2.0', // React version
      },
    },
  },
  {
    // Manually apply Prettier config (no plugin:prettier/recommended equivalent in flat config)
    ...prettier,
    rules: {
      ...prettier.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
      },
    },
  },
  {
    files: ['.eslintrc.{js,cjs}'],
    languageOptions: {
      sourceType: 'script',
    },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    // Note: there should be no other properties in this object
    ignores: [
      'node_modules/**/*',
      'dist',
      '*.html',
      '.env*.local',
      'vite-env.d.ts',
      '.DS_Store',
    ],
  },
]
