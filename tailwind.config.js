/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        {
            pattern: /(bg|text|items|justify)-/,
            variants: ["before", "hover"],
        },
    ],
    theme: {
        extend: {
            colors: {
                "prepaf-orange-900": "#EE6020",
                "prepaf-orange-500": "#FA9030",
                "prepaf-orange-400": "#F79F4F",
                "prepaf-orange-200": "#FEB470",
                "prepaf-orange-100": "#FFDA95",
                "prepaf-green-300": "#A5DF28",
                "prepaf-green-400": "#9ED130",
                "prepaf-red-600": "#E93D32",
                "prepaf-red-800": "#CE2D23",
                "prepaf-yellow-700": "#E0BB00",
                "prepaf-cyan-400": "#09BFD8",
                "prepaf-gray-50": "#F8F8F8",
                "prepaf-gray-100": "#F0F0F0",
                "prepaf-gray-200": "#EBEBEB",
                "prepaf-gray-600": "#848484",
                "prepaf-black-800": "#1E1E1E",
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
            gridAutoColumns: {
                "2fr": "minmax(0, 2fr)",
            },
        },
    },
    plugins: [],
};
