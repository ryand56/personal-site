/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/util/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "xs": "445px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "blink-fast": "blink 1s step-end infinite"
      },
      keyframes: {
        blink: {
          "0% 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      }
    },
  },
  plugins: []
}
