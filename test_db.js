const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Testing connection...');
    try {
        const count = await prisma.product.count();
        console.log('Connection successful! Product count:', count);
    } catch (e) {
        console.error('Connection failed:', e.code, e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
