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
        title: 'Tanda-tanda Pencernaan Terganggu pada Saat Bulan Puasa',
        slug: 'tanda-tanda-pencernaan-terganggu-pada-saat-bulan-puasa',
        excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan pencernaan pada saat berpuasa.',
        content: `
<p><strong>Tanda-tanda Pencernaan Terganggu pada Saat Bulan Puasa</strong></p>
<p><strong>Daftar Gejala</strong></p>
<ul>
    <li>Sering cegukan</li>
    <li>Sering buang gas</li>
    <li>Mata berwarna kuning</li>
    <li>Benjolan pada perut</li>
    <li>Sembelit</li>
    <li>Feses berwarna hitam</li>
    <li>Perut berisi cairan</li>
</ul>
<p>"Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan pencernaan pada saat berpuasa."</p>
<p><strong>Nama Produk: Utsukushhii Gold 2.0</strong></p>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
        `.trim(),
        featuredImage: '/images/articles/default.jpg', // You can change this if you have a specific image
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: 'Tanda-tanda Pencernaan Terganggu pada Saat Bulan Puasa | AFC Japan',
        metaDescription: 'Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan pencernaan pada saat berpuasa dengan Utsukushhii Gold 2.0.',
        keywords: ['pencernaan', 'kesehatan puasa', 'utsukushhii gold 2.0', 'afc', 'gejala pencernaan', 'solusi sehat'],
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
