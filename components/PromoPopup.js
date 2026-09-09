"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Popup muncul otomatis saat halaman pertama kali dibuka
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Overlay Backdrop Transparan & Blur Elegan */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Container Modal Popup */}
      <div
        className={`relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-xl p-2 sm:p-3 rounded-3xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-300 transform ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100 animate-in fade-in zoom-in-95"
        }`}
      >
        {/* Tombol Silang (Close Button) Pojok Kanan Atas */}
        <button
          onClick={handleClose}
          aria-label="Tutup Promo"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/75 hover:bg-red-600 text-white transition-all duration-200 shadow-xl border border-white/30 flex items-center justify-center backdrop-blur-lg hover:scale-110 active:scale-95 group focus:outline-none"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-90" />
        </button>

        {/* Box Gambar Promo */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/40 to-black/60 flex items-center justify-center shadow-inner">
          <img
            src="https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC/promo%20(1).png"
            alt="Promo Spesial"
            className="w-full h-auto max-h-[78vh] object-contain rounded-2xl select-none"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
