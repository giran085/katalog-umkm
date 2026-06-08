const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding article: Berbagai Jenis Kanker yang Marak Terjadi di Indonesia...');

    const categorySlug = 'kesehatan-umum';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found!`);
        process.exit(1);
    }

    const articleData = {
        title: 'Berbagai Jenis Kanker yang Marak Terjadi di Indonesia: Gejala, Solusi, dan Pencegahan',
        slug: 'berbagai-jenis-kanker-yang-marak-terjadi-di-indonesia',
        excerpt: 'Kanker masih menjadi salah satu penyebab kematian tertinggi di Indonesia. Kenali 5 jenis kanker yang paling marak: Nasofaring, Leukemia, Limfoma, Ovarium, dan Prostat beserta gejala serta solusi pencegahannya.',
        content: `
<h2>🦠 Mengapa Kanker Masih Menjadi "Musuh Senyap" di Indonesia?</h2>
<p>Kanker adalah salah satu penyebab kematian tertinggi di Indonesia. Banyak kasus baru terdeteksi pada stadium lanjut, sehingga penanganan menjadi lebih sulit. Padahal, jika dikenali sejak dini, banyak jenis kanker yang memiliki peluang besar untuk disembuhkan.</p>
<p>Berikut adalah <strong>5 jenis kanker yang paling marak terjadi di Indonesia</strong>, beserta gejala yang perlu diwaspadai, solusi medis, dan langkah pencegahan yang bisa Anda lakukan sehari-hari.</p>

<hr class="my-8" />

<h2>1. 👃 Kanker Nasofaring (Kanker Hidung & Tenggorokan)</h2>
<p>Kanker nasofaring adalah kanker yang tumbuh di area belakang hidung dan langit-langit tenggorokan. Kanker ini banyak ditemukan di Indonesia, terutama pada etnis Tionghoa dan pria usia 30-50 tahun.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>👃 Hidung tersumbat terus-menerus atau mimisan yang berulang tanpa sebab jelas</li>
    <li>👂 Telinga berdenging (<em>tinnitus</em>) atau gangguan pendengaran di satu sisi</li>
    <li>😮 Benjolan di area leher yang tidak nyeri</li>
    <li>👁️ Penglihatan ganda atau pembengkakan kelopak mata</li>
    <li>🗣️ Suara menjadi serak</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Periksakan ke dokter THT jika gejala berlangsung lebih dari 2 minggu</li>
    <li>✅ Deteksi dini melalui endoskopi nasofaring</li>
    <li>✅ Radioterapi dan kemoterapi sesuai stadium</li>
    <li>✅ Konsumsi makanan tinggi antioksidan untuk mendukung proses pemulihan</li>
</ul>

<hr class="my-8" />

<h2>2. 🩸 Leukemia (Kanker Darah)</h2>
<p>Leukemia adalah kanker yang menyerang sel darah putih di sumsum tulang. Penderita menjadi tidak mampu melawan infeksi dengan baik. Kanker ini bisa menyerang anak-anak hingga orang dewasa.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🩹 Tubuh mudah memar, mimisan, atau gusi sering berdarah tanpa sebab</li>
    <li>🤒 Demam berkepanjangan dan sering mengalami infeksi</li>
    <li>😴 Kelelahan ekstrem dan tubuh terasa lemas terus-menerus</li>
    <li>🦴 Nyeri pada tulang atau persendian</li>
    <li>⚖️ Penurunan berat badan drastis tanpa sebab jelas</li>
    <li>🌙 Keringat berlebihan di malam hari</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Pemeriksaan darah lengkap secara rutin</li>
    <li>✅ Konsultasi ke dokter hematologi untuk diagnosis lanjutan</li>
    <li>✅ Kemoterapi, terapi target, atau transplantasi sumsum tulang</li>
    <li>✅ Menjaga daya tahan tubuh dengan nutrisi yang cukup</li>
</ul>

<hr class="my-8" />

<h2>3. 🫁 Kanker Limfoma (Kanker Kelenjar Getah Bening)</h2>
<p>Kanker limfoma menyerang sistem limfatik, yaitu bagian dari sistem imun tubuh. Ada dua jenis utama: <strong>Limfoma Hodgkin</strong> dan <strong>Limfoma Non-Hodgkin</strong>.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🟢 Pembengkakan kelenjar getah bening (leher, ketiak, atau selangkangan) tanpa rasa nyeri</li>
    <li>🌙 Keringat dingin di malam hari</li>
    <li>⚖️ Penurunan berat badan drastis tanpa diet</li>
    <li>🤒 Demam berulang tanpa infeksi jelas</li>
    <li>😩 Gatal-gatal di seluruh tubuh</li>
    <li>🫁 Sesak napas atau nyeri dada</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Biopsi kelenjar getah bening untuk diagnosis pasti</li>
    <li>✅ Kemoterapi, radioterapi, atau imunoterapi</li>
    <li>✅ Menjaga pola hidup sehat untuk memperkuat sistem imun</li>
    <li>✅ Rutin cek kesehatan ke dokter</li>
