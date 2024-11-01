/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.tripofert.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};
