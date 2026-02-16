const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding article categories...');

    // Create categories
    const categories = await Promise.all([
        prisma.articleCategory.upsert({
            where: { slug: 'kesehatan-umum' },
            update: {},
            create: {
                name: 'Kesehatan Umum',
                slug: 'kesehatan-umum',
                description: 'Tips dan informasi seputar kesehatan umum',
            },
        }),
        prisma.articleCategory.upsert({
            where: { slug: 'makanan-sehat' },
            update: {},
            create: {
                name: 'Makanan Sehat',
                slug: 'makanan-sehat',
                description: 'Panduan makanan dan nutrisi sehat',
            },
        }),
        prisma.articleCategory.upsert({
            where: { slug: 'buah-buahan' },
            update: {},
            create: {
                name: 'Buah-buahan',
                slug: 'buah-buahan',
                description: 'Manfaat dan informasi seputar buah-buahan',
            },
        }),
        prisma.articleCategory.upsert({
            where: { slug: 'sayuran' },
            update: {},
            create: {
                name: 'Sayuran',
                slug: 'sayuran',
                description: 'Informasi nutrisi sayuran untuk kesehatan',
            },
        }),
        prisma.articleCategory.upsert({
            where: { slug: 'olahraga-fitness' },
            update: {},
            create: {
                name: 'Olahraga & Fitness',
                slug: 'olahraga-fitness',
                description: 'Tips olahraga dan kebugaran tubuh',
            },
        }),
        prisma.articleCategory.upsert({
            where: { slug: 'produk-afc' },
            update: {},
            create: {
                name: 'Produk AFC',
                slug: 'produk-afc',
                description: 'Informasi seputar produk kesehatan AFC Japan',
            },
        }),
    ]);

    console.log('Article categories created');
    console.log('Seeding articles...');

    // Article data
    const articles = require('./articles-content');

    for (const articleData of articles) {
        const category = categories.find(cat => cat.slug === articleData.categorySlug);

        await prisma.article.upsert({
            where: { slug: articleData.slug },
            update: {},
            create: {
                title: articleData.title,
                slug: articleData.slug,
                excerpt: articleData.excerpt,
                content: articleData.content,
                featuredImage: articleData.featuredImage,
                author: 'AFC Japan Store ID',
                published: true,
                publishedAt: new Date(),
                metaTitle: articleData.metaTitle,
                metaDescription: articleData.metaDescription,
                keywords: articleData.keywords,
                categoryId: category.id,
            },
        });
    }

    console.log('Articles created successfully!');
}

main()
    .catch((e) => {
        console.error('Error seeding articles:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
