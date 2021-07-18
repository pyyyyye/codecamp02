module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: [2, "double", { avoidEscape: false }],
    "react/react-in-jsx-scope": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always",
        objects: "always",
        imports: "always",
        exports: "always",
        functions: "always",
      },
    ],
    semi: true,
  },
};
