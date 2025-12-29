"use client";

import Link from 'next/link';
import { formatRupiah } from '@/utils/currency';
import { useCartStore } from '@/store/useCartStore';

export default function ProductCard({ product }) {
    const { addItem } = useCartStore();

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
            <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden group">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                    {product.category?.name || 'Category'}
                </span>
            </Link>

            <div className="p-4 flex flex-col flex-1">
                <Link href={`/product/${product.id}`} className="block">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-gray-500 text-sm line-clamp-2 mt-1 mb-3 flex-1">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-lg font-bold text-gray-900">
                        {formatRupiah(product.price)}
                    </span>
                    <button
                        onClick={() => addItem(product)}
                        className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-1 active:scale-95 transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
