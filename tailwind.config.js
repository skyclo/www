/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                "Gilroy",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
        extend: {
            fontSize: {
                "2xs": ["0.625rem", { lineHeight: "1rem" }],
                "3xs": ["0.5rem", { lineHeight: "0.75rem" }],
            },
        },
    },
    plugins: [],
}
