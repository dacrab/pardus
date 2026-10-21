export default {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
    plugins: ["prettier-plugin-astro"],
    overrides: [{ files: "*.astro", options: { parser: "astro" } }],
};
