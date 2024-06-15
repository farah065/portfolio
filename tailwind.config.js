/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          200: "#F8F5EA",
          300: "#EEECDE",
          400: "#DBD5BC",
          500: "#C4BC9B",
        },
        coal: {
          200: "#555555",
          300: "#333333",
          400: "#111111",
        }
      },
      fontFamily: {
        plexMono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};