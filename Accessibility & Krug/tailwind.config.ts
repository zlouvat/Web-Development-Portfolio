import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bates College colors
        garnet: {
          DEFAULT: 'hsl(350, 78%, 30%)',
          bright: 'hsl(351, 80%, 34%)',
          dark: 'hsl(349, 98%, 18%)',
          dark2: 'hsl(350, 97%, 12%)',
        },
        batesGray: {
          DEFAULT: 'hsl(0, 0%, 44%)',
          light: 'hsl(0, 0%, 94%)',
        },
        batesBlue: {
          DEFAULT: 'hsl(198, 86%, 27%)',
          bright: 'hsl(195, 61%, 46%)',
          dark: 'hsl(198, 94%, 14%)',
          light: 'hsl(192, 95%, 80%)',
        },
        batesGreen: {
          DEFAULT: 'hsl(57, 66%, 22%)',
          bright: 'hsl(55, 60%, 44%)',
        },
        batesLink: {
          DEFAULT: 'hsl(198, 86%, 34%)',
          light: 'hsl(192, 95%, 80%)',
        }
      },
      fontFamily: {
        'sans': ['Neue Frutiger W01', 'Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Sabon Next W01', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config 