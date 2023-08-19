/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#291c1c",
          "200": "rgba(0, 0, 0, 0.6)",
        },
        lavender: "#dadef1",
        darkslateblue: "#383a69",
        "system-background-dark-base-primary": "#000",
      },
      fontFamily: {
        "fira-sans": "'Fira Sans'",
        inter: "Inter",
        inherit: "inherit",
        roboto: "Roboto",
        montserrat: "Montserrat",
        "sf-pro-display": "'SF Pro Display'",
        "body-bold": "'SF Pro Text'",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "11xl": "30px",
        "81xl": "100px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      "5xl": "24px",
      mini: "15px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
