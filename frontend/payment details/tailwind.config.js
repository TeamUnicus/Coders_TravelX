/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkblue: "rgba(11, 8, 166, 0.81)",
        whitesmoke: "#f6eeee",
        indigo: "#49128e",
        slategray: {
          "100": "#6d7d95",
          "200": "#697386",
        },
        "system-background-dark-base-primary": "#000",
      },
      fontFamily: {
        inter: "Inter",
        "secular-one": "'Secular One'",
        "body-bold": "'SF Pro Text'",
      },
      borderRadius: {
        xl: "20px",
        "4xl": "23px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "3xl": "22px",
      xl: "20px",
      "5xl": "24px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
