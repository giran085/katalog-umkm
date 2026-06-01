const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Updating E-Book excerpt...');

    const slug = 'seni-berdamai-dengan-kecemasan-berlebih-anxiety';
    const excerpt = 'Temukan panduan praktis membebaskan diri dari belenggu overthinking, meredakan kecemasan, dan mengelola serangan panik melalui 12 bab reflektif, lembar aksi harian 5-10 menit, serta Challenge 7 Hari untuk meraih ketenangan pikiran.';

    const record = await prisma.eBook.update({
        where: { slug },
        data: {
            excerpt
        }
    });

    console.log(`Successfully updated E-Book excerpt: ${record.title}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
