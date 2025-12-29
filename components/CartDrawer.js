"use client";

import { useCartStore } from '@/store/useCartStore';
import { formatRupiah } from '@/utils/currency';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
    const { items, isOpen, closeDrawer, removeItem, decrementItem, addItem } = useCartStore();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        // Basic WhatsApp Generator
        const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282128797844";
        let message = "Halo, saya mau pesan:\n";
        items.forEach(item => {
            message += `- ${item.quantity}x ${item.name} (${formatRupiah(item.price)})\n`;
        });
        message += `Total: ${formatRupiah(totalPrice)}`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
                    onClick={closeDrawer}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] md:w-[400px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-bold text-gray-900">Keranjang Belanja</h2>
                        <button onClick={closeDrawer} className="p-2 hover:bg-gray-100 rounded-full text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <p>Keranjang masih kosong</p>
                                <button onClick={closeDrawer} className="mt-4 text-gray-900 font-medium underline decoration-2 hover:text-black">
                                    Belanja sekarang
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b pb-4 last:border-0">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                                        <p className="text-sm font-medium text-gray-900 mt-1">{formatRupiah(item.price)}</p>

                                        <div className="flex items-center gap-3 mt-3">
                                            <button
                                                onClick={() => decrementItem(item.id)}
                                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-900 font-bold"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm font-bold text-gray-900 w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => addItem(item)}
                                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-900 font-bold"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-4 border-t bg-gray-50">
                            <div className="flex justify-between mb-4 text-gray-900">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-bold text-xl">{formatRupiah(totalPrice)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <span>Pesan Sekarang via WhatsApp</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
