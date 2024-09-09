/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#3FA2F6', // Use '#' before the hexadecimal color code
      },
    },
  },
  plugins: [],
}

