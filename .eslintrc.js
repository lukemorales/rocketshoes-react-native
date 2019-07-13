module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
};
