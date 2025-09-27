// Tailwind config with extended theme tokens for the app
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern professional palette - Black, Orange, Navy
        primary: '#0F0F0F', // deep black for text
        secondary: '#1A1A2E', // navy blue
        accent: '#FF6B35', // vibrant orange
        highlight: '#FF8C42', // lighter orange
        bg: '#FAFAFA', // clean white background
        surface: '#FFFFFF', // pure white surface
        muted: '#6B7280',
        'navy-dark': '#0F1419',
        'navy-light': '#1A2332',
        'orange-dark': '#E55A2B',
        'orange-light': '#FF8C42',
        'black-soft': '#1A1A1A',
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
      },
      borderRadius: {
        xl: '12px',
      },
      fontFamily: {
        'sans': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 20px rgba(0,0,0,0.06)',
        'modern': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'navy-glow': '0 0 20px rgba(26, 26, 46, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'progress': 'progress 5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.6)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config


