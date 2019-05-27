module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readable',
    SharedArrayBuffer: 'readable'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
}
