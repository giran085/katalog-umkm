import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { formatDate } from '@/utils/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const ebook = await prisma.eBook.findUnique({
        where: { slug: params.slug },
        include: { category: true },
    });

    if (!ebook || !ebook.published) {
        return {
            title: 'E-Book Tidak Ditemukan',
        };
    }

    return {
        title: `${ebook.title} - E-Book Premium AFC Japan Store ID`,
        description: ebook.excerpt,
        openGraph: {
            title: `${ebook.title} - E-Book Premium AFC Japan Store ID`,
            description: ebook.excerpt,
            type: 'website',
        },
    };
}

export default async function EBookDetailPage({ params }) {
    const ebook = await prisma.eBook.findUnique({
        where: { slug: params.slug },
        include: { category: true },
    });

    if (!ebook || !ebook.published) {
        notFound();
    }

    const isFree = ebook.price === 0;
    const formattedPrice = isFree ? "GRATIS" : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(ebook.price);

    const publishDate = formatDate(ebook.createdAt);

    // Custom Paragraph & List Parser to render description as rich premium design
    const renderDescription = (text) => {
        if (!text) return null;
        
        return text.split('\n').map((line, index) => {
            const trimmed = line.trim();
            
            if (trimmed === '') {
                return <div key={index} className="h-4"></div>;
            }
            
            if (trimmed === '---' || trimmed.startsWith('-----')) {
                return <hr key={index} className="border-t border-amber-100 my-8" />;
            }
            
            if (trimmed.startsWith('###')) {
                const headerText = trimmed.replace(/^###\s*/, '');
                return (
                    <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                        {headerText}
                    </h3>
                );
            }
            
            if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
                const listItemText = trimmed.replace(/^[*-\s]+/, '');
                // Check if starts with bold text
                const boldMatch = listItemText.match(/^\*\*(.*?)\*\*:(.*)/);
                if (boldMatch) {
                    return (
                        <div key={index} className="flex items-start gap-3 my-3 pl-2">
                            <span className="text-amber-500 font-bold text-lg leading-none">✔</span>
                            <span className="text-gray-700 text-base leading-relaxed">
                                <strong>{boldMatch[1]}</strong>: {boldMatch[2]}
                            </span>
                        </div>
                    );
                }
                
                return (
                    <div key={index} className="flex items-start gap-3 my-3 pl-2">
                        <span className="text-amber-500 font-bold text-lg leading-none">✔</span>
                        <span className="text-gray-700 text-base leading-relaxed">{listItemText}</span>
                    </div>
                );
            }
            
            return (
                <p key={index} className="text-gray-700 text-base leading-relaxed mb-4">
                    {trimmed}
                </p>
            );
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Breadcrumb Navigation */}
            <nav className="bg-white border-b border-gray-200 shadow-sm mb-10">
                <div className="container mx-auto px-4 py-4 max-w-5xl">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                        <li>
                            <Link href="/" className="hover:text-amber-600 transition-colors font-medium">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/ebook" className="hover:text-amber-600 transition-colors font-medium">
                                E-Book
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link
                                href={`/ebook?kategori=${ebook.category.slug}`}
                                className="hover:text-amber-600 transition-colors font-medium"
                            >
                                {ebook.category.name}
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-gray-900 font-bold truncate">
                            {ebook.title}
                        </li>
                    </ol>
                </div>
            </nav>

            <div className="container mx-auto px-4 max-w-5xl">
                {/* Main Split Layout */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-50 flex flex-col md:flex-row">
                    {/* Left: Book Cover Showcase & Sticky Checkout Box */}
                    <div className="md:w-2/5 bg-gradient-to-br from-amber-500 to-orange-600 p-8 flex flex-col justify-between items-center text-center relative overflow-hidden min-h-[350px] md:min-h-[450px]">
                        {/* Decorative background shapes */}
                        <div className="absolute -top-16 -left-16 w-48 h-48 bg-white bg-opacity-10 rounded-full"></div>
                        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-white bg-opacity-10 rounded-full"></div>

                        {/* Back Link */}
                        <Link
                            href="/ebook"
                            className="absolute top-4 left-4 z-20 text-white bg-black bg-opacity-20 hover:bg-opacity-30 transition-all px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Kembali ke E-Book
                        </Link>

                        {/* Visual Cover */}
                        <div className="relative z-10 my-auto flex flex-col items-center">
                            {ebook.image ? (
                                <img
                                    src={ebook.image}
                                    alt={ebook.title}
                                    className="w-auto h-64 md:h-72 object-contain rounded-xl shadow-2xl border-4 border-white border-opacity-40 hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="w-40 h-56 bg-white bg-opacity-20 rounded-xl flex items-center justify-center border-2 border-white border-opacity-30 shadow-2xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20 text-white opacity-80">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                            )}
                            <span className="inline-block mt-4 px-3 py-1 bg-white bg-opacity-20 text-white rounded-full text-xs font-bold tracking-wide shadow-sm border border-white border-opacity-20 uppercase">
                                📖 {ebook.category.name}
                            </span>
                        </div>
                    </div>

                    {/* Right: Title, Pricing & In-depth Details */}
                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            {/* Date Badge */}
                            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400 font-semibold">
                                <span>Dipublikasikan: {publishDate}</span>
                                <span>•</span>
                                <span>AFC Japan Store ID</span>
                            </div>

                            {/* Book Title */}
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                                {ebook.title}
                            </h1>

                            {/* Sticky Buy Box (Desktop only inside layout) */}
                            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                                <div>
                                    <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                                        Harga Investasi
                                    </span>
                                    <span className={`text-2xl font-extrabold ${isFree ? 'text-green-600' : 'text-amber-600'}`}>
                                        {formattedPrice}
                                    </span>
                                </div>

                                {ebook.purchaseUrl && (
                                    <a
                                        href={ebook.purchaseUrl}
                                        target={isFree ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        download={isFree ? `${ebook.title}.pdf` : undefined}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#d97706] hover:bg-[#b45309] text-white font-extrabold text-base px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-105"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                            {isFree ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            )}
                                        </svg>
                                        {isFree ? "Download E-Book Gratis" : "Beli E-Book Sekarang"}
                                    </a>
                                )}
                            </div>

                            {/* Book Body Content */}
                            <div className="prose prose-amber max-w-none text-gray-800 my-6">
                                {renderDescription(ebook.description)}
                            </div>
                        </div>

                        {/* Footer direct link */}
                        {ebook.purchaseUrl && (
                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                <a
                                    href={ebook.purchaseUrl}
                                    target={isFree ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    download={isFree ? `${ebook.title}.pdf` : undefined}
                                    className="text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors inline-flex items-center gap-1.5"
                                >
                                    {isFree ? "Klik di sini untuk langsung mengunduh E-Book secara Gratis ➔" : "Klik di sini untuk langsung melakukan pembelian E-Book ➔"}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
