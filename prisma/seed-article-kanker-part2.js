const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding article: Berbagai Jenis Kanker yang Marak Terjadi di Indonesia - Part 2...');

    const categorySlug = 'kesehatan-umum';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found!`);
        process.exit(1);
    }

    const articleData = {
        title: 'Berbagai Jenis Kanker yang Marak Terjadi di Indonesia Part 2: 5 Kanker Lainnya yang Wajib Diwaspadai',
        slug: 'berbagai-jenis-kanker-yang-marak-terjadi-di-indonesia-part-2',
        excerpt: 'Part 2 pembahasan 5 jenis kanker yang juga marak di Indonesia: Paru-paru, Payudara, Serviks, Hati, dan Kolorektal. Kenali gejala, solusi medis, dan pencegahannya.',
        content: `
<h2>🎗️ Lanjutan Perjalanan Mengenal Kanker di Indonesia</h2>
<p>Di <strong>Part 1</strong>, kita sudah membahas 5 jenis kanker: Nasofaring, Leukemia, Limfoma, Ovarium, dan Prostat. Kali ini, kita akan melanjutkan dengan <strong>5 jenis kanker lain yang juga banyak terjadi di Indonesia</strong> dan tidak kalah berbahayanya.</p>
<p>Masalahnya, banyak orang baru menyadari dirinya terkena kanker ketika sudah masuk stadium lanjut. Padahal, semakin dini kanker terdeteksi, semakin besar peluang untuk sembuh. Karena itu, kenali gejalanya mulai dari sekarang!</p>

<hr class="my-8" />

<h2>1. 🫁 Kanker Paru-paru</h2>
<p>Kanker paru-paru adalah salah satu penyebab kematian tertinggi akibat kanker di Indonesia. Penyebab utamanya adalah kebiasaan merokok, paparan polusi, dan riwayat keluarga. Kanker ini sering tidak menunjukkan gejala di awal, sehingga banyak yang baru terdeteksi saat stadium lanjut.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>😷 Batuk kronis yang tidak kunjung sembuh atau batuk darah</li>
    <li>💨 Sesak napas dan nyeri dada saat bernapas atau batuk</li>
    <li>🗣️ Suara menjadi serak</li>
    <li>⚖️ Penurunan berat badan drastis tanpa sebab jelas</li>
    <li>🦴 Nyeri tulang atau punggung</li>
    <li>😩 Mudah lelah dan tubuh terasa lemas terus-menerus</li>
    <li>🫁 Infeksi paru berulang (pneumonia, bronkitis)</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Berhenti merokok dan hindari paparan asap rokok</li>
    <li>✅ CT scan paru untuk deteksi dini, terutama bagi perokok aktif</li>
    <li>✅ Konsultasi ke dokter spesialis paru (Sp.P)</li>
    <li>✅ Pembedahan, kemoterapi, radioterapi, atau terapi target sesuai stadium</li>
    <li>✅ Imunoterapi untuk kanker paru jenis tertentu</li>
</ul>

<hr class="my-8" />

<h2>2. 🎀 Kanker Payudara</h2>
<p>Kanker payudara adalah jenis kanker yang paling banyak diderita wanita di Indonesia. Banyak kasus baru terdeteksi pada stadium lanjut karena kurangnya kesadaran untuk melakukan skrining rutin. Padahal, jika ditemukan sejak dini, kanker ini bisa disembuhkan.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🔴 Adanya benjolan keras yang tidak nyeri di area payudara atau ketiak</li>
    <li>🍊 Perubahan tekstur kulit乳房 (seperti kulit jeruk)</li>
    <li>🔻 Puting tertarik ke dalam (<em>inverted nipple</em>) secara tiba-tiba</li>
    <li>🩸 Keluar cairan abnormal dari puting (bisa bening, kuning, atau berdarah)</li>
    <li>📏 Perubahan bentuk atau ukuran salah satu puting</li>
    <li>😣 Kemerahan atau pembengkakan di area puting</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Lakukan SADARI (Periksa Payudara Sendiri) setiap bulan</li>
    <li>✅ Mammografi untuk wanita usia 40 tahun ke atas</li>
    <li>✅ USG pay puting untuk wanita di bawah 40 tahun</li>
    <li>✅ Konsultasi ke dokter bedah onkologi untuk diagnosis lanjut</li>
    <li>✅ Pembedahan, kemoterapi, radioterapi, atau terapi hormonal</li>
    <li>✅ Dukung dengan nutrisi berkualitas untuk menjaga daya tahan tubuh</li>
