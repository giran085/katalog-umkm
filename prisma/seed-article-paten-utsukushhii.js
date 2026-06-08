const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding article: Paten UTSUKUSHHII - Nutrisi Kecantikan Premium Jepang...');

    const categorySlug = 'produk-afc';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found!`);
        process.exit(1);
    }

    const articleData = {
        title: 'Paten UTSUKUSHHII: Nutrisi Kecantikan Premium Jepang dengan 8 Hak Paten Internasional',
        slug: 'paten-utsukushhii-nutrisi-kecantikan-premium-jepang',
        excerpt: 'Utsukushhii dari AFC Japan didukung 8 hak paten internasional untuk anti-tumor, aktivasi imun, antioksidan, dan kecantikan. Pelajari keunggulan nutrisi premium Made in Japan ini.',
        content: `
<h2>🌸 Utsukushhii: Kecantikan yang Bersinar dari Dalam</h2>
<p><em>"美しさのために、内側から輝く。"</em></p>
<p><strong>Untuk kecantikan yang bersinar dari dalam.</strong></p>
<p>Itu adalah filosofi yang diusung oleh <strong>Utsukushhii</strong> dari AFC Japan. Lebih dari sekadar minuman kecantikan biasa, Utsukushhii adalah nutrisi premium asal Jepang yang telah terdaftar dalam <strong>8 hak paten internasional</strong>, menjadikannya salah satu produk kesehatan paling terpercaya di dunia.</p>

<p>Dengan formulasi ilmiah yang telah dipatenkan, Utsukushhii bukan hanya memberikan kecantikan dari luar, tetapi juga mendukung kesehatan tubuh secara menyeluruh — mulai dari sistem imun, antioksidan, hingga perlindungan dari radikal bebas.</p>

<hr class="my-8" />

<h2>🏆 8 Hak Paten Internasional Utsukushhii</h2>
<p>Salah satu hal yang membuat Utsukushhii istimewa adalah dukungan ilmiahnya. Berikut adalah <strong>8 hak paten</strong> yang telah terdaftar secara resmi:</p>

<div class="my-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
    <h3 class="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
        <span>🧬</span> Daftar Hak Paten Resmi
    </h3>
</div>

<h3>1. 🛡️ Anti-Tumor Agent</h3>
<p><strong>Nomor Paten: JP-3040711B2</strong></p>
<p>Paten untuk agen anti-tumor yang membantu tubuh melawan pertumbuhan sel abnormal. Kandungan aktif dalam Utsukushhii telah diteliti mampu mendukung mekanisme perlindungan alami tubuh.</p>

<h3>2. 💪 Aktivasi Sistem Imun</h3>
<p><strong>Nomor Paten: JP-3272023B2</strong></p>
<p>Paten untuk formulasi yang membantu mengaktifkan dan memperkuat sistem imun tubuh. Dengan sistem imun yang kuat, tubuh lebih siap melawan berbagai penyakit dan infeksi.</p>

<h3>3. 🟡 Terapi Hepatitis C</h3>
<p><strong>Nomor Paten: JP-2712000</strong></p>
<p>Paten untuk dukungan terapi hepatitis C. Kandungan dalam Utsukushhii telah diteliti memiliki potensi dalam mendukung pengobatan hepatitis dan menjaga kesehatan hati.</p>

<h3>4. 🦠 Perlindungan Infeksi</h3>
<p><strong>Nomor Paten: JP-2969017B2</strong></p>
<p>Paten untuk formulasi yang melindungi tubuh dari berbagai jenis infeksi. Utsukushhii bekerja sebagai pendukung sistem pertahanan alami tubuh.</p>

<h3>5. 🎯 Menekan Tumor & Efek Obat Kanker</h3>
<p><strong>Nomor Paten: JP-5635690B2</strong></p>
<p>Paten untuk efek penekanan tumor dan sinergi dengan obat kanker. Penelitian menunjukkan kandungan Utsukushhii memiliki potensi sebagai pendamping terapi kanker.</p>

<h3>6. 🦠 Mencegah/Mengatasi Infeksi SARS</h3>
<p><strong>Nomor Paten: US-7048953B2</strong></p>
<p>Paten yang terdaftar di Amerika Serikat untuk pencegahan dan penanganan infeksi SARS. Ini menunjukkan bahwa formulasi Utsukushhii telah mendapat pengakuan internasional.</p>

<h3>7. 🍊 Antioksidan / Perlindungan dari Toksisitas Oksigen</h3>
<p><strong>Nomor Paten: JP-5697788B1</strong></p>
<p>Paten untuk antioksidan kuat yang melindungi sel-sel tubuh dari kerusakan akibat toksisitas oksigen (radikal bebas). Antioksidan membantu menjaga keremajaan dan kesehatan sel.</p>

<h3>8. 🧹 Mengurangi Kadar Racun dalam Tubuh</h3>
<p><strong>Nomor Paten: JP-3040699B2</strong></p>
<p>Paten untuk formulasi detoksifikasi yang membantu mengurangi kadar racun dalam tubuh. Mendukung proses pembersihan alami tubuh dari zat-zat berbahaya.</p>

