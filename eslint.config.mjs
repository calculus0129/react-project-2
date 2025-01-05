import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended", // Integrates Prettier with ESLint
  ),
  {
    rules: {
      // Prettier integration
      "prettier/prettier": "warn", // Treat Prettier issues as warnings
    },
    // Overrides for specific file formats
    overrides: [
      {
        files: "*.json", // Applies to all JSON files
        options: {
          tabWidth: 2, // Use 2 spaces for JSON
        },
      },
      {
        files: "*.md", // Applies to all Markdown files
        options: {
          tabWidth: 2, // Use 2 spaces for Markdown
        },
      },
      {
        files: ["*.yml", "*.yaml"], // Applies to YAML files
        options: {
          tabWidth: 2, // Use 2 spaces for YAML
        },
      },
    ],
  },
];

export default eslintConfig;
