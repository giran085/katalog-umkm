export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: 'https://www.afcjapanstore.id/sitemap.xml', // Update with your actual domain
    };
}
