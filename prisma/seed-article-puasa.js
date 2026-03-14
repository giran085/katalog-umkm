const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding new article for Solusi Sehat category...');

    const categorySlug = 'solusi-sehat';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found! Please run seed-new-categories.js first.`);
        process.exit(1);
    }

    const articleData = {
        title: 'Hal yang Harus Diperhatikan Pada saat Puasa',
        slug: 'hal-yang-harus-diperhatikan-pada-saat-puasa',
        excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu mendukung kondisi tubuh tetap optimal selama puasa.',
        content: `
<p><strong>AFC</strong></p>
<p><strong>Hal yang Harus Diperhatikan</strong></p>
<p><strong>Pada saat Puasa</strong></p>
<ul>
    <li>Sahur yang Seimbang</li>
    <li>Konsumsi Air yang Cukup</li>
    <li>Pilih Karbohidrat Kompleks</li>
    <li>Protein Berkualitas</li>
    <li>Lemak Sehat</li>
    <li>Sumber Serat</li>
    <li>Konsumsi Buah dan Sayuran</li>
    <li>Suplemen Gizi (jika diperlukan)</li>
    <li>Batasi Konsumsi Makanan Manis dan Garam</li>
    <li>Pantau Waktu Berbuka Puasa dan Sahur</li>
    <li>Konsumsi makanan kesehatan sebagai nutrisi tambahan seperti Subarashi dan Utsukushhii Gold</li>
</ul>
<p>Anda membutuhkan superfood bernutrisi untuk membantu mendukung kondisi tubuh tetap optimal selama puasa.</p>
<p><strong>Solusi Pendamping: AFC SOP SUBARASHI &amp; UTSUKUSHHII</strong></p>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
        `.trim(),
        featuredImage: '/images/articles/default.jpg', // You can change this if you have a specific image
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: 'Hal yang Harus Diperhatikan Pada saat Puasa | AFC Japan',
        metaDescription: 'Anda membutuhkan superfood bernutrisi untuk membantu mendukung kondisi tubuh tetap optimal selama puasa. Solusi Pendamping: AFC SOP SUBARASHI & UTSUKUSHHII.',
        keywords: ['puasa', 'kesehatan', 'tips puasa', 'afc', 'subarashi', 'utsukushhii', 'solusi sehat'],
        categoryId: category.id,
    };

    const article = await prisma.article.upsert({
        where: { slug: articleData.slug },
        update: {},
        create: articleData,
    });

    console.log('Successfully created article:', article.title);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
