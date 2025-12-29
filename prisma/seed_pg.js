const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function main() {
    console.log('Seeding via PG...');
    try {
        await client.connect();

        // Clear data
        await client.query('DELETE FROM "Product"');
        await client.query('DELETE FROM "Category"');

        // Create Categories
        const cats = ['Makanan', 'Minuman', 'Snack'];
        const catIds = {};

        for (const name of cats) {
            const res = await client.query(
                'INSERT INTO "Category" (name) VALUES ($1) RETURNING id',
                [name]
            );
            catIds[name] = res.rows[0].id;
        }

        // Create Products
        const products = [
            {
                name: 'Nasi Goreng Spesial',
                description: 'Nasi goreng dengan telur, ayam suwir, dan kerupuk.',
                price: 25000,
                image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60',
                category: 'Makanan',
            },
            {
                name: 'Mie Goreng Jawa',
                description: 'Mie goreng bumbu jawa yang khas dan gurih.',
                price: 22000,
                image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60',
                category: 'Makanan',
            },
            {
                name: 'Sate Ayam Madura',
                description: 'Sate ayam dengan bumbu kacang yang kental.',
                price: 30000,
                image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&auto=format&fit=crop&q=60',
                category: 'Makanan',
            },
            {
                name: 'Es Teh Manis',
                description: 'Es teh segar penghilang dahaga.',
                price: 5000,
                image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=60',
                category: 'Minuman'
            },
            {
                name: 'Kopi Susu Gula Aren',
                description: 'Kopi susu kekinian dengan gula aren asli.',
                price: 18000,
                image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60',
                category: 'Minuman'
            },
            {
                name: 'Keripik Tempe',
                description: 'Keripik tempe renyah, pas untuk cemilan.',
                price: 12000,
                image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&auto=format&fit=crop&q=60',
                category: 'Snack'
            },
            {
                name: 'Basreng Pedas',
                description: 'Baso goreng pedas nendang.',
                price: 15000,
                image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=60',
                category: 'Snack'
            }
        ];

        for (const p of products) {
            await client.query(
                `INSERT INTO "Product" (name, description, price, image, "categoryId", "createdAt") 
         VALUES ($1, $2, $3, $4, $5, NOW())`,
                [p.name, p.description, p.price, p.image, catIds[p.category]]
            );
        }

        console.log('Seeding finished via PG.');
        await client.end();
    } catch (err) {
        console.error('Seed error:', err);
        process.exit(1);
    }
}

main();
