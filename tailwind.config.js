module.exports = {
  purge: {
    enabled: true,
    content: [
      './*.html',
      './!(_site|node_modules)/**/*.html',
      './_src/**/*.css',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['IBM Plex Sans', 'sans-serif'],
      heading: ['IBM Plex Sans Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-highlight': 'var(--color-primary-highlight)',
      },
      fontSize: {
        'document': '20px',
      },
      letterSpacing: {
        'cavernous': '0.2em',
      },
      zIndex: {
        '-1': '-1',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
