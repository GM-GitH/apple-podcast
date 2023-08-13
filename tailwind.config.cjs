/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  jit: true,
  theme: {
    extend: {
      boxShadow: {
        custom: "0 5px 10px 1px rgba(0, 0, 0, 0.2)"
      }
    }
  },
  plugins: []
}
