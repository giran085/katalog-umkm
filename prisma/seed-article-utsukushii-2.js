const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding article: AFC Utsukushii 2.0 Version...');

    const categorySlug = 'produk-afc';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found!`);
        process.exit(1);
    }

    const articleData = {
        title: 'AFC Utsukushii 2.0 Version: Minuman Serbuk Rasa Anggur untuk Kesehatan dari Dalam',
        slug: 'afc-utsukushii-2-0-version-minuman-serbuk-rasa-anggur',
        excerpt: 'AFC Utsukushii 2.0 adalah minuman serbuk rasa anggur yang mengandung probiotik untuk menjaga kesehatan pencernaan dan daya tahan tubuh. Pelajari manfaat, kegunaan, dan cara konsumsinya.',
        content: `
<h2>🍇 Mengenal AFC Utsukushii 2.0 Version</h2>
<p><strong>AFC Utsukushii 2.0 Version</strong> adalah minuman serbuk dengan rasa anggur yang menyegarkan, diproduksi oleh <strong>AFC Japan</strong> dengan teknologi berkualitas tinggi dari Jepang. Produk ini dirancang untuk membantu menjaga kesehatan tubuh dari dalam, terutama pada sistem pencernaan yang berperan vital dalam daya tahan tubuh.</p>
<p>Mengusung konsep "<em>beauty and health from within</em>" (kecantikan dan kesehatan dari dalam), AFC Utsukushii 2.0 menggabungkan probiotik, kolagen, dan berbagai nutrisi penting dalam satu sajian praktis yang enak diminum kapan saja.</p>

<hr class="my-8" />

<h2>✨ Apa yang Membuat AFC Utsukushii 2.0 Beda dari Versi Sebelumnya?</h2>
<p>Versi 2.0 hadir dengan formulasi yang lebih lengkap dan rasa yang lebih nikmat. Berikut peningkatan yang ditawarkan:</p>
<ul>
    <li>🍇 <strong>Rasa anggur premium</strong> yang lebih segar dan lembut di lidah</li>
    <li>🦠 <strong>Kandungan probiotik lebih optimal</strong> untuk kesehatan usus</li>
    <li>💎 <strong>Kolagen berkualitas tinggi</strong> yang lebih mudah diserap tubuh</li>
    <li>🌿 <strong>Ekstrak tumbuhan alami</strong> pilihan dari Jepang</li>
    <li>🧪 <strong>Formulasi ilmiah terbaru</strong> yang didukung riset modern</li>
</ul>

<hr class="my-8" />

<h2>🧬 Kandungan Utama AFC Utsukushii 2.0</h2>
<p>AFC Utsukushii 2.0 diracik dari berbagai bahan berkualitas tinggi yang saling melengkapi untuk memberikan manfaat optimal bagi tubuh:</p>

<h3>1. 🦠 Probiotik</h3>
<p>Probiotik adalah bakteri baik yang menjaga keseimbangan flora usus. Sistem pencernaan yang sehat adalah kunci utama daya tahan tubuh yang kuat.</p>

<h3>2. 💎 Kolagen</h3>
<p>Kolagen adalah protein struktural yang penting untuk menjaga elastisitas kulit, kekuatan sendi, dan kesehatan jaringan tubuh.</p>

<h3>3. 🌿 Ekstrak Plasenta</h3>
<p>Mengandung nutrisi yang mendukung regenerasi sel dan membantu tubuh tetap awet muda.</p>

<h3>4. 💧 Asam Hialuronat</h3>
<p>Berfungsi menjaga kelembapan kulit dan mendukung kesehatan jaringan ikat dalam tubuh.</p>

<h3>5. 🍊 Vitamin C & E</h3>
<p>Antioksidan kuat yang melindungi sel-sel tubuh dari kerusakan akibat radikal bebas.</p>

<h3>6. 🌱 Serat Prebiotik</h3>
<p>Mendukung pertumbuhan bakteri baik di usus, bekerja sinergis dengan probiotik untuk menjaga kesehatan pencernaan.</p>

<hr class="my-8" />

<h2>💪 Manfaat Utama AFC Utsukushii 2.0</h2>
<p>Berikut adalah berbagai manfaat yang bisa Anda rasakan dengan rutin mengonsumsi AFC Utsukushii 2.0:</p>

<h3>1. 🛡️ Melindungi Tubuh dari Gangguan Kesehatan</h3>
<p>Utsukushii mengandung <strong>probiotik</strong> yang membantu melindungi tubuh dari berbagai gangguan kesehatan. Karena sistem pencernaan berperan penting dalam menjaga imunitas tubuh, keseimbangannya dapat membantu menurunkan risiko berkembangnya sel abnormal dalam tubuh.</p>

<h3>2. 🌸 Mendukung Kecantikan dari Dalam</h3>
<p>Kandungan kolagen dan asam hialuronat membantu menjaga:</p>
<ul>
    <li>✨ Kulit tetap kencang dan elastis</li>
    <li>💧 Kelembapan kulit terjaga</li>
    <li>🌟 Mengurangi tanda-tanda penuaan dini</li>
    <li>💄 Warna kulit lebih merata dan bercahaya</li>
