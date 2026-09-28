// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { siteConfig } from "~/lib/constants";

// https://astro.build/config
export default defineConfig({
    site: siteConfig.url,
    markdown: {
        shikiConfig: {
            theme: "dark-plus",
        },
    },
    integrations: [mdx(), react(), sitemap({ lastmod: new Date() })],
    vite: { plugins: [tailwindcss()] },
});
