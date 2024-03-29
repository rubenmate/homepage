import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    site: "https://rubenmate.com",
    markdown: {
        remarkPlugins: ["remark-gfm", "remark-smartypants", remarkReadingTime], // first two are defaults, don't override them
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: "dracula",
            // Add custom languages
            // Note: Shiki has countless langs built-in, including .astro!
            // https://github.com/shikijs/shiki/blob/main/docs/languages.md
            langs: [],
        },
    },
});