</ul>

<h3>3. 🦠 Menjaga Kesehatan Pencernaan</h3>
<p>Probiotik dan prebiotik bekerja sama untuk:</p>
<ul>
    <li>⚖️ Menjaga keseimbangan flora usus</li>
    <li>🍽️ Memperlancar proses pencernaan</li>
    <li>💩 Mengurangi masalah sembelit atau diare</li>
    <li>🧘 Meningkatkan penyerapan nutrisi dari makanan</li>
</ul>

<h3>4. 💪 Meningkatkan Daya Tahan Tubuh</h3>
<p>Sekitar 70% sistem imun tubuh berada di usus. Dengan usus yang sehat, daya tahan tubuh akan meningkat sehingga:</p>
<ul>
    <li>🤧 Tidak mudah terserang flu dan batuk</li>
    <li>⚡ Lebih bertenaga dalam menjalani aktivitas</li>
    <li>🛡️ Tubuh lebih siap melawan infeksi</li>
    <li>🔋 Proses pemulihan saat sakit lebih cepat</li>
</ul>

<h3>5. 💎 Mendukung Regenerasi Sel</h3>
<p>Kandungan nutrisi dalam Utsukushii membantu tubuh memperbaiki sel-sel yang rusak dan mendukung pertumbuhan sel-sel baru yang sehat.</p>

<h3>6. 🦴 Menjaga Kesehatan Sendi dan Tulang</h3>
<p>Kolagen berperan penting dalam menjaga:</p>
<ul>
    <li>🦴 Kekuatan dan kepadatan tulang</li>
    <li>🤸 Kelenturan dan kekuatan sendi</li>
    <li>🏃 Mobilitas tubuh tetap optimal</li>
</ul>

<h3>7. 🧠 Meningkatkan Kualitas Tidur</h3>
<p>Nutrisi yang cukup dan sistem pencernaan yang sehat membantu tubuh lebih rileks, sehingga kualitas tidur pun meningkat.</p>

<h3>8. ⚖️ Membantu Menjaga Berat Badan Ideal</h3>
<p>Pencernaan yang sehat membantu metabolisme tubuh bekerja lebih optimal, mendukung program diet sehat Anda.</p>

<hr class="my-8" />

<h2>🥄 Cara Konsumsi AFC Utsukushii 2.0</h2>
<p>Untuk hasil yang optimal, perhatikan cara konsumsi berikut:</p>

<h3>📋 Aturan Pakai:</h3>
<ul>
    <li>🥄 Larutkan 1 sachet ke dalam ±150-200 ml air dingin atau air suhu ruang</li>
    <li>🕐 Konsumsi 1-2 kali sehari, pagi dan/atau malam hari</li>
    <li>🌙 Waktu terbaik: pagi hari untuk energi, malam hari untuk regenerasi sel</li>
    <li>🍇 Aduk hingga larut sempurna lalu langsung diminum</li>
</ul>

<h3>💡 Tips Konsumsi:</h3>
<ul>
    <li>✅ Bisa dicampur dengan air dingin, air biasa, atau jus buah</li>
    <li>❌ Jangan dicampur dengan air panas (bisa merusak probiotik)</li>
    <li>✅ Lebih nikmat diminum dingin atau dengan es</li>
    <li>✅ Konsumsi secara rutin untuk hasil yang maksimal</li>
</ul>

<hr class="my-8" />

<h2>👨‍👩‍👧‍👦 Siapa Saja yang Cocok Mengonsumsi AFC Utsukushii 2.0?</h2>
<p>AFC Utsukushii 2.0 cocok dikonsumsi oleh berbagai kalangan:</p>
<ul>
    <li>👨‍💼 <strong>Pekerja kantoran</strong> yang sering stres dan kurang tidur</li>
    <li>👩 <strong>Wanita</strong> yang ingin menjaga kecantikan dan kesehatan kulit</li>
    <li>👨‍🦳 <strong>Lansia</strong> yang membutuhkan nutrisi untuk regenerasi sel</li>
    <li>🧑‍🎓 <strong>Mahasiswa/pelajar</strong> dengan aktivitas padat</li>
    <li>🏃 <strong>Olahragawan</strong> yang membutuhkan pemulihan tubuh optimal</li>
    <li>🍔 <strong>Siapa saja</strong> yang memiliki pola makan kurang sehat</li>
    <li>🛌 <strong>Orang dengan gangguan pencernaan</strong> (sering kembung, sembelit, dll)</li>
</ul>

<hr class="my-8" />

