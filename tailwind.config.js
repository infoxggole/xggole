/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        xggole: {
          light: '#E8F4FD',
          sky: '#B8D9F5',
          soft: '#D6EBFA',
          blue: '#3B82F6',
          medium: '#2563EB',
          deep: '#1E3A8A',
          navy: '#0F2847',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bump-x': 'bumpX 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'flap-left': 'flapLeft 3s ease-in-out infinite',
        'flap-right': 'flapRight 3s ease-in-out infinite',
      },
      keyframes: {
        bumpX: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-6px) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-50px)' },
        },
        flapLeft: {
          '0%, 100%': { transform: 'perspective(1000px) rotateY(10deg) rotate(-15deg)', opacity: '0.8' },
          '50%': { transform: 'perspective(1000px) rotateY(75deg) rotate(-15deg)', opacity: '0.3' },
        },
        flapRight: {
          '0%, 100%': { transform: 'perspective(1000px) rotateY(-10deg) rotate(15deg)', opacity: '0.8' },
          '50%': { transform: 'perspective(1000px) rotateY(-75deg) rotate(15deg)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
