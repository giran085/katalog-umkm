"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function CategoryFilter({ categories }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('kategori');

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Kategori Artikel</h3>
            <div className="flex flex-wrap gap-2">
                <Link
                    href="/artikel"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!currentCategory
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    Semua Artikel
                </Link>

                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/artikel?kategori=${category.slug}`}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${currentCategory === category.slug
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
