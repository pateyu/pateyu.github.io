module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-navy": "#0a192f", // Dark navy background color
        "light-blue": "#64ffda", // Accent color
        "gray-300": "#d1d5db", // Light gray text color
        "gray-700": "#374151", // Dark gray for cards
      },
    },
  },
  variants: {},
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
