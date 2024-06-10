import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx", "./custom-css/custom.css"],
  theme: {
    container: { center: true },
    extend: {
      minWidth: {
        450: "450px",
      },
      maxWidth: {
        650: "650px",
      },
      animation: {
        sliding: "sliding 30s linear infinite",
        zoomIn: "zoomIn 300ms linear forwards",
        animate__headShake: "animate__headShake 800ms ease-in-out",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        animate__headShake: {
          "0%": {
            "transform": "translateX(0)"
          },
          "6.5%": {
            transform: "translateX(-6px)"
          },
          "18.5%": {
            transform: "translateX(5px)"
          },
          "31.5% ": {
            transform: "translateX(-3px)"
          },
          "43.5%": {
            transform: "translateX(2px)"
          },
          "50%": {
            transform: "translateX(0)"
          }
        },
      },
    },
  },
};
