/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          brand: '#10B981',
          deep: '#047857',
          dark: '#064E3B',
          soft: '#D1FAE5',
          glow: 'rgba(16, 185, 129, 0.25)',
        },
        // Premium Light Theme Palette
        light: {
          bg:      '#F8FAFC',   // Very light blue-gray for main background
          surface: '#FFFFFF',   // Pure white for cards/surfaces
          card:    '#FFFFFF',   // Pure white
          border:  'rgba(15, 23, 42, 0.08)', // Soft dark border
          muted:   '#64748B',   // Slate-500 for muted text
        },
      },
      fontFamily: {
        heading: ['Outfit',   'sans-serif'],
        nav:     ['Poppins',  'sans-serif'],   // Navbar menu items
        body:    ['Inter',    'sans-serif'],
        code:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'ticker':       'ticker 28s linear infinite',
        'shimmer':      'shimmer 2.4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      }
    },
  },
  plugins: [],
}
