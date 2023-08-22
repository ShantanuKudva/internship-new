/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        tomato: "#eb5351",
        black: "#000",
        whitesmoke: {
          "100": "#f6f6f9",
          "200": "#f2f1f0",
        },
        dimgray: {
          "100": "#626262",
          "200": "#555",
        },
        peachpuff: "rgba(236, 205, 180, 0.46)",
        gainsboro: {
          "100": "#ddd",
          "200": "rgba(217, 217, 217, 0)",
        },
        salmon: {
          "100": "#ec5d5c",
          "200": "rgba(236, 93, 92, 0)",
        },
        limegreen: "#77dd48",
        linen: "#f6e8dc",
      },
      fontFamily: {
        "hp-simplified-jpan": "'HP Simplified Jpan'",
        inter: "Inter",
        assistant: "Assistant",
      },
      borderRadius: {
        "31xl": "50px",
        sm: "14px",
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "13xl": "32px",
      "21xl": "40px",
      "6xl": "25px",
      xl: "20px",
      "11xl": "30px",
      "9xl": "28px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
