export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                {/* Elegant blue spinner */}
                <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-full border-3 border-blue-100"></div>
                    <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-blue-600 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-300 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
                </div>
                <p className="text-sm text-blue-600 font-medium animate-pulse tracking-wide">
                    Memuat...
                </p>
            </div>
        </div>
    );
}
