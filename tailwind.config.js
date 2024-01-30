/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "beige-1": "#E5E3DC",
        "beige-2": "#D1C7B7",
        "beige-3": "#BAAA9D",
        "beige-4": "#BF977E",
        "orange-1": "#E5DE49",
        "orange-2": "#D79E4F",
        "orange-3": "#E28829",
        "green-1": "#C3FBC6",
        "green-2": "#6F8470",
        "green-3": "#2D563F",
        "bk-black": "#000000",
        "bk-black2": "#27292A",
        "blackblack": "#0A0C0D",

        "blue-1": "#3950BE",
        "red-1": "#B34C52",
      },
      backgroundImage: (theme) => ({
        "gradient-greyscale":
          "linear-gradient(0deg, rgba(10,12,13,1) 0%, rgba(32,34,34,1) 16%, rgba(229,227,220,1) 100%);",
        //"backgroundimg-1": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        notosans: ['Noto Sans', 'sans-serif;'],
        notoserif: ['Noto Serif', 'serif'],
      },
      content: {
        // evolvetext: "url('./assets/EvolveText.png')",
        // abstractwaves: "url('./assets/AbstractWaves.png')",
        // sparkles: "url('./assets/Sparkles.png')",
        // circles: "url('./assets/Circles.png')",
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [ require("daisyui")],
  daisyui: {
    themes: [],
  },
};

//q:  is there any error in the code?