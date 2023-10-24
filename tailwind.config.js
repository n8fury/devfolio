/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ["JetBrains Mono", "monospace"],
            },
            colors: {
                "light-bg": "#fff",
                "light-secondary-bg": "#cde9ff",
                "primary-text": "#000",
                "secondary-color": "#42a5f5",
                "secondary-text": "#777",
                "dark-bg": "#171c28",
                "dark-text": "#fff",
                "dark-secondary-text": "#96D0FF",
                "dark-secondary": "#2f5b80",
            },
        },
    },
    plugins: [],
};
