/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        300: "calc(100vh-64px)",
      },
    },
  },
  plugins: [],
};
