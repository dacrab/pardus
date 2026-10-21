import astro from "eslint-plugin-astro";

export default [
    { ignores: [".astro/", ".vercel/", "dist/", "node_modules/", "bun.lock"] },
    ...astro.configs["flat/recommended"],
];
