/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["var(--font-nunito)"],
                abcArizona: ["var(--font-abc-arizona-mix)"]
            }
        }
    },
    plugins: [],
}

export default config