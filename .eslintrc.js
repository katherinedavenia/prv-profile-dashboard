module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    'no-console': 'off',
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'warn',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/button-has-type': 'warn',
    'import/prefer-default-export': 'warn',
    'no-param-reassign': 'warn',
    'no-shadow': 'warn',
    'no-empty': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-concat': 'warn',
    'no-trailing-spaces': 'error',
    'no-nested-ternary': 'off',
    'function-declaration': 'off',
    'function-component-definition': 'off',
    'react/function-component-definition': [
      {
        namedComponents:
          'function-declaration' |
          'function-expression' |
          'arrow-function' |
          'function-declaration' |
          'function-expression' |
          'arrow-function',
        unnamedComponents:
          'function-expression' |
          'arrow-function' |
          'function-expression' |
          'arrow-function',
      },
    ],
  },
};
