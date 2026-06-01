import prisma from '@/lib/prisma';
import EBookCard from '@/components/EBookCard';
import EBookCategoryFilter from '@/components/EBookCategoryFilter';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'E-Book Premium Panduan Kesehatan - AFC Japan Store ID',
    description: 'Dapatkan koleksi E-Book premium panduan kesehatan, tips merawat lambung sensitif, maag, GERD, resep makanan sehat, dan manajemen kecemasan (anxiety) secara ilmiah.',
    keywords: 'ebook kesehatan, panduan gerd, asam lambung, manajemen anxiety, afc japan store',
    openGraph: {
        title: 'E-Book Premium Panduan Kesehatan - AFC Japan Store ID',
        description: 'Dapatkan koleksi E-Book premium panduan kesehatan terbaru dari AFC Japan Store ID',
        type: 'website',
    },
};

export default async function EBookPage({ searchParams }) {
    const categorySlug = searchParams?.kategori;

    // Fetch E-Book categories
    const categories = await prisma.eBookCategory.findMany({
        orderBy: { name: 'asc' },
    });

    // Fetch E-Books with optional category filter
    const whereClause = {
        published: true,
        ...(categorySlug && {
            category: {
                slug: categorySlug,
            },
        }),
    };

    const ebooks = await prisma.eBook.findMany({
        where: whereClause,
        include: { category: true },
        orderBy: { createdAt: 'desc' },
    });

    const serializedEBooks = ebooks.map((ebook) => ({
        ...ebook,
        createdAt: ebook.createdAt.toISOString(),
        updatedAt: ebook.updatedAt.toISOString(),
    }));

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Back to Home Link */}
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Kembali ke Katalog Produk
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full text-amber-700 mb-4 shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        E-Book Premium Panduan Kesehatan
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Pulihkan dan tingkatkan kualitas hidup Anda melalui panduan kesehatan fisik dan mental berbasis pendekatan ilmiah dan praktis. Disusun secara sistematis, mudah dipahami, dan siap diterapkan dalam kehidupan sehari-hari.
                    </p>
                </div>

                {/* Category Filter */}
                <EBookCategoryFilter categories={categories} />

                {/* E-Books Grid - 2 columns as requested */}
                {serializedEBooks.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {serializedEBooks.map((ebook) => (
                            <EBookCard key={ebook.id} ebook={ebook} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-amber-50 shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-16 h-16 mx-auto text-gray-300 mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Belum Ada E-Book
                        </h2>
                        <p className="text-gray-500">
                            E-Book premium dalam kategori ini akan segera kami rilis.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