</ul>

<hr class="my-8" />

<h2>4. 🌸 Kanker Ovarium (Kanker Indung Telur)</h2>
<p>Kanker ovarium sering disebut "<em>silent killer</em>" karena gejalanya samar dan sering dianggap gangguan pencernaan biasa. Kanker ini umumnya menyerang wanita di atas usia 50 tahun, tetapi bisa juga terjadi pada usia lebih muda.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🫃 Perut sering terasa kembung, begah, atau cepat kenyang saat makan</li>
    <li>🚽 Frekuensi buang air kecil yang meningkat secara drastis</li>
    <li>⚖️ Penurunan berat badan tanpa sebab jelas</li>
    <li>😣 Nyeri panggul atau perut bagian bawah</li>
    <li>🍽️ Gangguan pencernaan yang tidak membaik dengan obat maag</li>
    <li>🩸 Perdarahan vagina abnormal (terutama pasca menopause)</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Pemeriksaan USG transvaginal dan tes darah CA-125</li>
    <li>✅ Pembedahan, kemoterapi, atau terapi target</li>
    <li>✅ Rutin periksa ke dokter kandungan minimal 1 tahun sekali</li>
    <li>✅ Kenali riwayat keluarga terkait kanker</li>
</ul>

<hr class="my-8" />

<h2>5. 👨 Kanker Prostat</h2>
<p>Kanker prostat adalah kanker yang menyerang kelenjar prostat pada pria, biasanya terjadi pada usia di atas 50 tahun. Deteksi dini sangat penting karena kanker ini berkembang lambat dan bisa ditangani dengan baik jika ditemukan sejak awal.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🚽 Kesulitan memulai buang air kecil atau aliran urin yang lemah</li>
    <li>🩸 Adanya darah dalam urin atau air mani</li>
    <li>💦 Sering buang air kecil, terutama di malam hari</li>
    <li>😣 Nyeri saat buang air kecil atau ejakulasi</li>
    <li>🦵 Nyeri punggung bagian bawah, paha, atau pinggul</li>
    <li>⚡ Disfungsi ereksi</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Skrining PSA (Prostate-Specific Antigen) untuk pria di atas 50 tahun</li>
    <li>✅ Pemeriksaan colok dubur (DRE) oleh dokter</li>
    <li>✅ Pembedahan, radioterapi, atau terapi hormon</li>
    <li>✅ Jaga berat badan ideal dan konsumsi makanan sehat</li>
</ul>

<hr class="my-8" />

<h2>🛡️ Pencegahan Kanker yang Bisa Dilakukan Sejak Dini</h2>
<p>Meskipun tidak semua kanker bisa dicegah, gaya hidup sehat dapat menurunkan risiko secara signifikan:</p>

<h3>1. 🍎 Pola Makan Sehat & Bergizi ⚠️</h3>
<ul>
    <li>🥦 Perbanyak sayur dan buah berwarna-warni</li>
    <li>🐟 Konsumsi ikan, kacang-kacangan, dan biji-bijian</li>
    <li>🚫 Batasi makanan olahan, gorengan, dan daging merah berlebihan</li>
    <li>💧 Minum air putih yang cukup setiap hari</li>
</ul>

<h3>2. 🏃 Aktivitas Fisik Rutin 💪</h3>
<ul>
    <li>🚶 Jalan kaki 30 menit setiap hari</li>
    <li>🧘 Yoga atau senam ringan untuk menjaga kebugaran</li>
    <li>⛹️ Olahraga favorit minimal 3-4 kali seminggu</li>
</ul>

<h3>3. 🚭 Hindari Rokok & Alkohol 🍷</h3>
<ul>
    <li>❌ Berhenti merokok adalah langkah pencegahan terpenting</li>
    <li>❌ Batasi konsumsi alkohol</li>
    <li>✅ Hindari paparan asap rokok (<em>perokok pasif</em>)</li>
</ul>

<h3>4. 😴 Istirahat & Kelola Stres 🧘</h3>
<ul>
    <li>🛌 Tidur 7-8 jam per malam</li>
    <li>🧘 Meditasi atau relaksasi untuk mengurangi stres</li>
    <li>😊 Pikiran positif mendukung imun tubuh yang lebih kuat</li>
</ul>

<h3>5. 🩺 Skrining & Cek Rutin 🏥</h3>
<ul>
    <li>✅ Medical check-up minimal 1 tahun sekali</li>
    <li>✅ Skrining sesuai usia dan riwayat keluarga</li>
    <li>✅ Jangan tunda periksa jika ada gejala yang mencurigakan</li>
</ul>

<hr class="my-8" />

<h2>💊 Peran Nutrisi Pendukung: AFC Utsukushhii untuk Daya Tahan Tubuh</h2>
<p>Selain pola hidup sehat, tubuh juga membutuhkan nutrisi pendukung yang dapat membantu menjaga daya tahan tubuh, terutama dalam melawan radikal bebas yang berisiko memicu pertumbuhan sel abnormal.</p>

