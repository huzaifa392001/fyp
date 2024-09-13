/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        // Don't need xs since Tailwind uses min-width approach
        // to its media queries.
        sm: '100%',
        md: '575px',
        lg: '767px',
        xl: '1025px',
        xxl: '1400px',
      },
    },
    screens: {
      sm: "575.98px",
      // => @media (min-width: 576px) { ... }

      md: "767.98px",
      // => @media (min-width: 768px) { ... }

      lg: "991.98px",
      // => @media (min-width: 992px) { ... }

      xl: "1199.98px",
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
};
