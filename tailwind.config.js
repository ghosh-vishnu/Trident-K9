/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Friendly Warm Amber
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        },
        copper: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Vibrant Warm Accent
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        tactical: {
          950: '#0f172a',
          900: '#1e293b',
          850: '#334155',
          800: '#475569',
          700: '#64748b',
          600: '#94a3b8',
          100: '#f1f5f9',
          50: '#f8fafc'
        },
        sand: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1'
        }
      },
      fontFamily: {
        sans: ['"Poppins"', '"Roboto"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', '"Roboto"', 'system-ui', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif']
      },
      boxShadow: {
        'warm-glow': '0 10px 25px -5px rgba(245, 158, 11, 0.25)',
        'soft-card': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'lifted': '0 12px 30px -4px rgba(15, 23, 42, 0.08)'
      }
    },
  },
  plugins: [],
}
