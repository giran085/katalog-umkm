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
    console.log('Seeding 10 new 2027 AFC Products...\n');

    // 1. Get or find Category AFC Produk
    let category = await prisma.category.findFirst({
        where: { name: { contains: 'AFC', mode: 'insensitive' } }
    });
    if (!category) {
        category = await prisma.category.findFirst();
    }
    if (!category) {
        category = await prisma.category.create({
            data: { name: 'AFC Produk' }
        });
    }
    console.log(`Using Category: "${category.name}" (ID: ${category.id})\n`);

    // 2. Fetch templates from existing products
    const existing = await prisma.product.findMany();
    const findTemplate = (keyword) => {
        return existing.find(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
    };

    const utsukushhiiTpl = findTemplate('utsukushhii');
    const subarashiTpl = findTemplate('subarashi');
    const hikariTpl = findTemplate('hikari');
    const allProdukTpl = findTemplate('all produk');

    if (!utsukushhiiTpl || !subarashiTpl || !hikariTpl || !allProdukTpl) {
        console.warn('Warning: Could not find all template products, using fallback texts');
    }

    const baseUrl = 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/';

    const itemsConfig = [
        {
            num: 1,
            name: utsukushhiiTpl?.name || 'Utsukushhii',
            price: utsukushhiiTpl?.price || 1850000,
            description: utsukushhiiTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (1).png'),
        },
        {
            num: 2,
            name: subarashiTpl?.name || 'SOP Subarashi',
            price: subarashiTpl?.price || 2000000,
            description: subarashiTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (2).png'),
        },
        {
            num: 3,
            name: hikariTpl?.name || 'Hikari',
            price: hikariTpl?.price || 1800000,
            description: hikariTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (3).png'),
        },
        {
            num: 4,
            name: subarashiTpl?.name || 'SOP Subarashi',
            price: subarashiTpl?.price || 2000000,
            description: subarashiTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (4).png'),
        },
        {
            num: 5,
            name: utsukushhiiTpl?.name || 'Utsukushhii',
            price: utsukushhiiTpl?.price || 1850000,
            description: utsukushhiiTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (5).png'),
        },
        {
            num: 6,
            name: hikariTpl?.name || 'Hikari',
            price: hikariTpl?.price || 1800000,
            description: hikariTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (6).png'),
        },
        {
            num: 7,
            name: allProdukTpl?.name || 'All Produk AFC',
            price: allProdukTpl?.price || 5650000,
            description: allProdukTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (7).png'),
        },
        {
            num: 8,
            name: subarashiTpl?.name || 'SOP Subarashi',
            price: subarashiTpl?.price || 2000000,
            description: subarashiTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (8).png'),
        },
        {
            num: 9,
            name: utsukushhiiTpl?.name || 'Utsukushhii',
            price: utsukushhiiTpl?.price || 1850000,
            description: utsukushhiiTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (9).png'),
        },
        {
            num: 10,
            name: hikariTpl?.name || 'Hikari',
            price: hikariTpl?.price || 1800000,
            description: hikariTpl?.description || '',
            image: baseUrl + encodeURIComponent('image baru 2027 (10).png'),
        },
    ];

    // Clean up existing 2027 images if re-running
    const deleted = await prisma.product.deleteMany({
        where: {
            image: { contains: '2027' }
        }
    });
    if (deleted.count > 0) {
        console.log(`Cleaned up ${deleted.count} previously added 2027 products.`);
    }

    // Insert with timestamps ensuring items 1..10 appear in that exact order (1 at top, then 2, ..., then 10)
    // when ordered by createdAt DESC
    const now = Date.now();
    for (let i = 0; i < itemsConfig.length; i++) {
        const item = itemsConfig[i];
        // item 0 (num 1) gets newest time, item 9 (num 10) gets oldest time among new items
        const createdAt = new Date(now - (i * 1000));
        const created = await prisma.product.create({
            data: {
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image,
                categoryId: category.id,
                createdAt: createdAt,
            }
        });
        console.log(`✓ [Pos ${i + 1}] Created ID ${created.id}: ${item.name} (img ${item.num}) - Rp ${item.price.toLocaleString('id-ID')}`);
    }

    console.log('\nAll 10 new products added successfully!');
}

main()
    .catch((e) => {
        console.error('Error seeding products:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
