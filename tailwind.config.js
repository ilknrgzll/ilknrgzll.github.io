/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // HTML file in the root directory of the project
    './src/**/*.{js,ts,jsx,tsx}', // All JavaScript, TypeScript and JSX/TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        // - PRİMARY - Green-Blue Color Palette
        greenBlue: {
          teal: '#1abc9c',
          darkCyan: '#0E4D4D',
          deepTeal: '#014D4E',
          midnightGreen: '#004953',
          oceanBlue: '#003F5C',
          brightCyan: '#00FFFF',
        },

        // Green Color Palette
        green: {
          emerald: '#2F4F4F',
          darkOlive: '#556B2F',
          forest: '#228B22',
          pine: '#01796F',
          deepSea: '#0D3B2E',
        },

        // White Color Palette
        white: {
          DEFAULT: '#FFFFFF', // White
          dark: '#F0F0F0', // Gallery
          darker: '#D9D9D9', // Alto
          darkest: '#BFBFBF', // Silver
        },

        // Black Color Palette
        black: {
          lightest: '#666666', // Dove Gray
          lighter: '#4D4D4D', // Tundora
          light: '#1f1f1f', // Mine Shaft
          DEFAULT: '#000000', // Black
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
