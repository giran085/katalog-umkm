const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding new article for Solusi Sehat category...');

    const categorySlug = 'solusi-sehat';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found! Please run seed-new-categories.js first.`);
        process.exit(1);
    }

    const articleData = {
        title: 'Asam Lambung yang Mengakibatkan Anxiety: Perbaikan Pola Makan, Pola Pikir, dan Nutrisi Pendukung',
        slug: 'asam-lambung-yang-mengakibatkan-anxiety-perbaikan-pola-makan-pola-pikir-dan-nutrisi-pendukung',
        excerpt: 'Memahami hubungan asam lambung (GERD) dan anxiety (kecemasan berlebih). Temukan tips perbaikan pola makan, pola pikir, dan nutrisi pendukung.',
        content: `
<h2>🧠 Memahami Hubungan Asam Lambung dan Anxiety</h2>
<p>Asam lambung atau GERD sering kali tidak hanya menimbulkan keluhan fisik seperti nyeri ulu hati, mual, dada terasa panas, tenggorokan mengganjal, dan perut kembung. Pada banyak orang, kondisi ini juga memicu rasa cemas berlebihan atau <em>anxiety</em>.</p>
<p>Ketika asam lambung naik, tubuh akan berada dalam kondisi tidak nyaman terus-menerus. Detak jantung terasa lebih cepat, napas menjadi pendek, dada sesak, dan muncul rasa takut berlebihan. Gejala ini sering menyerupai serangan panik sehingga penderita semakin khawatir terhadap kesehatannya.</p>
<p>Di sisi lain, stres dan pikiran yang tegang juga dapat meningkatkan produksi asam lambung. Akibatnya terbentuk lingkaran yang saling memengaruhi:</p>
<ul>
    <li>💭 Pikiran stres memicu asam lambung</li>
    <li>🔥 Asam lambung naik memicu anxiety</li>
    <li>🌀 Anxiety memperparah gangguan pencernaan</li>
</ul>
<p>Karena itu, pemulihan tidak cukup hanya mengandalkan obat, tetapi juga membutuhkan perbaikan pola makan, pola pikir, dan nutrisi yang tepat.</p>

<hr class="my-8" />

<h2>🥗 Perbaikan Pola Makan untuk Asam Lambung dan Anxiety</h2>
<p>Pola makan yang teratur membantu lambung bekerja lebih tenang dan mengurangi iritasi pada saluran cerna.</p>

<h3>1. Makan Teratur dan Tidak Telat ⏰</h3>
<p>Hindari kebiasaan:</p>
<ul>
    <li>❌ Telat makan</li>
    <li>❌ Makan terlalu banyak sekaligus</li>
    <li>❌ Begadang sambil ngemil</li>
    <li>❌ Langsung tidur setelah makan</li>
</ul>
<p>Usahakan makan:</p>
<ul>
    <li>✅ 3 kali makan utama</li>
    <li>✅ 2 kali snack sehat</li>
    <li>✅ Porsi kecil tetapi sering</li>
</ul>
<p>Lambung yang kosong terlalu lama dapat meningkatkan produksi asam dan memicu rasa cemas.</p>

<h3>2. Hindari Makanan Pemicu 🚫</h3>
<p>Beberapa makanan dapat memperburuk GERD dan anxiety, seperti:</p>
<ul>
    <li>🌶️ Makanan pedas</li>
    <li>🍗 Gorengan</li>
    <li>☕ Kopi berlebihan</li>
    <li>🥤 Minuman bersoda</li>
    <li>🍫 Cokelat</li>
    <li>🍋 Makanan terlalu asam</li>
    <li>🍜 Makanan instan tinggi MSG</li>
    <li>🚬 Rokok dan alkohol</li>
</ul>
<p>Sebaliknya, pilih makanan yang lebih ramah lambung:</p>
<ul>
    <li>🥣 Oatmeal</li>
    <li>🍌 Pisang</li>
    <li>🥭 Pepaya</li>
    <li>🍚 Nasi hangat</li>
    <li>🥦 Sayur rebus</li>
    <li>🐟 Ikan</li>
    <li>🍗 Ayam tanpa kulit</li>
    <li>💧 Air putih cukup</li>
</ul>

<h3>3. Perhatikan Cara Makan 🍽️</h3>
<p>Selain jenis makanan, cara makan juga penting:</p>
<ul>
    <li>🐢 Makan perlahan</li>
    <li>咀 Kunyah dengan baik</li>
    <li>😌 Jangan sambil marah atau terburu-buru</li>
    <li>📱 Hindari bermain gadget saat makan</li>
    <li>🧍 Duduk tegak setelah makan minimal 30 menit</li>
</ul>
<p>Tubuh yang rileks saat makan membantu sistem pencernaan bekerja lebih optimal.</p>

<hr class="my-8" />

<h2>🧘 Perbaikan Pola Pikir untuk Mengurangi Anxiety</h2>
<p>Kesehatan lambung sangat dipengaruhi kondisi emosional. Pikiran yang tenang membantu saraf pencernaan menjadi lebih stabil.</p>

<h3>1. Mengurangi Overthinking 💭</h3>
<p>Penderita anxiety sering fokus pada gejala tubuh secara berlebihan. Sedikit rasa tidak nyaman langsung dianggap penyakit berat.</p>
<p>Belajar memahami bahwa:</p>
<ul>
    <li>🛡️ Tidak semua gejala berbahaya</li>
    <li>🌱 Tubuh memiliki kemampuan untuk pulih</li>
    <li>⏳ Proses penyembuhan membutuhkan waktu</li>
