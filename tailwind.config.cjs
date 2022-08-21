/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primaryLight: "#6B46C1",
                primaryDark: "#FB923C",
                blackish: "#161b22",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
