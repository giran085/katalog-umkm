"use client";

import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function Navbar() {
    const { items, toggleDrawer } = useCartStore();
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const [totalVisitors, setTotalVisitors] = useState(0);

    useEffect(() => {
        // Fetch total visitor count from Supabase
        const fetchVisitorCount = async () => {
            if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

            try {
                // Count total unique sessions (visitors)
                const res = await fetch(
                    `${SUPABASE_URL}/rest/v1/rpc/count_unique_visitors`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': SUPABASE_ANON_KEY,
                            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        },
                    }
                );

                if (res.ok) {
                    const data = await res.json();
                    setTotalVisitors(data || 0);
                } else {
                    // Fallback: count rows directly
                    const countRes = await fetch(
                        `${SUPABASE_URL}/rest/v1/page_visits?select=session_id`,
                        {
                            headers: {
                                'apikey': SUPABASE_ANON_KEY,
                                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                            },
                        }
                    );
                    if (countRes.ok) {
                        const data = await countRes.json();
                        const uniqueSessions = new Set(data.map(v => v.session_id));
                        setTotalVisitors(uniqueSessions.size);
                    }
                }
            } catch (error) {
                // Silently fail
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
            <div className="h-16 px-4 md:px-8 flex items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        AFC Japan Store ID Katalog
                    </Link>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-blue-500">
                            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {totalVisitors.toLocaleString('id-ID')} orang telah berkunjung
                    </span>
                </div>

                <button
                    onClick={toggleDrawer}
                    className="relative p-2 bg-[#25D366] hover:bg-[#128C7E] rounded-full transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="#1F2937"
                        className="w-6 h-6"
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
            </div>
        </nav>
    );
}
