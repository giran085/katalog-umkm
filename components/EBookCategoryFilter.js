"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function EBookCategoryFilter({ categories }) {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('kategori');

    return (
        <div className="bg-white rounded-2xl shadow-md border border-amber-50 p-6 mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                📂 Kategori E-Book
            </h3>
            <div className="flex flex-wrap gap-2">
                <Link
                    href="/ebook"
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${!currentCategory
                        ? 'bg-amber-600 text-white shadow-md scale-105'
                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-100'
                        }`}
                >
                    Semua E-Book
                </Link>

                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/ebook?kategori=${category.slug}`}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${currentCategory === category.slug
                            ? 'bg-amber-600 text-white shadow-md scale-105'
                            : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-100'
                            }`}
                    >
                        📖 {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
