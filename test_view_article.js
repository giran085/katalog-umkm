const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Querying article "manfaat-telur-rebus-untuk-kesehatan"...');
    const article = await prisma.article.findUnique({
        where: { slug: 'manfaat-telur-rebus-untuk-kesehatan' },
    });

    if (article) {
        console.log('Found! Content:');
        console.log(article.content);
    } else {
        console.log('Not found! Let us print all slugs:');
        const allArticles = await prisma.article.findMany({
            select: { slug: true, title: true }
        });
        allArticles.forEach(a => console.log(`- ${a.slug}: ${a.title}`));
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
