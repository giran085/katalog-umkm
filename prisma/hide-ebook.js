const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Hiding E-Book "Panduan Sukses Bebas Asam Lambung & GERD"...');

    const slug = 'panduan-sukses-bebas-asam-lambung-gerd';
    const record = await prisma.eBook.update({
        where: { slug },
        data: {
            published: false
        }
    });

    console.log(`Successfully hid E-Book: ${record.title} (Published set to false)`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