<hr class="my-8" />

<h2>💎 Nutrisi Kecantikan Premium Asal Jepang</h2>
<p>Utsukushhii adalah <strong>rangkaian nutrisi lengkap</strong> untuk mendukung kecantikan kulit, rambut, kuku, dan tubuh. Setiap sachet diformulasikan dengan bahan-bahan berkualitas tinggi pilihan dari Jepang.</p>

<div class="my-6 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
    <h3 class="text-xl font-bold text-rose-900 mb-4 flex items-center gap-2">
        <span>✨</span> Kandungan Utama Utsukushhii
    </h3>
</div>

<h3>1. 🧪 Kolagen Peptida Berkualitas</h3>
<p>Kolagen peptida dengan kualitas terbaik yang mudah diserap tubuh. Membantu menjaga kekenyalan dan elastisitas kulit dari dalam. Cocok untuk Anda yang ingin kulit tetap kencang dan awet muda.</p>

<h3>2. 💧 Melembapkan & Mencerahkan Kulit</h3>
<p>Kandungan asam hialuronat dan vitamin C bekerja sinergis untuk:</p>
<ul>
    <li>💧 Menjaga kelembapan alami kulit</li>
    <li>🌟 Mencerahkan warna kulit</li>
    <li>✨ Mengurangi noda hitam dan bekas jerawat</li>
    <li>🌸 Membuat kulit tampak lebih glowing</li>
</ul>

<h3>3. 💇 Menjaga Kesehatan Rambut</h3>
<p>Nutrisi penting untuk rambut:</p>
<ul>
    <li>🌿 Mencegah kerontokan</li>
    <li>💪 Memperkuat akar rambut</li>
    <li>✨ Membuat rambut lebih berkilau</li>
    <li>🛡️ Melindungi dari kerusakan akibat polusi dan styling</li>
</ul>

<h3>4. 💅 Memperkuat Kuku & Elastisitas Kulit</h3>
<p>Kandungan biotin dan mineral penting mendukung:</p>
<ul>
    <li>💅 Kuku lebih kuat dan tidak mudah patah</li>
    <li>✨ Elastisitas kulit terjaga</li>
    <li>🌟 Mengurangi kuku kering dan rapuh</li>
    <li>💎 Kulit terasa lebih halus dan lembut</li>
</ul>

<hr class="my-8" />

<h2>🍇 Spesifikasi Produk Utsukushhii</h2>
<div class="my-6 p-6 bg-white border-2 border-purple-200 rounded-2xl shadow-sm">
    <h3 class="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
        <span>📦</span> Detail Produk
    </h3>
    <ul class="space-y-2 text-gray-700">
        <li>📌 <strong>Nama Produk:</strong> UTSUKUSHHII</li>
        <li>🍇 <strong>Jenis:</strong> Minuman Serbuk Rasa Anggur</li>
        <li>⚖️ <strong>Berat Bersih:</strong> 70 g (28 sachet @ 2.5 g)</li>
        <li>📋 <strong>Nomor BPOM RI:</strong> ML 271302000302</li>
        <li>📅 <strong>Baik Digunakan Sebelum:</strong> Lihat kemasan</li>
        <li>🇯🇵 <strong>Asal:</strong> Made in Japan</li>
    </ul>
</div>

<hr class="my-8" />

<h2>💪 Solusi & Manfaat Utsukushhii untuk Anda</h2>
<p>Dengan 8 hak paten internasional dan formulasi premium Jepang, Utsukushhii memberikan solusi menyeluruh:</p>

<h3>1. 🌸 Solusi Kecantikan Alami</h3>
<p>Untuk Anda yang ingin tampil glowing setiap hari, Utsukushhii adalah solusi nutrisi kecantikan dari dalam yang aman dan sudah teruji secara ilmiah.</p>

<h3>2. 🛡️ Solusi Daya Tahan Tubuh</h3>
<p>Dengan paten aktivasi sistem imun, Utsukushhii membantu tubuh tetap fit dan tidak mudah sakit, terutama di tengah polusi dan gaya hidup modern.</p>

<h3>3. 🧬 Solusi Anti-Penuaan</h3>
<p>Antioksidan paten dan kolagen peptida membantu melawan tanda-tanda penuaan, menjaga kulit tetap kencang dan awet muda.</p>

<h3>4. 🧹 Solusi Detoksifikasi</h3>
<p>Dengan paten pengurangan racun, Utsukushhii mendukung proses detoksifikasi alami tubuh untuk menjaga kesehatan optimal.</p>

<h3>5. ⚖️ Solusi Kesehatan Pencernaan</h3>
<p>Kandungan probiotik dalam Utsukushhii membantu menjaga keseimbangan flora usus, yang merupakan fondasi penting bagi kesehatan tubuh secara keseluruhan.</p>

<hr class="my-8" />

<h2>🥄 Cara Konsumsi Utsukushhii</h2>
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

