"use client";

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function CategoryFilter({ categories }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('kategori');

    const solusiSehat = categories.find(c => c.name === 'Solusi Sehat');
    const otherCategories = categories.filter(c => c.name !== 'Solusi Sehat');

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

                {solusiSehat && (
                    <Link
                        href={`/artikel?kategori=${solusiSehat.slug}`}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                        style={currentCategory === solusiSehat.slug
                            ? { backgroundColor: '#059669', color: '#fff', boxShadow: '0 4px 12px rgba(5,150,105,0.35)', transform: 'scale(1.05)' }
                            : { backgroundColor: '#D1FAE5', color: '#047857', border: '1px solid #6EE7B7' }
                        }
                        onMouseEnter={e => {
                            if (currentCategory !== solusiSehat.slug) {
                                e.currentTarget.style.backgroundColor = '#6EE7B7';
                                e.currentTarget.style.color = '#065F46';
                            }
                        }}
                        onMouseLeave={e => {
                            if (currentCategory !== solusiSehat.slug) {
                                e.currentTarget.style.backgroundColor = '#D1FAE5';
                                e.currentTarget.style.color = '#047857';
                            }
                        }}
                    >
                        🌿 {solusiSehat.name}
                    </Link>
                )}

                {otherCategories.map((category) => (
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
