/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1360px" },
      // => @media (max-width: 1279px) { ... }

      xl1300: { max: "1300px" },
      // => @media (max-width: 1279px) { ... }

      lg900: { max: "910px" },
      // => @media (max-width: 1023px) { ... }

      md630: { max: "630px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "439px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        newInterFont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
