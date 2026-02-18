const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const categories = [
        {
            name: 'Solusi Sehat',
            slug: 'solusi-sehat',
            description: 'Artikel dan tips seputar solusi kesehatan untuk berbagai keluhan dan penyakit.',
        },
        {
            name: 'Manfaat Produk AFC',
            slug: 'manfaat-produk-afc',
            description: 'Informasi lengkap mengenai manfaat dan khasiat produk-produk AFC Japan.',
        },
    ];

    console.log('Mulai menambahkan kategori...');

    for (const category of categories) {
        const existingCategory = await prisma.articleCategory.findUnique({
            where: { slug: category.slug },
        });

        if (!existingCategory) {
            const createdCategory = await prisma.articleCategory.create({
                data: category,
            });
            console.log(`Berhasil menambahkan kategori: ${category.name}`);
        } else {
            console.log(`Kategori sudah ada: ${category.name}`);
        }
    }

    console.log('Selesai menambahkan kategori.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