<h2>⚠️ Disclaimer & Catatan Penting</h2>
<div class="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
    <p class="text-amber-900 font-medium mb-2">📌 Penting untuk Diperhatikan:</p>
    <ul class="text-amber-800">
        <li>⚠️ <strong>Produk ini bukan obat</strong> dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan, atau mencegah penyakit tertentu.</li>
        <li>⚠️ <strong>Hasil setiap individu dapat berbeda</strong>, tergantung pada kondisi tubuh, gaya hidup, dan konsistensi konsumsi.</li>
        <li>⚠️ Jika Anda memiliki kondisi kesehatan tertentu atau sedang dalam pengobatan dokter, konsultasikan terlebih dahulu sebelum mengonsumsi.</li>
        <li>⚠️ Bukan pengganti makanan pokok. Tetap jalankan pola makan sehat dan gaya hidup aktif.</li>
        <li>⚠️ Ibu hamil dan menyusui disarankan untuk berkonsultasi dengan dokter terlebih dahulu.</li>
    </ul>
</div>

<hr class="my-8" />

<h2>🎯 Kesimpulan</h2>
<p><strong>AFC Utsukushii 2.0 Version</strong> adalah minuman serbuk rasa anggur yang diformulasikan khusus untuk menjaga kesehatan dari dalam. Dengan kandungan probiotik, kolagen, dan nutrisi premium dari Jepang, Utsukushii 2.0 menjadi solusi praktis untuk:</p>
<ul>
    <li>🦠 Menjaga kesehatan pencernaan</li>
    <li>💪 Meningkatkan daya tahan tubuh</li>
    <li>🌸 Mendukung kecantikan alami</li>
    <li>💎 Membantu regenerasi sel</li>
    <li>⚖️ Menjaga metabolisme tubuh</li>
</ul>
<p>Dengan rasa anggur yang menyegarkan dan cara konsumsi yang mudah, AFC Utsukushii 2.0 cocok menjadi bagian dari rutinitas harian Anda. Mulailah dari sekarang, investasi kesehatan terbaik adalah yang dilakukan sejak dini.</p>

<div class="mt-12 p-8 border border-purple-100 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 text-center shadow-md relative overflow-hidden">
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>

    <div class="relative z-10">
        <div class="flex justify-center mb-3">
            <span class="text-4xl">🍇</span>
        </div>
        <h3 class="text-2xl font-bold text-purple-900 mb-2 mt-0">Dapatkan AFC Utsukushii 2.0 Sekarang!</h3>
        <p class="text-purple-800 mb-6 max-w-xl mx-auto leading-relaxed text-base font-medium">Kesehatan dan kecantikan dari dalam dengan rasa anggur premium. Stok terbatas, dapatkan harga spesial untuk pembelian pertama. Konsultasi gratis via WhatsApp!</p>
        <a href="https://wa.me/6282240489010?text=Halo%2C%20saya%20tertarik%20dengan%20AFC%20Utsukushii%202.0%20Version.%20Bisa%20info%20harga%20dan%20cara%20pemesanannya%3F"
           target="_blank"
           rel="noopener noreferrer"
           style="background-color: #9333ea !important; color: #ffffff !important; text-decoration: none !important; border: none !important; display: inline-flex !important; align-items: center !important;"
           class="inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.03] no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px; color: #ffffff !important; margin-right: 8px;">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c.002 0 0 0 0 0h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span style="color: #ffffff !important; font-weight: 800 !important;">Pesan via WhatsApp</span>
        </a>
        <p class="mt-6 text-sm text-purple-700/80 italic">
            📞 Kontak langsung: <a href="https://wa.me/6282240489010" class="text-purple-700 font-semibold not-italic hover:underline">+62 822-4048-9010</a><br/>
            🛒 <a href="/product" class="text-purple-700 font-semibold not-italic hover:underline">Lihat Semua Produk AFC</a><br/>
            <span class="font-semibold text-purple-900 not-italic">Distributor Resmi AFC Japan Store ID</span>
        </p>
    </div>
</div>
        `.trim(),
        featuredImage: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ut1%20(2).jpeg',
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: 'AFC Utsukushii 2.0 - Minuman Serbuk Rasa Anggur | AFC Japan',
        metaDescription: 'AFC Utsukushii 2.0 Version minuman serbuk rasa anggur dengan probiotik, kolagen & nutrisi Jepang. Lindungi tubuh dari gangguan kesehatan, jaga kecantikan dari dalam.',
        keywords: ['AFC Utsukushii', 'Utsukushii 2.0', 'minuman serbuk', 'rasa anggur', 'probiotik', 'kolagen', 'kesehatan pencernaan', 'kecantikan', 'produk AFC', 'suplemen Jepang'],
        categoryId: category.id,
    };

    const article = await prisma.article.upsert({
        where: { slug: articleData.slug },
        update: {
            title: articleData.title,
            excerpt: articleData.excerpt,
            content: articleData.content,
            featuredImage: articleData.featuredImage,
            metaTitle: articleData.metaTitle,
            metaDescription: articleData.metaDescription,
            keywords: articleData.keywords,
            published: true,
            publishedAt: new Date(),
        },
        create: articleData,
    });

    console.log('Successfully created/updated article:', article.title);
    console.log('Slug:', article.slug);
    console.log('Category:', category.name);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
