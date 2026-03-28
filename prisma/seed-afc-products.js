require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

async function main() {
    console.log('Seeding AFC Products...\n');

    // Delete existing products
    await prisma.product.deleteMany({});

    // Delete all categories and create fresh one
    await prisma.category.deleteMany({});

    // Create AFC category
    const afcCategory = await prisma.category.create({
        data: { name: 'AFC Japan' },
    });

    console.log(`Category created: ${afcCategory.name} (ID: ${afcCategory.id})\n`);

    // Create 8 AFC Products
    const products = [
        {
            name: 'all produk AFC',
            description: `✨ AFC JAPAN – Premium Health Innovation for Every Generation
Temukan rahasia kesehatan, kecantikan, dan vitalitas yang menyeluruh dengan AFC Japan, pionir suplemen premium berbasis sains yang telah dipercaya di Jepang dan kini hadir untuk Anda. Melalui tiga produk unggulan — Hikari, SOP Subarashi Gold, dan Utsukushhii Gold — AFC menghadirkan solusi nutrisi lengkap yang mendukung tubuh Anda dari dalam ke luar.

💡 HIKARI – Nutrisi Cerdas untuk Otak & Mata
Dirancang untuk membantu daya fokus, memori, dan fungsi saraf, Hikari diperkaya Vegan Power Triple Peptide (Marigold, Spearmint, dan Mango Leaf) serta ekstrak buah berry. Formula ini mendukung regenerasi sel otak, melindungi mata dari sinar biru, dan meningkatkan konsentrasi.

💪 SOP SUBARASHI GOLD – Regenerasi Sel dan Energi Hidup
Dibuat dengan bioteknologi Jepang menggunakan Marine Placenta (Salmon Ovary Peptide) serta peptida alami dari ikan laut dalam, Subarashi Gold bekerja menstimulasi regenerasi sel, memperlancar sirkulasi darah, dan menjaga tekanan darah tetap ideal.

🌸 UTSUKUSHHII GOLD – Kecantikan dari Dalam, Kesehatan Menyeluruh
Kombinasi Salmon Milt DNA, probiotik premium, dan antioksidan alami menjadikan Utsukushhii Gold pendukung utama untuk kulit, pencernaan, dan imunitas.

🌿 AFC Japan — menghadirkan nutrisi ilmiah berkualitas tinggi, bersertifikat BPOM dan HALAL.`,
            price: 5550000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/afcproduk%20(3).webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'all produk AFC',
            description: `✨ AFC JAPAN – Premium Health Innovation for Every Generation
Temukan rahasia kesehatan, kecantikan, dan vitalitas yang menyeluruh dengan AFC Japan, pionir suplemen premium berbasis sains yang telah dipercaya di Jepang dan kini hadir untuk Anda. Melalui tiga produk unggulan — Hikari, SOP Subarashi Gold, dan Utsukushhii Gold — AFC menghadirkan solusi nutrisi lengkap yang mendukung tubuh Anda dari dalam ke luar.

💡 HIKARI – Nutrisi Cerdas untuk Otak & Mata
Dirancang untuk membantu daya fokus, memori, dan fungsi saraf, Hikari diperkaya Vegan Power Triple Peptide (Marigold, Spearmint, dan Mango Leaf) serta ekstrak buah berry.

💪 SOP SUBARASHI GOLD – Regenerasi Sel dan Energi Hidup
Dibuat dengan bioteknologi Jepang menggunakan Marine Placenta (Salmon Ovary Peptide) serta peptida alami dari ikan laut dalam.

🌸 UTSUKUSHHII GOLD – Kecantikan dari Dalam, Kesehatan Menyeluruh
Kombinasi Salmon Milt DNA, probiotik premium, dan antioksidan alami menjadikan Utsukushhii Gold pendukung utama untuk kulit, pencernaan, dan imunitas.

🌿 AFC Japan — menghadirkan nutrisi ilmiah berkualitas tinggi, bersertifikat BPOM dan HALAL.`,
            price: 5550000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/produk4.webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'hikari',
            description: `HIKARI AFC adalah suplemen kesehatan premium yang diproduksi oleh AFC Jepang. Produk ini dirancang untuk mendukung kesehatan otak, mata, dan sistem saraf secara umum untuk semua usia, mulai dari anak-anak hingga lansia.

🔎 Hikari terdiri dari kombinasi bahan alami yang disebut Vegan Power Triple Peptide, yaitu:
• Marigold Peptide
• Spearmint Peptide
• Mango Leaf Peptide
Formula ini diperkaya juga dengan ekstrak buah berry dan nutrisi lain untuk penyerapan optimal di tubuh.

🧠 Manfaat yang Dilaporkan:
✨ Untuk Otak & Sistem Saraf
• Meningkatkan memori, fokus, dan fungsi kognitif
• Mendukung regenerasi sel otak (neurogenesis)
• Meningkatkan kemampuan berpikir dan konsentrasi

👁️ Untuk Kesehatan Mata
• Melindungi mata dari kerusakan akibat paparan sinar biru (blue light)
• Menjaga kesehatan visual dan mengurangi stres oksidatif pada mata

🧒 Untuk Anak & Penderita Khusus
• Banyak dipromosikan untuk membantu kondisi seperti ADHD, Autisme, Speech Delay, dan gangguan sensorik
• Cocok untuk orang dewasa dan lansia dengan masalah memori

📜 Paten & Sertifikasi
Produk Hikari memiliki paten internasional terkait perlindungan mata dari sinar biru dan peningkatan fungsi otak. Tersedia di BPOM RI dan bersertifikat HALAL.`,
            price: 1800000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/contoh%20gambar%20hikari%20dua.webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'hikari',
            description: `HIKARI AFC adalah suplemen kesehatan premium yang diproduksi oleh AFC Jepang. Produk ini dirancang untuk mendukung kesehatan otak, mata, dan sistem saraf secara umum untuk semua usia.

🔎 Hikari terdiri dari kombinasi bahan alami yang disebut Vegan Power Triple Peptide:
• Marigold Peptide
• Spearmint Peptide
• Mango Leaf Peptide
Formula ini diperkaya juga dengan ekstrak buah berry untuk penyerapan optimal.

🧠 Manfaat Utama:
✨ Meningkatkan memori, fokus, dan fungsi kognitif
✨ Mendukung regenerasi sel otak (neurogenesis)
✨ Melindungi mata dari sinar biru
✨ Cocok untuk anak-anak, orang dewasa, dan lansia

📜 Tersedia di BPOM RI dan bersertifikat HALAL.`,
            price: 1800000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/produk3.webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'sop subarashi',
            description: `Subarashi Gold adalah suplemen kesehatan premium dari AFC (Asayama Family Club) yang dibuat di Jepang dengan bioteknologi mutakhir. Produk ini tersedia dalam bentuk serbuk minuman dalam sachet.

🧬 Komposisi Utama:
• Marine Placenta (Salmon Ovary Peptide)
• Sardines Peptide
• Fruit Flow (Vegan Peptide)
• Salmon Caviar Peptide
• Salmon Anserine Peptide
• Tuna Heart Peptide
• Nucleic Acid, Fish Collagen, L-Glutathione, Hyaluronic Acid

💪 Manfaat yang Diklaim:
✅ Mengaktifkan dan meregenerasi sel tubuh
✅ Meningkatkan sirkulasi darah & membantu tekanan darah
✅ Anti-penuaan
✅ Perbaikan fungsi organ seperti jantung, ginjal, hati
✅ Menurunkan asam urat
✅ Mencegah pembekuan darah & hipertensi

🌿 AFC Japan — bersertifikat BPOM dan HALAL.`,
            price: 1950000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/contoh%20gambar%20subarashi.webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'sop subarashi',
            description: `Subarashi Gold adalah suplemen kesehatan premium dari AFC Japan yang dibuat di Jepang menggunakan Marine Placenta dan peptida dari ikan laut dalam.

🧬 Kandungan Utama:
• Marine Placenta (Salmon Ovary Peptide)
• Sardines Peptide
• Salmon Caviar Peptide
• Tuna Heart Peptide
• L-Glutathione, Fish Collagen, Hyaluronic Acid

💪 Manfaat:
✅ Regenerasi sel tubuh
✅ Meningkatkan sirkulasi darah
✅ Menjaga tekanan darah ideal
✅ Anti-aging & vitalitas
✅ Mendukung jantung, ginjal, dan hati

🌿 AFC Japan — bersertifikat BPOM dan HALAL.`,
            price: 1950000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/produk1.webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'utsukushhii',
            description: `Utsukushhii Gold adalah suplemen nutrisi premium dari AFC Life Science — versi upgrade dari seri Utsukushhii, dibuat di Jepang dalam bentuk sachet serbuk harian.

🧬 Kandungan Utama:
🔹 Salmon Milt DNA — dari ikan Oncorhynchus keta (salmon) Hokkaido, Jepang, untuk regenerasi sel kulit
🔹 Triple Probiotik — Lactococcus lactis, Lactic Acid Bacteria, Bifidobacterium longum
🔹 Fucoidan, Resveratrol, Vitamin D
🔹 Kiwi Seed Extract, Black Garlic, Fish Collagen, L-Glutathione

✨ Manfaat yang Diklaim:
✅ Detoksifikasi tubuh dan usus
✅ Kesehatan pencernaan dan mikrobiota usus
✅ Menjaga kekebalan tubuh
✅ Meningkatkan kesehatan kulit (elastisitas, kelembapan, anti-aging)
✅ Antioksidan tambahan

🌿 AFC Japan — bersertifikat BPOM dan HALAL.`,
            price: 1800000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/contoh%20gambar%20utsukushhii.webp',
            categoryId: afcCategory.id,
        },
        {
            name: 'utsukushhii',
            description: `Utsukushhii Gold adalah suplemen nutrisi dari AFC Life Science Jepang yang dikembangkan untuk kecantikan dari dalam dan kesehatan menyeluruh.

🧬 Kandungan Utama:
• Salmon Milt DNA dari Hokkaido, Jepang
• Triple Probiotik (Lactococcus lactis, Lactic Acid Bacteria, Bifidobacterium longum)
• Fucoidan, Resveratrol, Vitamin D
• Kiwi Seed Extract, Black Garlic, Fish Collagen

✨ Manfaat:
✅ Detoksifikasi tubuh dan usus
✅ Kesehatan pencernaan
✅ Menjaga kekebalan tubuh
✅ Kesehatan kulit (anti-aging, elastisitas, kelembapan)
✅ Antioksidan tambahan

🌿 AFC Japan — bersertifikat BPOM dan HALAL.`,
            price: 1800000,
            image: 'https://arupayypse.supabase.co/storage/v1/object/public/AFC/produk2.webp',
            categoryId: afcCategory.id,
        },
    ];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        await prisma.product.create({ data: product });
        console.log(`✓ Created: ${product.name} - Rp ${product.price.toLocaleString('id-ID')}`);
    }

    console.log('\n=================================');
    console.log('AFC Products seeded successfully!');
    console.log(`Total products: ${products.length}`);
    console.log('=================================');
}

main()
    .catch((e) => {
        console.error('Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
