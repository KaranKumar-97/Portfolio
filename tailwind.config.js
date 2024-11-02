/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#CBACF9",
      },
      fontFamily: {
        inter : "Inter",
        poppins : "Poppins",
        spacemono: "Space Mono",
      },
    },
  },
  plugins: [],
}