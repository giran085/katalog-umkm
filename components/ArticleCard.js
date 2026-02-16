"use client";

import Link from 'next/link';
import { formatDate, calculateReadingTime } from '@/utils/seo';

export default function ArticleCard({ article }) {
    const readingTime = calculateReadingTime(article.content);
    const publishDate = formatDate(article.publishedAt || article.createdAt);

    return (
        <Link href={`/artikel/${article.slug}`} className="group block h-full">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {article.featuredImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                        <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
                {!article.featuredImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-16 h-16 text-white opacity-50"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                    </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                    {article.category && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-3 w-fit">
                            {article.category.name}
                        </span>
                    )}

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <time dateTime={article.publishedAt || article.createdAt}>
                            {publishDate}
                        </time>
                        <span>{readingTime} menit baca</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