<h2>👨‍👩‍👧‍👦 Siapa Saja yang Cocok Mengonsumsi Utsukushhii?</h2>
<ul>
    <li>👩 <strong>Wanita</strong> yang ingin tampil glowing dan awet muda</li>
    <li>👨‍💼 <strong>Pekerja kantoran</strong> dengan polusi tinggi dan kurang tidur</li>
    <li>👨‍🦳 <strong>Lansia</strong> yang membutuhkan nutrisi untuk regenerasi sel</li>
    <li>🧑‍🎓 <strong>Mahasiswa/pelajar</strong> dengan aktivitas padat</li>
    <li>🏃 <strong>Olahragawan</strong> yang membutuhkan pemulihan tubuh optimal</li>
    <li>🛌 <strong>Siapa saja</strong> yang peduli dengan kesehatan dari dalam</li>
    <li>🌸 <strong>Anda yang ingin kulit glowing alami</strong> tanpa banyak bahan kimia</li>
</ul>

<hr class="my-8" />

<h2>⚠️ Catatan Penting</h2>
<div class="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
    <p class="text-amber-900 font-medium mb-2">📌 Informasi Penting:</p>
    <ul class="text-amber-800">
        <li>⚠️ <strong>Produk ini bukan obat</strong> dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan, atau mencegah penyakit tertentu.</li>
        <li>⚠️ <strong>Hasil setiap individu dapat berbeda</strong>, tergantung pada kondisi tubuh, gaya hidup, dan konsistensi konsumsi.</li>
        <li>⚠️ Jika Anda memiliki kondisi kesehatan tertentu atau sedang dalam pengobatan dokter, konsultasikan terlebih dahulu sebelum mengonsumsi.</li>
        <li>⚠️ Bukan pengganti makanan pokok. Tetap jalankan pola makan sehat dan gaya hidup aktif.</li>
        <li>⚠️ Perhatikan tanggal kedaluwarsa pada kemasan sebelum dikonsumsi.</li>
    </ul>
</div>

<hr class="my-8" />

<h2>🎯 Kesimpulan</h2>
<p><strong>Utsukushhii</strong> bukan sekadar minuman kecantikan biasa. Dengan <strong>8 hak paten internasional</strong> yang mencakup anti-tumor, aktivasi imun, antioksidan, dan detoksifikasi, Utsukushhii adalah nutrisi premium Jepang yang telah teruji secara ilmiah.</p>
<p>Untuk Anda yang ingin tampil glowing setiap hari sekaligus menjaga kesehatan tubuh dari dalam, Utsukushhii adalah pilihan tepat. Kombinasi kolagen peptida berkualitas, antioksidan, probiotik, dan nutrisi premium Jepang memberikan solusi menyeluruh untuk:</p>
<ul>
    <li>🌸 Kecantikan alami yang bersinar dari dalam</li>
    <li>💪 Daya tahan tubuh yang lebih kuat</li>
    <li>🧬 Regenerasi sel yang optimal</li>
    <li>🛡️ Perlindungan dari radikal bebas</li>
    <li>💎 Kulit, rambut, dan kuku yang lebih sehat</li>
</ul>
<p><strong>Made in Japan, Aman Dikonsumsi, Kecantikan dari Dalam.</strong> Mulai investasi terbaik untuk diri Anda dari sekarang!</p>

<div class="mt-12 p-8 border border-purple-100 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 text-center shadow-md relative overflow-hidden">
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>

    <div class="relative z-10">
        <div class="flex justify-center mb-3">
            <span class="text-4xl">🌸</span>
        </div>
        <h3 class="text-2xl font-bold text-purple-900 mb-2 mt-0">Dapatkan Utsukushhii dari Distributor Resmi!</h3>
        <p class="text-purple-800 mb-6 max-w-xl mx-auto leading-relaxed text-base font-medium">Untuk solusi kecantikan buat kamu yang pengen tampil glowing setiap hari. Produk original Made in Japan dengan 8 hak paten internasional. Konsultasi gratis via WhatsApp!</p>
        <a href="https://wa.me/6282240489010?text=Halo%2C%20saya%20tertarik%20dengan%20AFC%20Utsukushhii%20dengan%208%20hak%20paten%20internasional.%20Bisa%20info%20harga%20dan%20cara%20pemesanannya%3F"
           target="_blank"
           rel="noopener noreferrer"
           style="background-color: #9333ea !important; color: #ffffff !important; text-decoration: none !important; border: none !important; display: inline-flex !important; align-items: center !important;"
           class="inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.03] no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px; color: #ffffff !important; margin-right: 8px;">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9-885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
        featuredImage: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ut1%20(4).jpeg',
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: 'Paten Utsukushhii - 8 Hak Paten Internasional | AFC Japan',
        metaDescription: 'Utsukushhii AFC Japan didukung 8 hak paten internasional: anti-tumor, aktivasi imun, antioksidan, detoksifikasi. Nutrisi kecantikan premium Made in Japan.',
        keywords: ['Paten Utsukushhii', 'Utsukushhii AFC', '8 hak paten', 'anti-tumor', 'aktivasi imun', 'antioksidan', 'kecantikan premium', 'Made in Japan', 'nutrisi Jepang', 'produk AFC'],
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
