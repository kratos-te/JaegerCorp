import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E4F5F2",
          200: "#10A678",
          300: "#2A896B",
          400: "#5FBB9E ",
          500: "#435854",
          600: "#34554C",
          700: "#071B17",
        },
        secondary: {
          100: "#507A6E",
        },
      },
      screens: {
        sm: "480px",
        xs: "640px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "1080px", // Custom large breakpoint
        xl: "1240px", // Custom extra large breakpoint
        xld: "1440px",
        "2xl": "1648px",
        "2xld": "1700px",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "btn-inner": "0px 0px 2px 2px #5FBB9E inset",
        box: "6px -6px 44px 0px rgba(35, 68, 58, 0.20) inset",
        btn: "4px 4px 21px 0px rgba(7, 30, 26, 0.50) inset",
        deposit: "0px -6px 22px 2px #89FFD9 inset",
      },
    },
  },
  plugins: [],
};
export default config;
