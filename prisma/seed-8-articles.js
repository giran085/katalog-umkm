const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding 8 new articles for Solusi Sehat category...');

    const categorySlug = 'solusi-sehat';
    const category = await prisma.articleCategory.findUnique({
        where: { slug: categorySlug },
    });

    if (!category) {
        console.error(`Category with slug '${categorySlug}' not found!`);
        process.exit(1);
    }

    const articles = [
        {
            title: 'Beberapa Hal yang Disebabkan oleh Kerusakan DNA',
            slug: 'beberapa-hal-yang-disebabkan-oleh-kerusakan-dna',
            excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu melindungi sel tubuh dari kerusakan DNA.',
            content: `
<p><strong>Beberapa Hal yang Disebabkan oleh Kerusakan DNA</strong></p>
<br>
<p><strong>Daftar Dampak Kerusakan DNA</strong></p>
<ul>
    <li>Kanker</li>
    <li>Mutasi Genetik</li>
    <li>Penyakit Genetik</li>
    <li>Kerusakan pada Sistem Reproduksi Sel</li>
    <li>Gangguan Fungsi Seluler</li>
    <li>Gangguan Fungsi Reproduksi</li>
    <li>Peningkatan Risiko Infeksi</li>
    <li>Penyakit Autoimun</li>
    <li>Penuaan Dini</li>
    <li>Kerusakan pada Sistem Saraf</li>
</ul>
<br>
<p>"Anda membutuhkan superfood bernutrisi untuk membantu melindungi sel tubuh dari kerusakan DNA."</p>
<br>
<p><strong>Produk: Utsukushhii Gold 2.0</strong> (tertera pada gambar kemasan di pojok kiri bawah)</p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Dampak Kerusakan DNA | AFC Japan',
            metaDescription: 'Anda membutuhkan superfood bernutrisi untuk membantu melindungi sel tubuh dari kerusakan DNA.',
            keywords: ['kerusakan dna', 'utsukushhii gold 2.0', 'afc', 'kanker', 'penuaan dini', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'Kenali faktor-faktor yang dapat meningkatkan risiko Serangan Jantung',
            slug: 'kenali-faktor-faktor-risiko-serangan-jantung',
            excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu menjaga kesehatan jantung dan pembuluh darah.',
            content: `
<p><strong>Kenali faktor-faktor yang dapat meningkatkan risiko Serangan Jantung</strong></p>
<br>
<p><strong>Daftar Faktor Risiko:</strong></p>
<ul>
    <li>Obesitas</li>
    <li>Tekanan Darah Tinggi (Hipertensi)</li>
    <li>Aterosklerosis</li>
    <li>Diabetes</li>
    <li>Kolesterol Tinggi</li>
</ul>
<br>
<p>"Anda membutuhkan superfood bernutrisi untuk membantu menjaga kesehatan jantung dan pembuluh darah."</p>
<br>
<p><strong>SOP Subarashi (AFC)</strong></p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Faktor Risiko Serangan Jantung | AFC Japan',
            metaDescription: 'Kenali faktor-faktor yang dapat meningkatkan risiko Serangan Jantung. Anda membutuhkan superfood bernutrisi untuk menjaga kesehatan jantung.',
            keywords: ['serangan jantung', 'sop subarashi', 'afc', 'kesehatan jantung', 'hipertensi', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'Gejala Penyempitan Pembuluh Darah di Jantung',
            slug: 'gejala-penyempitan-pembuluh-darah-di-jantung',
            excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu menjaga kesehatan jantung dan pembuluh darah.',
            content: `
<p><strong>Gejala Penyempitan Pembuluh Darah di Jantung</strong></p>
<ul>
    <li>Nyeri dada</li>
    <li>Rasa nyeri pada kaki</li>
    <li>Sesak napas</li>
    <li>Kelelahan</li>
    <li>Sirkulasi darah ke otak berkurang</li>
    <li>Kelemahan otot kaki</li>
</ul>
<br>
<p>Anda membutuhkan superfood bernutrisi untuk membantu menjaga kesehatan jantung dan pembuluh darah.</p>
<br>
<p><strong>Identitas Produk/Brand:</strong></p>
<p><strong>Logo:</strong> AFC</p>
<p><strong>Produk:</strong> SOP SUBARASHI</p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Gejala Penyempitan Pembuluh Darah di Jantung | AFC',
            metaDescription: 'Gejala penyempitan pembuluh darah di jantung: Nyeri dada, sesak napas. Anda membutuhkan superfood untuk kesehatan jantung.',
            keywords: ['penyempitan pembuluh darah', 'jantung', 'sop subarashi', 'afc', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'Faktor Risiko Penyumbatan Pembuluh Darah',
            slug: 'faktor-risiko-penyumbatan-pembuluh-darah',
            excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu mengurangi risiko penyumbatan pembuluh darah.',
            content: `
<p><strong>Faktor Risiko Penyumbatan Pembuluh Darah</strong></p>
<ul>
    <li>Kolesterol Tinggi</li>
    <li>Kurangnya Aktivitas Fisik</li>
    <li>Tekanan Darah Tinggi</li>
    <li>Diabetes</li>
    <li>Merokok</li>
    <li>Konsumsi Alkohol Berlebihan</li>
    <li>Obesitas</li>
    <li>Usia</li>
    <li>Inflamasi</li>
    <li>Stress</li>
    <li>Genetika dan Riwayat Keluarga</li>
    <li>Kurangnya Asupan Buah dan Sayuran</li>
</ul>
<br>
<p><strong>Keterangan Tambahan:</strong></p>
<p>Anda membutuhkan superfood bernutrisi untuk membantu mengurangi risiko penyumbatan pembuluh darah.</p>
<p><strong>(Produk : AFC SOP SUBARASHI)</strong></p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Faktor Risiko Penyumbatan Pembuluh Darah | AFC',
            metaDescription: 'Faktor risiko penyumbatan pembuluh darah seperti kolesterol tinggi dan tekanan darah tinggi.',
            keywords: ['penyumbatan pembuluh darah', 'kolesterol', 'sop subarashi', 'afc', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'Polifenol di dalam Utsukushhii',
            slug: 'polifenol-di-dalam-utsukushhii',
            excerpt: 'Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan tubuh secara menyeluruh.',
            content: `
<p><strong>Polifenol di dalam Utsukushhii</strong></p>
<ul>
    <li>Menstabilkan gula darah</li>
    <li>Menurunkan risiko gangguan kardiovaskular</li>
    <li>Menurunkan risiko kanker</li>
    <li>Meningkatkan daya ingat</li>
    <li>Menjaga kesehatan pencernaan</li>
    <li>Menjaga kesehatan kulit</li>
</ul>
<br>
<p>Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan tubuh secara menyeluruh.</p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Manfaat Polifenol di dalam Utsukushhii | AFC',
            metaDescription: 'Polifenol di dalam Utsukushhii membantu menstabilkan gula darah dan menjaga kesehatan tubuh secara menyeluruh.',
            keywords: ['polifenol', 'utsukushhii', 'afc', 'gula darah', 'kardiovaskular', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'Komplikasi GERD (Gastroesophageal Reflux Disease)',
            slug: 'komplikasi-gerd-gastroesophageal-reflux-disease',
            excerpt: 'Luka dan bernanah di kerongkongan, peradangan, hingga kanker. Anda membutuhkan superfood untuk lambung.',
            content: `
<p><strong>Komplikasi GERD</strong></p>
<p><strong>(Gastroesophageal Reflux Disease)</strong></p>
<ul>
    <li>Luka dan bernanah di kerongkongan</li>
    <li>Peradangan tenggorokan</li>
    <li>Kanker tenggorokan</li>
    <li>Penyempitan kerongkongan</li>
    <li>Kerusakan saluran tenggorokan</li>
    <li>Radang paru (Pneumonia)</li>
</ul>
<br>
<p>Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan lambung dan pencernaan.</p>
<br>
<p><strong>[Product]</strong></p>
<p>AFC Utsukushhii</p>
<p>AFC SOP Subarashi</p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Komplikasi GERD | AFC Japan',
            metaDescription: 'Komplikasi GERD (Gastroesophageal Reflux Disease). Anda membutuhkan superfood bernutrisi untuk mendukung kesehatan lambung.',
            keywords: ['gerd', 'asam lambung', 'utsukushhii', 'sop subarashi', 'afc', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'GERD Gangguan pada Asam Lambung',
            slug: 'gerd-gangguan-pada-asam-lambung',
            excerpt: 'GERD disebabkan oleh penyakit asam lambung yang kerap kumat. Anda butuh nutrisi tambahan.',
            content: `
<p><strong>GERD</strong></p>
<p><strong>Gangguan pada Asam Lambung</strong></p>
<br>
<p>GERD disebabkan oleh penyakit asam lambung yang kerap kumat.</p>
<p>Penyebab GERD berasal dari gangguan katup pencernaan sfingter esofagus.</p>
<p>Apabila katup ini melemah, asam lambung yang semestinya berada di perut naik ke kerongkongan.</p>
<p>Paparan cairan asam dari lambung ini dapat mengiritasi lapisan kerongkongan dan memicu peradangan.</p>
<br>
<p>Anda membutuhkan superfood bernutrisi untuk membantu mendukung kesehatan lambung dan pencernaan.</p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'GERD Gangguan Asam Lambung | AFC',
            metaDescription: 'Penyebab GERD berasal dari gangguan katup pencernaan sfingter esofagus. Superfood untuk lambung dan pencernaan.',
            keywords: ['gerd', 'asam lambung', 'pencernaan', 'afc', 'solusi sehat'],
            categoryId: category.id,
        },
        {
            title: 'Tips Menjaga Fungsi Ginjal Pentingnya Keseimbangan Nutrisi',
            slug: 'tips-menjaga-fungsi-ginjal-keseimbangan-nutrisi',
            excerpt: 'Pentingnya keseimbangan nutrisi untuk menjaga fungsi ginjal tetap optimal.',
            content: `
<p><strong>Tips Menjaga Fungsi Ginjal</strong></p>
<p><strong>Pentingnya Keseimbangan Nutrisi</strong></p>
<ul>
    <li>Mengkonsumsi Protein dalam Jumlah Tertentu</li>
    <li>Asupan Serat yang Cukup</li>
    <li>Batasi Kandungan Garam</li>
    <li>Vitamin dan Mineral</li>
    <li>Pentingnya Hidrasi</li>
</ul>
<br>
<p>Anda membutuhkan superfood bernutrisi untuk membantu menjaga fungsi ginjal tetap optimal.</p>
<br>
<p><strong>(produk: SOP SUBARASHI)</strong></p>
<br>
<p>Sehat itu investasi, terutama di bulan suci. Mulailah jaga daya tahan tubuh Anda hari ini. Salam dari kami Distributor Resmi AFC Japan Store ID</p>
<p>Hub Kami Di : 082240489010</p>
            `.trim(),
            featuredImage: '/images/articles/default.jpg',
            author: 'AFC Japan Store ID',
            published: true,
            publishedAt: new Date(),
            metaTitle: 'Tips Menjaga Fungsi Ginjal | AFC Japan',
            metaDescription: 'Tips Menjaga Fungsi Ginjal dan Pentingnya Keseimbangan Nutrisi. Superfood untuk kesehatan ginjal.',
            keywords: ['ginjal', 'fungsi ginjal', 'sop subarashi', 'afc', 'solusi sehat'],
            categoryId: category.id,
        }
    ];

    for (const articleData of articles) {
        try {
            const article = await prisma.article.upsert({
                where: { slug: articleData.slug },
                update: articleData,
                create: articleData,
            });
            console.log('Successfully processed article:', article.title);
        } catch (error) {
            console.error('Error processing article:', articleData.title, error.message);
        }
    }

    console.log('All 8 articles have been seeded!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
