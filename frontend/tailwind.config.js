/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans Condensed"', "sans-serif"],
      },
      colors: {
        // Monochrome color palette - White, Black, Grey
        background: {
          DEFAULT: "#FFFFFF",
          paper: "#FAFAFA",
          dark: "#F5F5F5",
        },
        primary: {
          DEFAULT: "#000000",
          light: "#333333",
          dark: "#000000",
        },
        accent: {
          DEFAULT: "#000000",
          light: "#333333",
          dark: "#000000",
        },
        button: {
          primary: "#000000",
          "primary-hover": "#333333",
          secondary: "#666666",
          "secondary-hover": "#808080",
        },
        text: {
          DEFAULT: "#000000",
          light: "#666666",
          lighter: "#999999",
          white: "#FFFFFF",
        },
        border: {
          DEFAULT: "#E0E0E0",
          light: "#F0F0F0",
          dark: "#CCCCCC",
        },
        grey: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
    },
  },
  plugins: [],
};
