tailwind.config = {
  theme: {
    
    extend: {
      colors: {
        'primary': '#d69b77',
      },
      animation: {
        marqueeLogo: 'marqueeLogo 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite',
        marqueeClientLogo: 'marqueeClientLogo 15s linear infinite',
        marqueeClient2: 'marqueeClient2 15s linear infinite',
        'marquee': 'marquee var(--marquee-duration) linear infinite',
        'fade-in': 'fade-in .5s linear forwards',
      },
      keyframes: {
        marqueeLogo: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeClientLogo: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        marqueeClient2: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee: {
          '100%': { transform: 'translateY(-50%)' }
        },
        "fade-in": {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
    },
  },
  plugins: [],
}
}

// module.exports = {
// tailwind.config = {