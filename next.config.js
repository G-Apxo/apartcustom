const { trueGray } = require('tailwindcss/colors');

module.exports = {
    // reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/Investing/',
                destination: '/invest-in-real-estate-in-tbilisi/',
                permanent: true,
            },
        ];
    },
    i18n: {
        locales: ['default', 'en', 'ru', 'ge'],
        defaultLocale: 'ge',
        localeDetection: false,
    },
    trailingSlash: true,
    largePageDataBytes: 500 * 100000, // 12800KB by default
    staticPageGenerationTimeout: 100,

    async redirects() {
        return [
            {
                source: '/Contact/',
                destination: '/contact/',
                permanent: true
            },
            {
                source: '/Blog/',
                destination: '/blog/',
                permanent: true
            },
            {
                source: '/Contact/',
                destination: '/contact/',
                permanent: true
            },
            {
                source: '/About/',
                destination: '/about/',
                permanent: true
            },
            {
                source: '/BukhaidzeB1/',
                destination: '/bukhaidzeB1/',
                permanent: true
            },
            {
                source: '/BukhaidzeB2/',
                destination: '/bukhaidzeB2/',
                permanent: true
            },
        ]
    }
};
