module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': 'linear-gradient(#121315, #3E3E3F)',
        'login-button-bg': 'linear-gradient(#7EE249, #F2F047)',
        'blue-button-bg': 'linear-gradient(#52D9FC, #3B6DD9)',
      },
      keyframes: {
        "fade-in": {
          "0%": { transform: "translateY(5px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      },
      animation: {
        "fade-in": "fade-in .5s ease-in-out"
      }
    },
  },
  plugins: [],
}
