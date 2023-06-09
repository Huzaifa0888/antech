/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1116px", // Add a custom screen size
      x: "900px", // Add a custom screen size
    },
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
        sec: "url('/download.png')",
        test: "url('/bg-test.png')",
        port1: "url('/portfolio.jpg')",
        port2: "url('/portfolio1.jpg')",
        port3: "url('/portfolio3.jpg')",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
