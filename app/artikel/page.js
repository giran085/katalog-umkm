import prisma from '@/lib/prisma';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import { generateBlogSchema } from '@/utils/seo';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Artikel Kesehatan & Nutrisi - AFC Japan Store ID',
    description: 'Baca artikel terbaru tentang kesehatan, nutrisi, vitamin, makanan sehat, buah-buahan, sayuran, dan olahraga dari AFC Japan Store ID. Tips kesehatan untuk hidup lebih sehat.',
    keywords: 'artikel kesehatan, nutrisi, vitamin, makanan sehat, buah-buahan, sayuran, olahraga, AFC Japan',
    openGraph: {
        title: 'Artikel Kesehatan & Nutrisi - AFC Japan Store ID',
        description: 'Baca artikel terbaru tentang kesehatan, nutrisi, dan tips hidup sehat',
        type: 'website',
    },
};

export default async function ArtikelPage({ searchParams }) {
    const categorySlug = searchParams?.kategori;

    // Fetch categories
    const categories = await prisma.articleCategory.findMany({
        orderBy: { name: 'asc' },
    });

    // Fetch articles with optional category filter
    const whereClause = {
        published: true,
        ...(categorySlug && {
            category: {
                slug: categorySlug,
            },
        }),
    };

    const articles = await prisma.article.findMany({
        where: whereClause,
        include: { category: true },
        orderBy: { publishedAt: 'desc' },
    });

    const serializedArticles = articles.map((article) => ({
        ...article,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        publishedAt: article.publishedAt?.toISOString() || null,
    }));

    const blogSchema = generateBlogSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Artikel Kesehatan & Nutrisi
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Temukan informasi terkini seputar kesehatan, nutrisi, dan tips hidup sehat dari AFC Japan Store ID.
                            <br />
                            Distributor resmi AFC Bandung
                        </p>
                    </div>

                    {/* Category Filter */}
                    <CategoryFilter categories={categories} />

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
        </>
    );
}
