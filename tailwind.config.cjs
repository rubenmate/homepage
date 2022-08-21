/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primaryLight: "#6B46C1",
                primaryDark: "#F3E600",
                blackish: "#161b22",
            },
        },
    },
    plugins: [],
};
