module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-spacing': ['warn', 'always'],
    'space-in-parens': ['warn', 'never'],
    'computed-property-spacing': ['error', 'never', { 'enforceForClassMembers': false }],
    'indent': ['error', 2],
    'comma-dangle': ['warn', 'always-multiline'],
    'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-implicit-any-catch': ['error', { allowExplicitAny: true }],
    'func-call-spacing': ['off'],
  },
};
