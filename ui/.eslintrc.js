module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "jest"],
  settings: {
    react: {
      version: "16.9.0",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".tsx", ".ts"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "no-process-env": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
  },
  overrides: [
    {
      files: ["*.test.tsx", "*.test.ts"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "react/no-unescaped-entities": 0,
        "react-hooks/exhaustive-deps": 0,
        "require-atomic-updates": 0,
      },
    },
  ],
};
