const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateFeaturedImages() {
    console.log('Updating featured images...');

    const updates = [
        {
            slug: 'afc-japan-store-distributor-resmi-vitamin-afc-indonesia',
            image: 'https://images.unsplash.com/photo-1556741533-f6acd64e2c00?w=1200&h=630&fit=crop'
        },
        {
            slug: 'manfaat-vitamin-c-untuk-kesehatan-tubuh',
            image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=1200&h=630&fit=crop'
        },
        {
            slug: 'makanan-sehat-meningkatkan-daya-tahan-tubuh',
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=630&fit=crop'
        },
        {
            slug: 'buah-buahan-kaya-antioksidan',
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=630&fit=crop'
        },
        {
            slug: 'sayuran-hijau-sumber-vitamin-mineral',
            image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=630&fit=crop'
        },
        {
            slug: 'olahraga-dan-suplemen-kombinasi-sempurna',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop'
        }
    ];

    for (const update of updates) {
        try {
            await prisma.article.update({
                where: { slug: update.slug },
                data: { featuredImage: update.image }
            });
            console.log(`✓ Updated: ${update.slug}`);
        } catch (error) {
            console.log(`✗ Failed: ${update.slug} - ${error.message}`);
        }
    }

    console.log('\nFeatured images updated successfully!');
}

updateFeaturedImages()
    .catch((e) => {
        console.error('Error updating images:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
