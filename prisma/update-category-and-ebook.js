const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Updating category and E-Book data...');

    // 1. Find the category "Kesehatan Lambung" (slug: 'kesehatan-lambung')
    let category = await prisma.eBookCategory.findFirst({
        where: {
            OR: [
                { slug: 'kesehatan-lambung' },
                { slug: 'hidup-sehat' }
            ]
        }
    });

    if (!category) {
        console.log('Category not found, creating "Hidup Sehat"...');
        category = await prisma.eBookCategory.create({
            data: {
                name: 'Hidup Sehat',
                slug: 'hidup-sehat'
            }
        });
    } else {
        console.log(`Found category: ${category.name}. Updating name & slug to "Hidup Sehat"...`);
        category = await prisma.eBookCategory.update({
            where: { id: category.id },
            data: {
                name: 'Hidup Sehat',
                slug: 'hidup-sehat'
            }
        });
    }

    // 2. Prepare description content
    const description = `[GRATIS] Ebook Panduan Gaya Hidup Sehat Paling Lengkap untuk Remaja Indonesia! 🚀
Mau tahu rahasia jadi remaja yang nggak cuma hits, tapi juga sehat, bahagia, dan produktif sampai dewasa? 🌟
"Aksi Bergizi" bukan sekadar buku teori. Ini adalah panduan praktis dan interaktif yang dirancang khusus oleh para ahli dari Kementerian Kesehatan, Kemendikbud, Kemenag, Kemendagri, dan didukung penuh oleh UNICEF Indonesia.

---

### Kenapa Kamu (atau Anak/Siswa Anda) Wajib Punya Ebook Ini?
* **Membahas 8 Isu Krusial Remaja**: Dari gizi seimbang, kesehatan reproduksi, cegah HIV/AIDS, hingga kesehatan jiwa dan cara bijak pakai internet.
* **Sangat Interaktif & Seru**: Lupakan cara belajar yang membosankan! Ebook ini berisi 36 sesi menarik dengan berbagai permainan, simulasi "Detektif Kantin", hingga tantangan "Goyang Kalori".
* **Bukan Cuma Teori, Tapi Aksi**: Fokus pada pengembangan life skills (keterampilan hidup) seperti cara mengelola stres, membuat keputusan keuangan yang bijak, hingga cara berempati pada sesama.
* **Investasi Masa Depan**: Apa yang kamu makan dan lakukan saat remaja menentukan kualitas kesehatanmu saat dewasa dan kesehatan anak-cucumu nanti. It’s a triple benefit!

---

### Intip Isi Di Dalamnya:
* **🍱 Isi Piringku**: Panduan porsi makan kekinian agar tubuh ideal dan bebas anemia.
* **🧠 Kesehatan Jiwa**: Kuesioner deteksi dini untuk mengenali diri sendiri dan mengelola emosi.
* **📱 Internet Sehat**: Cara membangun citra positif di dunia maya tanpa terjebak hoax.
* **🛑 Cegah Bullying & Kekerasan**: Cara berani bicara dan melindungi diri serta teman.

---

### Siapa yang Harus Baca?
* **Remaja (SMP/SMA/SMK/MA)**: Biar makin keren dengan gaya hidup sehat yang benar.
* **Guru & Fasilitator**: Panduan lengkap cara mengajar gizi dan kesehatan dengan metode kreatif dan partisipatif.
* **Orang Tua**: Bekal informasi akurat untuk mendampingi masa pubertas anak.

---

### 💰 Harga: Rp 0,- (GRATIS!)
Ini adalah aset berharga untuk generasi penerus bangsa. Jangan sampai ketinggalan informasi yang bisa mengubah hidupmu!

👉 **[Klik Link Berikut untuk Download Sekarang](/ebook/Modul Pendidikan Gizi.pdf)**

Hidup Sehat Sejak Sekarang, Untuk Masa Depan yang Lebih Baik! 🇮🇩✨`;

    // 3. We will find E-Book with slug 'buku-panduan-diet-sehat-maag-gerd' (the one originally under Kesehatan Lambung category)
    // or upsert it under Hidup Sehat
    const slug = 'ebook-panduan-gaya-hidup-sehat-remaja-indonesia';
    
    // Check if there is any ebook currently in the Kesehatan Lambung category
    const oldEbooks = await prisma.eBook.findMany({
        where: { categoryId: category.id }
    });

    let targetEbook = oldEbooks.find(eb => eb.slug === slug || eb.slug === 'buku-panduan-diet-sehat-maag-gerd');

    const updateData = {
        title: '[GRATIS] Ebook Panduan Gaya Hidup Sehat Paling Lengkap untuk Remaja Indonesia!',
        slug: slug,
        excerpt: 'Panduan gaya hidup sehat paling lengkap untuk remaja Indonesia. Dirancang oleh Kementerian Kesehatan & UNICEF berisi gizi seimbang, kesehatan reproduksi & jiwa.',
        description,
        price: 0,
        image: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ebook3.png',
        purchaseUrl: '/ebook/Modul Pendidikan Gizi.pdf',
        categoryId: category.id
    };

    let record;
    if (targetEbook) {
        console.log(`Updating existing E-Book: ${targetEbook.title}`);
        record = await prisma.eBook.update({
            where: { id: targetEbook.id },
            data: updateData
        });
    } else {
        console.log('Creating new E-Book under Hidup Sehat category...');
        record = await prisma.eBook.create({
            data: updateData
        });
    }

    console.log(`Successfully updated E-Book data: ${record.title}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
