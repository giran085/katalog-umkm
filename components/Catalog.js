"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Catalog({ products, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = (() => {
        const list = selectedCategory === 'all'
            ? products
            : products.filter(p => p.categoryId === selectedCategory);

        if (selectedCategory === 'all') {
            // Sort: SOP Subarashi first, then mix others (no consecutive same brand)
            const sop = list.filter(p => p.name.includes('SOP Subarashi'));
            const others = list.filter(p => !p.name.includes('SOP Subarashi'));

            // Mix others: round-robin by brand name
            const sorted = [];
            const groups = {};
            others.forEach(p => {
                const brand = p.name;
                if (!groups[brand]) groups[brand] = [];
                groups[brand].push(p);
            });
            const brandKeys = Object.keys(groups);
            let added = true;
            while (sorted.length < others.length) {
                added = false;
                for (const key of brandKeys) {
                    if (groups[key].length > 0) {
                        sorted.push(groups[key].shift());
                        added = true;
                    }
                }
                if (!added) break;
            }

            return [...sop, ...sorted];
        }

        return list;
    })();

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    AFC Japan Store ID - Premium Health Solutions
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Produk Kesehatan Standar Jepang Investasi terbaik untuk tubuh Anda melalui nutrisi fungsional premium untuk kesehatan otak, organ, dan sistem imun.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories
                    .filter(cat => !['makanan', 'snack'].includes(cat.name.toLowerCase()))
                    .map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
                            style={selectedCategory === cat.id
                                ? { backgroundColor: '#F43F5E', color: '#fff', boxShadow: '0 4px 14px rgba(244,63,94,0.35)', transform: 'scale(1.05)' }
                                : { backgroundColor: '#FFF1F4', color: '#BE185D', border: '1px solid #FECDD3' }
                            }
                            onMouseEnter={e => {
                                if (selectedCategory !== cat.id) {
                                    e.currentTarget.style.backgroundColor = '#FECDD3';
                                    e.currentTarget.style.color = '#9D174D';
                                }
                            }}
                            onMouseLeave={e => {
                                if (selectedCategory !== cat.id) {
                                    e.currentTarget.style.backgroundColor = '#FFF1F4';
                                    e.currentTarget.style.color = '#BE185D';
                                }
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}

                {/* Artikel Button */}
                <Link
                    href="/artikel"
                    className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:scale-105"
                >
                    📰 Artikel
                </Link>

                {/* Testimoni Button */}
                <Link
                    href="/testimoni"
                    className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#534AB7' }}
                >
                    ⭐ Testimoni
                </Link>

                {/* E-Book Button */}
                <Link
                    href="/ebook"
                    className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#D97706' }}
                >
                    📚 E-Book
                </Link>
            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">Tidak ada produk di kategori ini.</p>
                </div>
            )}

            {/* Home CTA Section */}
            <div className="mt-12 p-5 bg-gradient-to-r from-[#FFF1F4] to-[#F0F4FF] border border-pink-100 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">
                        Butuh konsultasi atau info produk AFC Japan?
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                        Hubungi kami di{' '}
                        <span className="font-bold text-[#128C7E]">0822-4048-9010</span>{' '}
                        — Salam hangat dari{' '}
                        <span className="font-medium text-gray-700">Distributor Resmi AFC Indonesia</span>
                    </p>
                </div>
                <a
                    href="https://wa.me/6282240489010?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20AFC%20Japan.%20Bisa%20info%20lebih%20 lanjut%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm hover:shadow-md"
                >
                    Chat Sekarang
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

