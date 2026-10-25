"use client";

import Link from 'next/link';
import { formatRupiah } from '@/utils/currency';
import { useCartStore } from '@/store/useCartStore';

function isHorizontalImage(url) {
    if (!url) return false;
    const horizontalKeywords = [
        '2027%20(1)', '2027%20(2)', '2027%20(3)', '2027%20(8)',
        '2027 (1)', '2027 (2)', '2027 (3)', '2027 (8)'
    ];
    return horizontalKeywords.some(keyword => url.includes(keyword));
}

export default function ProductCard({ product }) {
    const { addItem } = useCartStore();
    const isHorizontal = isHorizontalImage(product.image);

    return (
        <div className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 ${isHorizontal ? 'sm:col-span-2' : 'col-span-1'}`}>
            <Link 
                href={`/product/${product.id}`} 
                className={`block relative overflow-hidden group bg-slate-50 ${isHorizontal ? 'aspect-[1733/907]' : 'aspect-square'}`}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md">
                    {product.category?.name || 'AFC Produk'}
                </span>
                {isHorizontal && (
                    <span className="absolute top-2.5 right-2.5 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                        Edisi Spesial
                    </span>
                )}
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
