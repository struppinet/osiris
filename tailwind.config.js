const colors = require('tailwindcss/colors');

const env = process.env.PROJECT;
let content = ['./resources/js/**/*.vue', './resources/js/**/*.js'];

if (env === 'welcome') {
    content = ['./resources/views/welcome.blade.php'];
}

module.exports = {
    content,

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary: {
                    900: '#b80040',
                    800: '#c90247',
                    700: '#d4024b',
                    600: '#eb0253',
                    500: '#F50057',
                    400: '#f55f95',
                    300: '#f294b6',
                    200: '#f5b5cc',
                    100: '#ffe6ee',
                },
                grey: colors.zinc,
            },
            animation: {
                'card-hover': 'card-hover 300ms forwards',
                'card-unhover': 'card-unhover 300ms forwards',
                'z-hover': 'z-hover 300ms forwards',
                'z-unhover': 'z-unhover 300ms forwards',
                fadeIn: 'fadeIn 300ms forwards',
                fadeOut: 'fadeOut 300ms forwards',
                slideInLeft: 'slideInLeft 300ms forwards',
                slideInRight: 'slideInRight 300ms forwards',
            },
            keyframes: {
                'z-hover': {
                    from: { zIndex: 0 },
                    to: { zIndex: 10 },
                },

                'z-unhover': {
                    from: { zIndex: 10 },
                    to: { zIndex: 0 },
                },

                'card-hover': {
                    from: { transform: 'scale(1)', zIndex: 10 },
                    to: { transform: 'scale(1.5)', zIndex: 10 },
                },

                'card-unhover': {
                    from: { transform: 'scale(1.5)', zIndex: 10 },
                    to: { transform: 'scale(1)', zIndex: 0 },
                },

                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },

                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },

                slideInRight: {
                    from: {
                        transform: 'translateX(0px)',
                    },

                    to: {
                        transform: 'translateX(-100%)',
                    },
                },

                slideInLeft: {
                    from: {
                        transform: 'translateX(-100%)',
                    },

                    to: {
                        transform: 'translateX(0px)',
                    },
                },
            },
        },

        forms: (theme) => ({
            default: {
                checkbox: {
                    '&:focus': {
                        outline: 'none',
                        ring: 'none',
                        boxShadow: 'none',
                        borderColor: 'none',
                    },
                },
                input: {
                    '&:focus': {
                        outline: 'none',
                        ring: 'none',
                        boxShadow: 'none',
                        borderColor: 'none',
                    },
                },
            },
        }),
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            backgroundColor: ['disabled'],
        },
    },

    corePlugins: {
        outline: false,
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
};