/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  // rules: {
  //   '@typescript-eslint/no-unsafe-assignment': 'off',
  //   '@typescript-eslint/no-misused-promises': [
  //     'error',
  //     {
  //       checksConditionals: false,
  //       checksSpreads: false,
  //       checksVoidReturn: {
  //         arguments: false,
  //         attributes: false,
  //         properties: false,
  //         returns: false,
  //         variables: false,
  //       },
  //     },
  //   ],
  // },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'next/core-web-vitals',
        'prettier',
      ],
    },
  ],
};
