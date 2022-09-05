/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vueGray: "#2c3e50",
        vsTheme: {
          lightest: "#3e3e42",
          light: "#2d2d30",
          dark: "#252526",
          darkest: "#1e1e1e",
          DEFAULT: "#17202A",
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      keyframes: {
        spinCW: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        spinCCW: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-360deg)",
          },
        },
        spinCCW2: {
          from: {
            transform: "rotate(15deg)",
          },
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        spinCW: "spinCW infinite 203s linear", // 600
        spinCCW: "spinCCW infinite 200s linear", // 310
        spinCCW2: "spinCCW2 infinite 210s linear",
      },
    },
    screens: {
      xxs: "100px",
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
