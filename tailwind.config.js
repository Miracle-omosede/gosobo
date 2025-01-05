/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "serif"],
        "poppins": ["Poppins", "serif"],
        "jost": ["Jost", "serif"],
      },
      colors: {
        'dark-cyan':'#048a81',
        'raisin-black':'#322f36',
        'indian-red':'#db5461',
        'dark-slate-gray':'#204e50',
        'custom-yellow':'#f3a712',
      }
    },
  },
  plugins: [],
}