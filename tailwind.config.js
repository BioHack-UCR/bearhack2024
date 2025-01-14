/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        header: ["var(--font-grenze)"],
        paragraph: ["var(--font-titillium-web)"],
      },
      animation: {
        "twinkling-star": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
        "shooting-star-outer":
          "slide-early 20s cubic-bezier(0.8, 0, 0.4, 1) infinite",
        "shooting-star-inner":
          "slide-late 20s cubic-bezier(0.8, 0, 0.4, 1) infinite",
        "fade-in": "fade-in 1s linear 1",
        spinny: "spin 18s linear infinite",
        flap: "wingbeat 1s infinite",
        "bounce-1/4": "bounce 2s infinite 0ms",
        "bounce-2/4": "bounce 2s infinite 500ms",
        "bounce-3/4": "bounce 2s infinite 1000ms",
        "bounce-4/4": "bounce 2s infinite 1500ms",
        "slide-in": "slide-in-up 0.3s cubic-bezier(0.4, 0, 0.6, 1) 1 forwards",
      },
      keyframes: {
        "slide-early": {
          "0%, 10%, 13.1%, 100%": { "clip-path": "rect(auto 0 auto auto)" },
          "12%, 13%": { "clip-path": "rect(auto 10px auto auto)" },
        },
        "slide-late": {
          "0%, 11%": { transform: "translateX(0)" },
          "13%, 100%": { transform: "translateX(10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-up": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wingbeat: {
          "0%, 100%": {
            transform: "rotateY(60deg)",
            "animation-timing-function": "cubic-bezier(.77,0,.89,.46)",
          },
          "50%": {
            transform: "rotateY(10deg)",
            "animation-timing-function": "ease-out",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(12px)",
          },
        },
      },
      colors: {
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          "select-bg": "#3F3F3F",
          "radio-selected": "#FFFFFF",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
        bear: {
          dark: "#000303",
          "page-gradient-1": "#000303",
          "page-gradient-2": "#002525",
          teal: "#4ABFB5",
          "teal-100": "#B3FBF7",
          purple: "#B16FF0",
          light: "#FDF7C7",
          pink: "#FF60B6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
