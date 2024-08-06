/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'custom-gradient': 'linear-gradient(92.18deg, #5E3928 20.13%, #E4A16F 92.93%)',
      },
    },
  },
  plugins: [],
}