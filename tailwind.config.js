/** @type {import('tailwindcss').Config} */
module.exports = {
  // This 'content' section is the crucial part.
  // It tells Tailwind to scan all .html and .js files inside your 'src' folder.
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
