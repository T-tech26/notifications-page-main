/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}", "./docs/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '200px',
      'md' : '500px',
      'lg' : '769px',
      'xl' : '1024px',
      '2xl' : '1280px',
      '3xl' : '1440px'
    },
    extend: {
      colors: {
        'Red' : 'hsl(1, 90%, 64%)',
        'Blue' : 'hsl(219, 85%, 26%)',
        'White' : 'hsl(0, 0%, 100%)',
        'Vlgb' : 'hsl(210, 60%, 98%)',
        'Lgb1' : 'hsl(211, 68%, 94%)',
        'Lgb2' : 'hsl(205, 33%, 90%)',
        'Gb' : 'hsl(219, 14%, 63%)',
        'Dgb' : 'hsl(219, 12%, 42%)',
        'Vdb' : 'hsl(224, 21%, 14%)',
        'a' : 'hsl(228, 45%, 44%)'
      },
      fontFamily: {
        'PlusJakartaSans' : ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
