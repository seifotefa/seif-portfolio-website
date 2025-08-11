/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '550px',
      },
      colors: {
        background: '#1a1a1a', // Dark gray background
        text: {
          primary: '#e0e0e0',  // Light gray text
          secondary: '#a0a0a0' // Slightly darker gray for secondary text
        },
        accent: {
          primary: '#4A90E2',   // Blue accent (matching home page titles)
          hover: '#357ABD'      // Darker blue for hover states
        }
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        synonym: ['"Synonym"', 'monospace'],
      },
    },
  },
  plugins: [],
}
