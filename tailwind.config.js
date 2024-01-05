/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter'],
        poppins: ['var(--font-poppins)']
      },
      colors: {
        'blue-primary': '#1D4FFE',
        'green-primary': '#4BCE97',
        'gray-border-card': '#131317',
        'gray-area-favorite': '#05030A',
      },
      maxWidth: {
        grid: '77.5rem',
        'card-nft': '17.4rem',
        'card-collector': '37rem',
        'logo-size-mobile': '10rem',
        'nav-header': '48.3rem',
        'left-content-footer': '20.2rem'
      },
      height: {
        'area-image-nft': '14.7rem'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      '@tablet': '640px',
      // => @media (min-width: 640px) { ... }

      '@laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      '@desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("tailwindcss-animate")],
}