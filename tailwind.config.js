/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ori-navy': '#0f172a',
                'ori-gold': '#c5a059',
            },
            fontFamily: {
                sans: ['Arial', 'Helvetica', 'sans-serif'],
            },
            animation: {
                'float-cloud': 'floatCloud 25s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                floatCloud: {
                    '0%': { transform: 'translateX(-100px)' },
                    '100%': { transform: 'translateX(100vw)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
