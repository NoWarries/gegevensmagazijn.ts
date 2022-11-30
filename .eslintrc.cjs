module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {}
  },
  "env": {
    "es6": true
  },
  "ignorePatterns": "lib",
  "rules": {
    "no-console": ["error", { "allow": ["warn", "error"] } ],
    "no-unused-vars": ["error"],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-irregular-whitespace": ["error"],
    "no-trailing-spaces": ["error"],
    "no-multiple-empty-lines": ["error", {
      "max": 1
    }]
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["@typescript-eslint"]
}