</ul>
<p>Semakin tenang pikiran seseorang, semakin stabil kondisi lambungnya.</p>

<h3>2. Latihan Relaksasi 🍃</h3>
<p>Beberapa aktivitas sederhana membantu menenangkan saraf:</p>
<ul>
    <li>🌬️ Tarik napas perlahan</li>
    <li>🧘 Meditasi ringan</li>
    <li>📿 Dzikir atau doa</li>
    <li>🚶 Jalan pagi</li>
    <li>🎵 Mendengarkan musik tenang</li>
    <li>😴 Tidur cukup</li>
</ul>
<p>Tubuh yang rileks membantu menurunkan hormon stres yang memicu asam lambung.</p>

<h3>3. Bangun Pola Hidup Positif ✨</h3>
<p>Biasakan:</p>
<ul>
    <li>🙏 Bersyukur</li>
    <li>☮️ Mengurangi drama dan konflik</li>
    <li>📵 Membatasi konsumsi berita negatif</li>
    <li>👥 Bergaul dengan lingkungan suportif</li>
    <li>🛋️ Memiliki waktu istirahat yang cukup</li>
</ul>
<p>Kesehatan mental yang baik sangat membantu pemulihan lambung.</p>

<hr class="my-8" />

<h2>💊 Peran Nutrisi Pendukung: AFC Subarashii dan Utsukushii</h2>
<p>Selain menjaga pola hidup, sebagian orang juga menggunakan nutrisi pendukung untuk membantu menjaga daya tahan tubuh dan metabolisme.</p>

<h3>🌟 AFC Subarashii</h3>
<p>AFC Subarashii dikenal sebagai suplemen yang mengandung ekstrak tumbuhan dan nutrisi pendukung tubuh. Kandungannya membantu menjaga metabolisme, daya tahan, dan membantu tubuh tetap bertenaga saat proses pemulihan.</p>
<p>Bagi penderita asam lambung dan anxiety, kondisi tubuh yang lebih fit dapat membantu mengurangi rasa lemas, tegang, dan mudah cemas.</p>

<h3>🌟 AFC Utsukushii</h3>
<p>AFC Utsukushii mengandung kolagen dan antioksidan yang membantu menjaga kesehatan tubuh dari dalam. Saat tubuh lebih sehat dan istirahat lebih berkualitas, kondisi pikiran juga cenderung menjadi lebih tenang.</p>
<p>Nutrisi yang baik membantu tubuh memperbaiki keseimbangan metabolisme dan mendukung kualitas hidup secara menyeluruh.</p>

<hr class="my-8" />

<h2>🎯 Kesimpulan</h2>
<p>Asam lambung dan anxiety saling berkaitan erat. Lambung yang bermasalah dapat memicu rasa cemas, sementara pikiran yang stres dapat memperparah gangguan lambung.</p>
<p>Karena itu, pemulihan terbaik dilakukan secara menyeluruh melalui:</p>
<ul>
    <li>🥗 Pola makan yang sehat dan teratur</li>
    <li>🧘 Pola pikir yang lebih tenang</li>
    <li>🍃 Manajemen stres yang baik</li>
    <li>🛌 Istirahat cukup</li>
    <li>💊 Nutrisi pendukung seperti AFC Subarashii dan Utsukushii</li>
</ul>
<p>Dengan konsistensi dan kesabaran, tubuh dapat kembali lebih nyaman, pikiran menjadi lebih tenang, dan kualitas hidup meningkat.</p>

<div class="mt-12 p-8 border border-amber-100 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 text-center shadow-md relative overflow-hidden">
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"></div>

    <div class="relative z-10">
        <div class="flex justify-center mb-3">
            <span class="text-4xl">📚</span>
        </div>
        <h3 class="text-2xl font-bold text-amber-900 mb-2 mt-0">Solusi E-Book Premium Asam Lambung & Anxiety</h3>
        <p class="text-amber-800 mb-6 max-w-xl mx-auto leading-relaxed text-base font-medium">Ingin bebas sepenuhnya dari kecemasan berlebih dan perihnya asam lambung? Dapatkan panduan lengkap terstruktur tentang cara memutus lingkaran setan GERD & anxiety lewat e-book premium kami!</p>
        <a href="https://clicky.id/payment/purchase/69620cd13f7e70ad4635bff4?affiliate=6a0721a6a4d32eb6b99cfb04" 
           target="_blank" 
           rel="noopener noreferrer" 
           style="background-color: #d97706 !important; color: #ffffff !important; text-decoration: none !important; border: none !important; display: inline-flex !important; align-items: center !important;" 
           class="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.03] no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 20px; height: 20px; color: #ffffff !important; margin-right: 8px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span style="color: #ffffff !important; font-weight: 800 !important;">Beli E-Book Panduan Sekarang</span>
        </a>
    </div>
</div>
        `.trim(),
        featuredImage: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/relax%20(1).jpg',
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: 'Asam Lambung yang Mengakibatkan Anxiety: Pola Makan & Pikir',
        metaDescription: 'Hubungan asam lambung (GERD) dan anxiety (kecemasan berlebih). Tips perbaikan pola makan, pola pikir, dan nutrisi pendukung seperti AFC Subarashii & Utsukushii.',
        keywords: ['asam lambung', 'anxiety', 'gerd', 'pola makan', 'pola pikir', 'afc subarashii', 'afc utsukushii', 'solusi sehat'],
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
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
