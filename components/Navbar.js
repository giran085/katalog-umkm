"use client";

import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
    const { items, toggleDrawer } = useCartStore();
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 px-4 md:px-8 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
                AFC Japan Store ID Katalog
            </Link>

            <button
                onClick={toggleDrawer}
                className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-700"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>

                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {totalItems}
                    </span>
                )}
            </button>
        </nav>
    );
}
