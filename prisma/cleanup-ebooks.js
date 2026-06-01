const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Cleaning up old redundant E-Books...');

    // Delete the redundant old slugs if they exist
    const oldSlugs = ['buku-panduan-diet-sehat-maag-gerd', 'buku-resep-makanan-sehat-penderita-gerd'];
    
    const deleteResult = await prisma.eBook.deleteMany({
        where: {
            slug: {
                in: oldSlugs
            }
        }
    });

    console.log(`Deleted ${deleteResult.count} redundant E-Book records.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
