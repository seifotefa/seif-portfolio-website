/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a', // Dark gray background
        text: {
          primary: '#e0e0e0',  // Light gray text
          secondary: '#a0a0a0' // Slightly darker gray for secondary text
        },
        accent: {
          primary: '#8b5cf6',   // Purple accent
          hover: '#7c3aed'      // Darker purple for hover states
        }
      }
    },
  },
  plugins: [],
} 
