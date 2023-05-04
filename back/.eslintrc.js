module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "ignorePatterns": ["*.js"],
  "rules": {
     "semi": [1, "always"],
     "quotes": [2, "double"],
     "indent": [1, "tab", {"ignoreComments": true}],
     "no-trailing-spaces": [1, {"ignoreComments": true}],
     "@typescript-eslint/no-var-requires": 0,
  }
}
