const prettierConfig = {
  semi: true, // Add semicolons at the end of statements
  singleQuote: false, // Use double quotes
  tabWidth: 2, // Indentation is 2 spaces
  trailingComma: "es5", // Add trailing commas in ES5 syntax (objects, arrays, etc.)
  printWidth: 80, // Maximum line width is 80 characters
  useTabs: false, // Use spaces instead of tabs for indentation
  bracketSpacing: true, // Add spaces inside object literal brackets
  arrowParens: "always", // Always include parentheses in arrow functions
  proseWrap: "preserve", // Respect the default wrapping of markdown text
  htmlWhitespaceSensitivity: "css", // Respect CSS display property for handling whitespaces in HTML
  endOfLine: "lf", // Use line feed (\n) for line breaks
};
export default prettierConfig;
