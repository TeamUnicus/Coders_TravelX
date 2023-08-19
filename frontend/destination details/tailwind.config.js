/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5733",
        "mid-emphasized": "#39414b",
        "high-emphasized": "#0a2753",
        "low-emphasized": "#6a778b",
        darkslategray: "rgba(40, 51, 64, 0.1)",
        white: "#fff",
        dimgray: "rgba(93, 93, 93, 0.4)",
        silver: {
          "100": "#c4c4c4",
          "200": "rgba(196, 196, 196, 0.05)",
        },
        gray: {
          "100": "#8b8b8b",
          "200": "rgba(255, 255, 255, 0.8)",
        },
        "system-background-dark-base-primary": "#000",
      },
      fontFamily: {
        montserrat: "Montserrat",
        "body-bold": "'SF Pro Text'",
      },
      borderRadius: {
        "15xl-5": "34.5px",
        "81xl": "100px",
        "22xl-4": "41.4px",
        "2xs-4": "10.4px",
        "12xs": "1px",
        "32xl-7": "51.7px",
      },
    },
    fontSize: {
      "xl-7": "20.7px",
      "base-5": "15.5px",
      "smi-9": "12.9px",
      mid: "17px",
      "9xl-5": "28.5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
