/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color Palette based on your selection
        'primary-black': '#000000',                // Black
        'primary-dark': '#141619',                 // Dark Grayish Black
        'primary-gray': '#8a8b8c',                 // Medium Gray
        'primary-light-gray': '#e8e8e8',           // Light Gray
        'primary-charcoal': '#2c2e3a',             // Dark Blueish Gray
        'primary-dark-charcoal': '#282934',        // Dark Charcoal Gray
        'primary-very-light-gray': '#eaeaeb',      // Very Light Gray
        'primary-navy': '#030629',                 // Dark Navy Blue
        'primary-deep-blue': '#050a44',            // Deep Blue
        'primary-muted-blue-gray': '#696c8f',      // Muted Blue-Gray
        'primary-light-cool-gray': '#e6e7ec',      // Light Cool Gray
        'primary-bright-blue': '#0a21c0',          // Bright Blue
        'primary-deep-navy': '#051160',            // Deep Navy Blue
        'primary-dark-blue': '#030a3a',            // Very Dark Blue
        'primary-lavender-blue': '#9da6e6',        // Soft Lavender Blue
        'primary-light-lavender-blue': '#e7e9f9',  // Very Light Lavender Blue
        'primary-muted-gray': '#b3b4bd',           // Light Muted Gray
        'primary-muted-blue': '#696c8f',           // Muted Blue (duplicate removed)
      },
    },
  },
  plugins: [],
}

