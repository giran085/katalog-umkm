"use client";

import { useCartStore } from '@/store/useCartStore';

export default function AddToCartButton({ product }) {
    const { addItem, openDrawer } = useCartStore();

    const handleAddToCart = () => {
        addItem(product);
        openDrawer();
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors active:scale-95 transform w-full md:w-auto text-center"
        >
            Tambah ke Keranjang
        </button>
    );
}
