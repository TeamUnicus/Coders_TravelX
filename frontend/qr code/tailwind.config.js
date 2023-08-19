/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        slategray: {
          "100": "#6d7d95",
          "200": "#697386",
        },
        "system-background-dark-base-primary": "#000",
      },
      fontFamily: {
        inter: "Inter",
        "body-bold": "'SF Pro Text'",
      },
      borderRadius: {
        "4xl": "23px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      "3xl": "22px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
