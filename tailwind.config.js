/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#150FF4",
        "secondary": "#E2E2E2",
        "beige": "#FFFCEF"
      },
      borderColor: {
        DEFAULT: 'black'
      },
      fontFamily: {
        fancy: ["century-gothic", "Verdana", "sans-serif"],
        sans: ["greycliff-cf", "sans-serif"]
      }
    },
  },
  plugins: [],
}

