export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                {/* Elegant spinner - SOP Subarashi blue */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-100"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#534AB7] animate-spin"></div>
                </div>
                <p className="text-sm text-gray-500 font-medium animate-pulse">
                    Memuat produk...
                </p>
            </div>
        </div>
    );
}
