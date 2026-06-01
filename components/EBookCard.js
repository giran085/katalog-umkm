"use client";

import { formatDate } from '@/utils/seo';
import Link from 'next/link';

export default function EBookCard({ ebook }) {
    const isFree = ebook.price === 0;
    const formattedPrice = isFree ? "GRATIS" : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(ebook.price);

    const publishDate = formatDate(ebook.createdAt);

    return (
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 overflow-hidden hover:shadow-2xl hover:border-amber-300 transition-all duration-300 flex flex-col md:flex-row h-full group relative">
            {/* Absolute overlay link to make whole card clickable, except the CTA button */}
            <Link
                href={`/ebook/${ebook.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Detail ${ebook.title}`}
            />

            {/* Left side: Book Cover Mockup / Image */}
            <div className="relative md:w-2/5 min-h-[220px] bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center p-6 overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>

                {ebook.image ? (
                    <div className="relative z-10 w-full h-full max-h-[200px] flex items-center justify-center">
                        <img
                            src={ebook.image}
                            alt={ebook.title}
                            className="w-auto h-full max-h-[180px] object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-300 border-2 border-white border-opacity-40"
                        />
                    </div>
                ) : (
                    <div className="z-10 text-white flex flex-col items-center text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-16 h-16 mb-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                        <span className="font-bold text-sm">AFC Premium E-Book</span>
                    </div>
                )}
            </div>

            {/* Right side: Book Metadata & Content */}
            <div className="p-6 md:w-3/5 flex flex-col justify-between flex-1">
                <div>
                    {/* Category Badge & Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                        {ebook.category && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-800 bg-amber-100 rounded-full">
                                📖 {ebook.category.name}
                            </span>
                        )}
                        <span className="text-xs text-gray-400 font-medium">
                            {publishDate}
                        </span>
                    </div>

                    {/* Book Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                        {ebook.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {ebook.excerpt}
                    </p>
                </div>

                {/* Bottom Pricing & Checkout button */}
                <div className="pt-4 border-t border-amber-50">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        {/* Price */}
                        <div>
                            <span className="block text-xs text-gray-400 uppercase tracking-wider font-semibold">Harga Investasi</span>
                            <span className={`text-xl font-extrabold ${isFree ? 'text-green-600' : 'text-amber-600'}`}>{formattedPrice}</span>
                        </div>

                        {/* Checkout CTA Button */}
                        {ebook.purchaseUrl && (
                            <a
                                href={ebook.purchaseUrl}
                                target={isFree ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                download={isFree ? `${ebook.title}.pdf` : undefined}
                                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:scale-105 relative z-20"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    {isFree ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                        />
                                    )}
                                </svg>
                                {isFree ? "Download (FREE)" : "Beli E-Book"}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
