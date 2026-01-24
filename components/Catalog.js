"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

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
                <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === 'all'
                        ? 'bg-gray-900 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                >
                    Semua
                </button>
                {categories
                    .filter(cat => !['makanan', 'snack'].includes(cat.name.toLowerCase()))
                    .map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === cat.id
                                ? 'bg-gray-900 text-white shadow-lg scale-105'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
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
