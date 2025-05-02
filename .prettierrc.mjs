/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    tailwindFunctions: ["clsx", "cn", "twMerge"],
    tailwindAttributes: ["class", "className"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
