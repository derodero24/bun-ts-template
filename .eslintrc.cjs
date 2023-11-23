/*global module*/
/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  plugins: ['unused-imports'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-params': ['error', 3],
    'no-nested-ternary': 'error',
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unused-imports/no-unused-imports': 'warn',
  },
};

module.exports = config;
