require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

async function main() {
    console.log('Seeding database...');

    // Clear existing data
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});

    // Create Categories
    const catMakanan = await prisma.category.create({
        data: { name: 'Makanan' },
    });

    const catMinuman = await prisma.category.create({
        data: { name: 'Minuman' },
    });

    const catSnack = await prisma.category.create({
        data: { name: 'Snack' },
    });

    // Create Products
    const products = [
        {
            name: 'Nasi Goreng Spesial',
            description: 'Nasi goreng dengan telur, ayam suwir, dan kerupuk.',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60',
            categoryId: catMakanan.id,
        },
        {
            name: 'Mie Goreng Jawa',
            description: 'Mie goreng bumbu jawa yang khas dan gurih.',
            price: 22000,
            image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60',
            categoryId: catMakanan.id,
        },
        {
            name: 'Sate Ayam Madura',
            description: 'Sate ayam dengan bumbu kacang yang kental.',
            price: 30000,
            image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&auto=format&fit=crop&q=60',
            categoryId: catMakanan.id,
        },
        {
            name: 'Es Teh Manis',
            description: 'Es teh segar penghilang dahaga.',
            price: 5000,
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=60',
            categoryId: catMinuman.id,
        },
        {
            name: 'Kopi Susu Gula Aren',
            description: 'Kopi susu kekinian dengan gula aren asli.',
            price: 18000,
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60',
            categoryId: catMinuman.id,
        },
        {
            name: 'Keripik Tempe',
            description: 'Keripik tempe renyah, pas untuk cemilan.',
            price: 12000,
            image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&auto=format&fit=crop&q=60',
            categoryId: catSnack.id,
        },
        {
            name: 'Basreng Pedas',
            description: 'Baso goreng pedas nendang.',
            price: 15000,
            image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=60',
            categoryId: catSnack.id,
        }
    ];

    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
