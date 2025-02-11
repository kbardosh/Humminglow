import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { withUt } from "uploadthing/tw";

export default withUt({
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        xl: "1.25rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        black: {
          "400": "#020403",
        },
        white: {
          "400": "#EEEEEE",
        },
        gold: {
          // "400": "#C9BA6F",
          "400": "#c6b666",
        },
        purple: {
          "400": "#201445",
        },
        brown: {
          "400": "#634B42",
        },
      },
    },
  },
  plugins: [
    plugin((props) => {
      return props.addUtilities({
        ".text-shadow-glow-gold": {
          textShadow: "0 0 5px #C9BA6F, 0 0 5px rgba(201, 186, 111, 0.2)",
        },
      });
    }),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
}) satisfies Config;
