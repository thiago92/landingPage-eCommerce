import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Configurações base
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,

  // Configuração global de ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      '**/*.d.ts'
    ]
  },

  // Configuração para arquivos React
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        React: 'writable'
      },
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'semi': ['error', 'always'],
      'indent': 'off',
      'react/jsx-indent': ['error', 'tab'],
      'react/jsx-indent-props': ['error', 'tab'],
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single'],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  },

  // Configuração para arquivos Node
  {
    files: ['vite.config.ts'],
    languageOptions: {
      globals: {
        ...globals.node
      },
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  }
];