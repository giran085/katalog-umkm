"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Catalog({ products, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.categoryId === selectedCategory);

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
        </div>
    );
}

