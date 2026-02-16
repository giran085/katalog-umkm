"use client";

import { formatDate, calculateReadingTime } from '@/utils/seo';

export default function ArticleContent({ article }) {
    const readingTime = calculateReadingTime(article.content);
    const publishDate = formatDate(article.publishedAt || article.createdAt);

    return (
        <article className="prose prose-lg max-w-none">
            {article.category && (
                <a
                    href={`/kategori/${article.category.slug}`}
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full mb-4 no-underline hover:bg-blue-700 transition-colors"
                >
                    {article.category.name}
                </a>
            )}

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
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
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                    <span>{article.author}</span>
                </div>

                <div className="flex items-center gap-2">
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
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                    </svg>
                    <time dateTime={article.publishedAt || article.createdAt}>
                        {publishDate}
                    </time>
                </div>

                <div className="flex items-center gap-2">
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
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{readingTime} menit baca</span>
                </div>

                <div className="flex items-center gap-2">
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
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span>{article.views} views</span>
                </div>
            </div>

            {article.featuredImage && (
                <div className="mb-8 -mx-4 md:mx-0">
                    <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            )}

            <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.keywords && article.keywords.length > 0 && (
                <div className="mt-12 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                        {article.keywords.map((keyword, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
