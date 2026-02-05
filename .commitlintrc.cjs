const conventional = require("@commitlint/config-conventional");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  helpUrl: "https://storybook.vezham.com/?path=/docs/guidelines-contribution--overview#commit-convention",
  rules: {
    ...conventional.rules,
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "style", "mocks", "test", "docs", "i18n", "build", "ci", "chore", "revert"],
    ],
    "function-rules/header-max-length": [0],
    "body-max-length": [2, "always", 500],
    "body-max-line-length": [2, "always", 1000],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
  },
};
