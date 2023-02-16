/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.jsx'],
    theme: {
        extend: {
            screens: {


                'lg': { 'max': '1023px' },
                // => @media (max-width: 1023px) { ... }

                'sm': { 'max': '500px' },
                // => @media (max-width: 639px) { ... }



            },
        },
    },
    plugins: [],
}