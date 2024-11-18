/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        petrol: "#006d77",
        navy: "#264653",
      },
      borderRadius: {
        full: "9999px",
      },
    },
  },
  plugins: [],
};