</ul>

<hr class="my-8" />

<h2>3. 🌷 Kanker Serviks (Kanker Leher Rahim)</h2>
<p>Kanker serviks adalah "<em>silent killer</em>" bagi wanita Indonesia. Penyebab utamanya adalah infeksi Human Papillomavirus (HPV) yang ditularkan melalui hubungan seksual. Kabar baiknya, kanker ini bisa dicegah dengan vaksinasi HPV dan skrining rutin.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🩸 Perdarahan vagina yang tidak normal (di luar siklus haid atau setelah berhubungan seks)</li>
    <li>💧 Keputihan yang berbau tidak sedap atau bercampur darah</li>
    <li>😣 Nyeri saat berhubungan seksual</li>
    <li>⚖️ Penurunan berat badan tanpa sebab jelas</li>
    <li>🦵 Nyeri punggung bagian bawah atau panggul</li>
    <li>😩 Kelelahan berlebihan dan kehilangan nafsu makan</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Vaksinasi HPV untuk anak perempuan sejak usia 9-14 tahun</li>
    <li>✅ Pap smear rutin setiap 3 tahun sekali untuk wanita yang sudah aktif seksual</li>
    <li>✅ Tes IVA (Inspeksi Visual Asam Asetat) sebagai alternatif skrining</li>
    <li>✅ Konsultasi ke dokter kandungan (Sp.OG) untuk penanganan</li>
    <li>✅ Pembedahan, kemoterapi, atau radioterapi sesuai stadium</li>
    <li>✅ Jaga kebersihan area kewanitaan dan hindari perilaku berisiko</li>
</ul>

<hr class="my-8" />

<h2>4. 🟡 Kanker Hati (Hepatocellular Carcinoma)</h2>
<p>Kanker hati banyak diderita oleh pasien dengan riwayat hepatitis B, hepatitis C, atau sirosis hati. Di Indonesia, prevalensi hepatitis B cukup tinggi, sehingga risiko kanker hati juga meningkat. Karena gejalanya sering samar, kanker hati sering terdeteksi pada stadium lanjut.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🟡 Nyeri atau pembengkakan di perut bagian kanan atas</li>
    <li>👁️ Penyakit kuning (kulit dan bagian putih mata menguning)</li>
    <li>⚖️ Penurunan berat badan drastis tanpa sebab</li>
    <li>😋 Kehilangan nafsu makan dan cepat kenyang</li>
    <li>🤒 Demam berkepanjangan tanpa sebab jelas</li>
    <li>🫗 Perut membesar akibat penumpukan cairan (asites)</li>
    <li>😩 Mudah lelah dan tubuh terasa lemas</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Skrining rutin untuk penderita hepatitis B dan C</li>
    <li>✅ Tes darah AFP (Alpha-Fetoprotein) secara berkala</li>
    <li>✅ USG hati atau CT scan untuk deteksi dini</li>
    <li>✅ Pengobatan antivirus untuk hepatitis B dan C</li>
    <li>✅ Pembedahan, transplantasi hati, atau ablasi tumor</li>
    <li>✅ Hindari alkohol dan makanan berlemak berlebihan</li>
</ul>

<hr class="my-8" />

<h2>5. 🩺 Kanker Kolorektal (Kanker Usus Besar & Rektum)</h2>
<p>Kanker kolorektal menyerang usus besar atau rektum. Kanker ini banyak diderita oleh orang berusia di atas 50 tahun, tetapi belakangan juga mulai menyerang usia muda. Pola makan rendah serat dan tinggi lemak menjadi salah satu faktor risikonya.</p>

