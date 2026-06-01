const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const ebooks = await prisma.eBook.findMany({
        include: { category: true }
    });

    console.log('E-Books currently in database:');
    ebooks.forEach(eb => {
        console.log(`- Title: "${eb.title}" | Slug: "${eb.slug}" | Published: ${eb.published} | Category: "${eb.category?.name}"`);
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
