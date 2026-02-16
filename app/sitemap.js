import prisma from '@/lib/prisma';

export default async function sitemap() {
    const baseUrl = 'https://afcjapanstore.com'; // Update with your actual domain

    // Get all published articles
    const articles = await prisma.article.findMany({
        where: { published: true },
        select: {
            slug: true,
            updatedAt: true,
        },
    });

    const articleUrls = articles.map((article) => ({
        url: `${baseUrl}/artikel/${article.slug}`,
        lastModified: article.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // Get all categories
    const categories = await prisma.articleCategory.findMany({
        select: { slug: true },
    });

    const categoryUrls = categories.map((category) => ({
        url: `${baseUrl}/kategori/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/artikel`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        ...articleUrls,
        ...categoryUrls,
    ];
}