<h3>🌟 AFC Utsukushhii</h3>
<p>AFC Utsukushhii adalah suplemen premium dari AFC Japan yang mengandung:</p>
<ul>
    <li>💎 <strong>Kolagen berkualitas tinggi</strong> untuk regenerasi sel</li>
    <li>🛡️ <strong>Antioksidan kuat</strong> untuk melawan radikal bebas</li>
    <li>🌿 <strong>Ekstrak plasenta</strong> yang mendukung peremajaan sel</li>
    <li>💧 <strong>Vitamin C dan E</strong> untuk menjaga kesehatan jaringan tubuh</li>
    <li>✨ <strong>Asam hialuronat</strong> untuk elastisitas kulit dan sel</li>
</ul>
<p>Dengan kandungan tersebut, AFC Utsukushhii dapat membantu tubuh tetap bugar, mendukung metabolisme, dan membantu proses regenerasi sel. Tubuh yang sehat dan tercukupi nutrisinya memiliki sistem pertahanan yang lebih baik dalam melawan berbagai penyakit, termasuk kanker.</p>

<p>Bagi Anda yang peduli dengan pencegahan kanker, menjaga daya tahan tubuh dengan nutrisi berkualitas adalah investasi jangka panjang yang sangat berharga.</p>

<hr class="my-8" />

<h2>🎯 Kesimpulan</h2>
<p>Kanker memang menakutkan, tetapi bukan berarti tidak bisa dicegah dan ditangani. Dengan mengenali gejala sejak dini, menerapkan pola hidup sehat, serta memenuhi kebutuhan nutrisi tubuh, kita bisa menurunkan risiko terkena kanker secara signifikan.</p>
<p>Jangan tunggu sampai parah. Mulailah peduli pada tubuh Anda dari sekarang:</p>
<ul>
    <li>🥗 Makan sehat dan bergizi seimbang</li>
    <li>🏃 Rajin olahraga dan istirahat cukup</li>
    <li>🚭 Hindari rokok, alkohol, dan zat karsinogenik</li>
    <li>🩺 Rutin medical check-up</li>
    <li>💊 Dukung dengan nutrisi berkualitas seperti AFC Utsukushhii</li>
</ul>
<p><strong>Ingat, mencegah selalu lebih baik daripada mengobati. Tubuh sehat adalah investasi terbaik untuk masa depan Anda dan keluarga.</strong></p>

<div class="mt-12 p-8 border border-rose-100 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 text-center shadow-md relative overflow-hidden">
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>

    <div class="relative z-10">
        <div class="flex justify-center mb-3">
            <span class="text-4xl">💊</span>
        </div>
        <h3 class="text-2xl font-bold text-rose-900 mb-2 mt-0">Dukung Daya Tahan Tubuh Anda dengan AFC Utsukushhii</h3>
        <p class="text-rose-800 mb-6 max-w-xl mx-auto leading-relaxed text-base font-medium">AFC Utsukushhii mengandung kolagen, antioksidan, dan nutrisi premium dari Jepang untuk membantu regenerasi sel dan menjaga tubuh tetap bugar. Investasi terbaik untuk pencegahan kanker sejak dini.</p>
        <a href="https://wa.me/6282240489010?text=Halo%2C%20saya%20tertarik%20dengan%20AFC%20Utsukushhii%20untuk%20menjaga%20daya%20tahan%20tubuh.%20Bisa%20info%20lebih%20lanjut%3F"
           target="_blank"
           rel="noopener noreferrer"
           style="background-color: #e11d48 !important; color: #ffffff !important; text-decoration: none !important; border: none !important; display: inline-flex !important; align-items: center !important;"
           class="inline-flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-700 text-white font-extrabold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.03] no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="width: 20px; height: 20px; color: #ffffff !important; margin-right: 8px;">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span style="color: #ffffff !important; font-weight: 800 !important;">Chat WhatsApp & Konsultasi Gratis</span>
        </a>
        <p class="mt-6 text-sm text-rose-700/80 italic">
            📞 Kontak langsung: <a href="https://wa.me/6282240489010" class="text-rose-700 font-semibold not-italic hover:underline">+62 822-4048-9010</a><br/>
            <span class="font-semibold text-rose-900 not-italic">Distributor Resmi AFC Japan Store ID</span>
        </p>
    </div>
</div>
        `.trim(),
        featuredImage: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ut1%20(1).jpeg',
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: '5 Jenis Kanker Marak di Indonesia: Gejala, Solusi & Pencegahan',
        metaDescription: 'Kenali 5 jenis kanker yang paling marak di Indonesia: Nasofaring, Leukemia, Limfoma, Ovarium, dan Prostat. Gejala, solusi medis, dan cara pencegahan dengan nutrisi AFC Utsukushhii.',
        keywords: ['kanker', 'kanker nasofaring', 'leukemia', 'limfoma', 'kanker ovarium', 'kanker prostat', 'pencegahan kanker', 'kesehatan umum', 'AFC Utsukushhii', 'day a tahan tubuh'],
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
