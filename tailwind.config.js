/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        discountBackground: "#4457ff",
        primaryfont: "#0b0a33",
        background: "#F3F5FF",
        inputBorderColor: "#EDF2F7",
        landingpagecolor: "#7a7d9c",
      },
      backgroundImage: {
        buttonBackground:
          "linear-gradient(60deg, rgb(68, 87, 255), rgb(117, 131, 253))",
      },
      boxShadow: {
        formShahow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        inputShadow: "rgba(27, 25, 121, 0.05) 0px 2px 8px 0px",
        forgetButton: "rgba(89, 106, 255, 0.28) 0px 0px 35px 10px",
      },
      borderColor: {
        inputBorderColor: "#EDF2F7",
      },
    },
    
    animation: {
      scroll: "scroll 40s linear infinite",
      scrollReverse: "scrollReverse 40s linear infinite",
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-270px * 7))" },
      },
      scrollReverse: {
        '0%': { transform: 'translateX(calc(-270px * 6))' },
        '100%': { transform: 'translateX(0)' },
      },
    },
  },
  plugins: [],
}

