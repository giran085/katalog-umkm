const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding EBookCategories and EBooks...');

    // 1. Seed categories
    const categoriesData = [
        { name: 'Kesehatan Lambung', slug: 'kesehatan-lambung', description: 'Panduan dan strategi mengatasi masalah asam lambung, GERD, dan maag secara tuntas.' },
        { name: 'Pola Makan & Diet', slug: 'pola-makan-diet', description: 'Resep masakan sehat dan pengaturan menu makanan seimbang ramah pencernaan.' },
        { name: 'Kesehatan Mental', slug: 'kesehatan-mental', description: 'Panduan mengelola stres, mengatasi anxiety (kecemasan), dan menjaga kesehatan mental.' }
    ];

    const categories = {};
    for (const cat of categoriesData) {
        const record = await prisma.eBookCategory.upsert({
            where: { slug: cat.slug },
            update: cat,
            create: cat
        });
        categories[cat.slug] = record;
        console.log(`Processed category: ${record.name}`);
    }

    // 2. Seed EBooks
    const ebooksData = [
        {
            title: 'Panduan Sukses Bebas Asam Lambung & GERD',
            slug: 'panduan-sukses-bebas-asam-lambung-gerd',
            excerpt: 'Buku panduan lengkap terstruktur memutus lingkaran setan Asam Lambung, GERD, dan kecemasan berlebih (Anxiety).',
            description: 'Buku digital (E-Book) ini dirancang khusus untuk membantu Anda memahami akar permasalahan asam lambung, cara mengatur pola makan harian, mereset pola pikir cemas (anxiety), serta mengoptimalkan nutrisi tubuh. Ditulis oleh tim ahli kesehatan AFC Japan Store ID dengan bahasa yang praktis dan mudah dipahami.',
            image: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/relax%20(1).jpg',
            price: 149000,
            purchaseUrl: 'https://clicky.id/payment/purchase/69620cd13f7e70ad4635bff4?affiliate=6a0721a6a4d32eb6b99cfb04',
            published: true,
            categoryId: categories['kesehatan-lambung'].id
        },
        {
            title: 'Buku Resep Makanan Sehat untuk Penderita GERD',
            slug: 'buku-resep-makanan-sehat-penderita-gerd',
            excerpt: 'Kumpulan resep masakan lezat, sehat, aman lambung, dan bebas pemicu kecemasan untuk sehari-hari.',
            description: 'Sering bingung mau makan apa karena takut asam lambung naik? E-Book ini menyajikan 50+ resep hidangan lezat mulai dari sarapan, makan siang, makan malam, hingga camilan sehat yang 100% aman untuk lambung sensitif dan membantu menenangkan sistem pencernaan.',
            image: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/relax%20(1).jpg', // Fallback or another beautiful healthy food image
            price: 99000,
            purchaseUrl: 'https://clicky.id/payment/purchase/69620cd13f7e70ad4635bff4?affiliate=6a0721a6a4d32eb6b99cfb04',
            published: true,
            categoryId: categories['pola-makan-diet'].id
        },
        {
            title: 'Seni Berdamai dengan Kecemasan Berlebih (Anxiety)',
            slug: 'seni-berdamai-dengan-kecemasan-berlebih-anxiety',
            excerpt: 'Metode kognitif perilaku (CBT) praktis untuk meredakan kecemasan, serangan panik, dan psikosomatis akibat GERD.',
            description: 'Ketika asam lambung naik memicu kecemasan, pikiran Anda cenderung melayang ke skenario terburuk. E-Book ini akan memandu Anda selangkah demi selangkah menerapkan metode CBT mandiri untuk menenangkan pikiran, mengatasi overthinking, dan memulihkan kestabilan mental Anda.',
            image: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/relax%20(1).jpg',
            price: 125000,
            purchaseUrl: 'https://clicky.id/payment/purchase/69620cd13f7e70ad4635bff4?affiliate=6a0721a6a4d32eb6b99cfb04',
            published: true,
            categoryId: categories['kesehatan-mental'].id
        }
    ];

    for (const ebook of ebooksData) {
        const record = await prisma.eBook.upsert({
            where: { slug: ebook.slug },
            update: ebook,
            create: ebook
        });
        console.log(`Processed E-Book: ${record.title}`);
    }

    console.log('Seeding EBooks completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
