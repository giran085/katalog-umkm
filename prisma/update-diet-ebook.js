const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Updating Pola Makan & Diet E-Book...');

    // Find the category "Pola Makan & Diet" first to ensure correct category binding
    const category = await prisma.eBookCategory.findUnique({
        where: { slug: 'pola-makan-diet' }
    });

    if (!category) {
        console.error('Category "Pola Makan & Diet" not found!');
        return;
    }

    const description = `Ingin Hidup Sehat tapi Bingung Mulai dari Mana? 🍎
Ebook ini adalah panduan lengkap dan praktis untuk membantu Anda mencapai kesehatan optimal melalui nutrisi yang tepat. Disusun oleh para ahli gizi dan profesional kesehatan, buku ini mengupas tuntas rahasia pola makan yang berkelanjutan, bukan sekadar diet sementara.

---

### Apa yang akan Anda dapatkan?
* **Pahami Kebutuhan Tubuh**: Penjelasan mendalam tentang protein, karbohidrat, lemak, serta vitamin dan mineral yang dibutuhkan tubuh Anda.
* **Rencana Makan Praktis**: Cara menyusun menu harian yang seimbang dan ekonomis, termasuk panduan visual "Isi Piringku".
* **Solusi Tantangan Nyata**: Strategi jitu mengatasi hambatan gaya hidup sibuk dan mitos-mitos nutrisi yang menyesatkan.
* **Langkah Awal yang Mudah**: Tips sederhana untuk mulai mengubah kebiasaan makan Anda menjadi lebih sehat hari ini juga.

---

### Download Gratis 📥
Jangan lewatkan kesempatan untuk meningkatkan kualitas hidup Anda. Ebook berharga ini bisa Anda download secara gratis!

Mulailah investasi terbaik untuk masa depan Anda—kesehatan Anda!`;

    // We can update the existing record with slug 'buku-resep-makanan-sehat-penderita-gerd'
    // or upsert it if not present
    const record = await prisma.eBook.upsert({
        where: { slug: 'buku-resep-makanan-sehat-penderita-gerd' },
        update: {
            title: 'Pola Makan Sehat Panduan Nutrisi',
            slug: 'pola-makan-sehat-panduan-nutrisi',
            excerpt: 'Ingin Hidup Sehat tapi Bingung Mulai dari Mana? Ebook ini adalah panduan lengkap dan praktis untuk mencapai kesehatan optimal melalui nutrisi yang tepat.',
            description,
            price: 0,
            image: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ebook2.png',
            purchaseUrl: '/ebook/Pola Makan Sehat Panduan Nutrisi.pdf',
            categoryId: category.id
        },
        create: {
            title: 'Pola Makan Sehat Panduan Nutrisi',
            slug: 'pola-makan-sehat-panduan-nutrisi',
            excerpt: 'Ingin Hidup Sehat tapi Bingung Mulai dari Mana? Ebook ini adalah panduan lengkap dan praktis untuk mencapai kesehatan optimal melalui nutrisi yang tepat.',
            description,
            price: 0,
            image: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ebook2.png',
            purchaseUrl: '/ebook/Pola Makan Sehat Panduan Nutrisi.pdf',
            categoryId: category.id
        }
    });

    console.log(`Successfully updated Pola Makan & Diet E-Book: ${record.title}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
