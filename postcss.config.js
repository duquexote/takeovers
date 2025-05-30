module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Temporariamente desabilitado até garantir que o cssnano seja instalado corretamente
    // ...(process.env.NODE_ENV === 'production' ? {
    //   cssnano: {
    //     preset: ['default', {
    //       discardComments: {
    //         removeAll: true,
    //       },
    //       minifyFontValues: {
    //         removeQuotes: false,
    //       },
    //     }],
    //   },
    // } : {}),
  },
};