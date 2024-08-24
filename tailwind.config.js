// import defaultTheme from 'tailwindcss/defaultTheme';
// import forms from '@tailwindcss/forms';

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
//         './storage/framework/views/*.php',
//         './resources/views/**/*.blade.php',
//         './resources/js/**/*.jsx',
//     ],

//     theme: {
//         extend: {
//             fontFamily: {
//                 sans: ['Figtree', ...defaultTheme.fontFamily.sans],
//             },
//         },
//     },

//     plugins: [forms],
// };
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.jsx",
    ],
    theme: {
      extend: {
        colors: {
          'indigo': {
            900: '#440381', // Your custom indigo
          },
          'blue': {
            300: '#51E5FF', // Your electric blue
            500: '#8338EC', // Your blue violet
            700: '#0056BF', // Your sapphire
          },
          'gray': {
            900: '#100B00', // Your smoky black
          },
        },
      },
    },
    plugins: [],
  }
