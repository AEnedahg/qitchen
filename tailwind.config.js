/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      xs: "321px",
      sm: "376px",
      md: "476px",
      lg: "641px",
      xl: "769px",
      "2xl": "1025px",
      "3xl": "1281px",
      "4xl": "1401px",
      "5xl": "1537px",
    },
    screens: {
      xs: "321px",
      sm: "376px",
      md: "476px",
      lg: "641px",
      xl: "846px",
      "2xl": "1221px",
      "3xl": "1281px",
      "4xl": "1401px",
      "5xl": "1537px",
    },
    extend: {
      colors: {
        "neutral-0": "#FFFFFF",
        "neutral-900": "#0A0B0A",
        "primary-150":"rgba(245,242,234,0.7)",
        "primary-200": "rgba(239, 231, 210, 0.15)",
        "primary-250": "rgb(239, 231, 210)",
        "neutral-800": "rgba(24, 24, 24, 0.5)",
        "primary-300": "#EFE7D2",
        "neutral-1000": "#000000",
      },
      fontFamily: {
        "serif": ["Forum", "serif"],
        "serifTwo": ["Satoshi", "sans-serif"]
      },
    },
  },
  plugins: [],
};

