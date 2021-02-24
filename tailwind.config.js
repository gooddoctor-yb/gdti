module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1116px",
    },
    extend: {
      boxShadow: {
        home: "0px 20px 50px rgba(1, 61, 165, 0.1)",
      },
      colors: {
        brand: "#0F1D37",
        brand_title: "#255BB7",
        brand_link: "#003DA6",
        brand_text: "#FF877E",
        brand_bg: "#F7F9FC",
        gradient_from: "#2790ED",
        gradient_to: "#345EC1",
        normal_text: "#465368",
        normal_text_light: "#353C4F",
        quot: "#EFF5FF",
        box: "#D1D1D1",
      },
      spacing: {
        header: "52.5rem",
        px180: "180px",
        px60: "60px",
        px70: "70px",
      },
      lineHeight: {
        header: "6.5rem",
      },
      fontSize: {
        homeBanner: "6.875rem",
        title1: "2.5rem",
      },
      fontFamily: {
        sans: [
          "Source Sans Pro",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