<h3>🔍 Gejala yang Perlu Diwaspadai:</h3>
<ul>
    <li>🚽 Perubahan pola buang air besar (diare atau sembelit berkepanjangan)</li>
    <li>🩸 Adanya darah pada tinja (feses)</li>
    <li>😣 Nyeri perut, kembung, atau kram yang berulang</li>
    <li>⚖️ Penurunan berat badan tanpa sebab jelas</li>
    <li>😩 Mudah lelah dan lemas</li>
    <li>🚿 Perasaan tidak tuntas setelah buang air besar</li>
    <li>🩸 Anemia defisiensi zat besi tanpa sebab jelas</li>
</ul>

<h3>💊 Solusi & Penanganan:</h3>
<ul>
    <li>✅ Kolonoskopi rutin untuk usia 50 tahun ke atas (atau lebih muda jika ada riwayat keluarga)</li>
    <li>✅ Tes darah samar tinja (FOBT) sebagai skrining awal</li>
    <li>✅ Perbanyak makan serat (sayur, buah, biji-bijian)</li>
    <li>✅ Kurangi daging merah dan makanan olahan</li>
    <li>✅ Pembedahan, kemoterapi, atau radioterapi sesuai stadium</li>
    <li>✅ Rutin olahraga untuk menjaga berat badan ideal</li>
</ul>

<hr class="my-8" />

<h2>🛡️ Pencegahan Kanker yang Bisa Dilakukan Sejak Dini</h2>
<p>Baik kanker Part 1 maupun Part 2, prinsip pencegahannya tetap sama. Berikut langkah-langkah penting yang bisa Anda terapkan:</p>

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
    <li>✅ Vaksinasi HPV dan Hepatitis B</li>
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
    <li>🦠 <strong>Probiotik</strong> untuk menjaga keseimbangan sistem pencernaan</li>
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
    <li>🩺 Rutin medical check-up dan skrining sesuai usia</li>
    <li>💊 Dukung dengan nutrisi berkualitas seperti AFC Utsukushhii</li>
</ul>
<p><strong>Ingat, mencegah selalu lebih baik daripada mengobati. Tubuh sehat adalah investasi terbaik untuk masa depan Anda dan keluarga.</strong></p>

<p>📖 Sudah baca <strong>Part 1</strong>? Cek di sini: <a href="/artikel/berbagai-jenis-kanker-yang-marak-terjadi-di-indonesia" class="text-blue-600 font-semibold hover:underline">5 Jenis Kanker Marak di Indonesia (Part 1)</a></p>

<div class="mt-12 p-8 border border-rose-100 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 text-center shadow-md relative overflow-hidden">
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>
    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>

    <div class="relative z-10">
        <div class="flex justify-center mb-3">
            <span class="text-4xl">💊</span>
        </div>
        <h3 class="text-2xl font-bold text-rose-900 mb-2 mt-0">Dukung Daya Tahan Tubuh Anda dengan AFC Utsukushhii</h3>
        <p class="text-rose-800 mb-6 max-w-xl mx-auto leading-relaxed text-base font-medium">AFC Utsukushhii mengandung kolagen, antioksidan, probiotik, dan nutrisi premium dari Jepang untuk membantu regenerasi sel dan menjaga tubuh tetap bugar. Investasi terbaik untuk pencegahan kanker sejak dini.</p>
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
        featuredImage: 'https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/ut1%20(3).jpeg',
        author: 'AFC Japan Store ID',
        published: true,
        publishedAt: new Date(),
        metaTitle: '5 Jenis Kanker Marak di Indonesia Part 2: Paru, Payudara, Serviks',
        metaDescription: 'Part 2 pembahasan 5 kanker marak di Indonesia: Paru-paru, Payudara, Serviks, Hati, dan Kolorektal. Gejala, solusi medis, dan pencegahan dengan AFC Utsukushhii.',
        keywords: ['kanker paru-paru', 'kanker pay puting', 'kanker serviks', 'kanker hati', 'kanker kolorektal', 'pencegahan kanker', 'kanker indonesia part 2', 'AFC Utsukushhii', 'kesehatan umum'],
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
