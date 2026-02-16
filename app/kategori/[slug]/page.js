import prisma from '@/lib/prisma';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const category = await prisma.articleCategory.findUnique({
        where: { slug: params.slug },
    });

    if (!category) {
        return {
            title: 'Kategori Tidak Ditemukan',
        };
    }

    return {
        title: `${category.name} - Artikel AFC Japan Store ID`,
        description: category.description || `Baca artikel terbaru dalam kategori ${category.name}`,
        keywords: `${category.name}, artikel, kesehatan, AFC Japan`,
    };
}

export default async function KategoriPage({ params }) {
    const category = await prisma.articleCategory.findUnique({
        where: { slug: params.slug },
    });

    if (!category) {
        notFound();
    }

    const articles = await prisma.article.findMany({
        where: {
            published: true,
            categoryId: category.id,
        },
        include: { category: true },
        orderBy: { publishedAt: 'desc' },
    });

    const serializedArticles = articles.map((article) => ({
        ...article,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        publishedAt: article.publishedAt?.toISOString() || null,
    }));

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center gap-2 text-sm text-gray-600">
                        <li>
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/artikel" className="hover:text-blue-600 transition-colors">
                                Artikel
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-gray-900 font-medium">{category.name}</li>
                    </ol>
                </nav>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {category.name}
                    </h1>
                    {category.description && (
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {category.description}
                        </p>
                    )}
                    <div className="mt-6">
                        <Link
                            href="/artikel"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                            Lihat Semua Kategori
                        </Link>
                    </div>
                </div>

                {/* Articles Grid */}
                {serializedArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serializedArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-16 h-16 mx-auto text-gray-400 mb-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                            />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Belum Ada Artikel
                        </h2>
                        <p className="text-gray-600">
                            Artikel dalam kategori ini akan segera hadir.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
