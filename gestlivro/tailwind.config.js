/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "#dde1e6",
        input: "#f2f4f8",
        ring: "#0f62fe",
        background: "#f2f4f8",
        foreground: "#21272a",
        primary: {
          DEFAULT: "#0f62fe",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f2f4f8",
          foreground: "#4d5358",
        },
        destructive: {
          DEFAULT: "#da1e28",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#dde1e6",
          foreground: "#697077",
        },
        accent: {
          DEFAULT: "#a6c8ff",
          foreground: "#001d6c",
        },
      },
    },
  },
  plugins: [],
}