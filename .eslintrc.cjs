module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "react", "simple-import-sort", "unused-imports", "import"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
  },
}
