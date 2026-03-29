export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                {/* Elegant spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#F43F5E] animate-spin"></div>
                </div>
                <p className="text-sm text-gray-500 font-medium animate-pulse">
                    Memuat artikel...
                </p>
            </div>
        </div>
    );
}
