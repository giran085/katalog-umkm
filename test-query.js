const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
    try {
        console.log('Testing query eBookCategory...');
        const cats = await prisma.eBookCategory.findMany();
        console.log('Categories count:', cats.length);

        console.log('Testing query eBook...');
        const ebooks = await prisma.eBook.findMany({
            include: { category: true }
        });
        console.log('EBooks count:', ebooks.length);
        console.log('First eBook:', ebooks[0]);
    } catch (e) {
        console.error('Error querying:', e);
    } finally {
        await prisma.$disconnect();
    }
}

test();
