/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'normal': '0 15px 30px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

