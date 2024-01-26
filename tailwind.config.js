/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#6160DC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisUI: {
    themes: [
      {
        mytheme: {
          primary: "#6160DC",
          secondary: "#54C5EB",

          success: "#00ff9e",

          warning: "#FFB74A",

          error: "#FF4A55",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
