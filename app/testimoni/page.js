"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Link from "next/link"

// Supabase project storage URL base
const SUPABASE_STORAGE_URL = "https://arupayjscegymybyswfy.supabase.co/storage/v1/object/public/AFC";

// Define the file names exactly as provided
const imageNames = [
    "testimoni (11).jpeg",
    "testimoni (12).jpeg",
    "testimoni (7).jpeg",
    "testimoni (8).jpeg",
    "testimoni (9).jpeg",
    "testimoni (10).jpeg",
    "testimoni (4).jpeg",
    "testimoni (5).jpeg",
    "testimoni (6).jpeg",
    "testimoni (1).jpeg",
    "testimoni (2).jpeg",
    "testimoni (3).jpeg"
];

const slides = imageNames.map((name, index) => ({
    id: index + 1,
    // URL encode the actual file name because the spaces and parenthesis need to be safe for HTTP requests
    image: `${SUPABASE_STORAGE_URL}/${encodeURIComponent(name)}`
}));

export default function TestimoniPage() {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    const [mounted, setMounted] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleApiChange = (newApi) => {
        setApi(newApi)

        if (newApi) {
            setCurrent(newApi.selectedScrollSnap())

            newApi.on("select", () => {
                setCurrent(newApi.selectedScrollSnap())
            })
        }
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-8 flex flex-col overflow-x-hidden">
            <div className="container mx-auto px-4 w-full flex-grow flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Testimoni Pelanggan
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        Pengalaman nyata dari mereka yang telah merasakan manfaat luar biasa dari produk premium AFC Japan.
                    </p>
                </div>

                {/* 3D Coverflow Carousel Section */}
                {/* By allowing overflow-visible on the Carousel component, adjacent items will bleed in */}
                <div className="w-full flex justify-center flex-grow">
                    <div className="w-full max-w-6xl relative px-4 md:px-12 items-center flex">
                        
                        {/* Custom Prev Button Outside Carousel Data (optional, based on shadcn UI defaults) */}
                        <button 
                            onClick={() => api?.scrollPrev()}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/50 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-md border border-gray-100 transition-all text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <Carousel 
                            setApi={handleApiChange} 
                            opts={{
                                align: "center", // Center align makes the active item center
                                loop: true // Allows continuous scrolling
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4 h-[60vh] md:h-[65vh] items-center">
                                {slides.map((slide, index) => {
                                    // Logic to determine if the slice is active or adjacent for 3D scaling
                                    const isActive = current === index;
                                    
                                    return (
                                        <CarouselItem 
                                            key={slide.id} 
                                            // Make each item take 60-70% width, allowing next/prev to show on the sides
                                            className="pl-2 md:pl-4 basis-[70%] sm:basis-[50%] md:basis-[40%] transition-all duration-500 ease-out"
                                        >
                                            <div 
                                                // Dynamic scaling and opacity based on active state
                                                className={`w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white relative cursor-pointer transition-all duration-500 ease-out mx-auto
                                                    ${isActive 
                                                        ? 'scale-100 md:scale-110 z-20 opacity-100 shadow-2xl ring-4 ring-[#534AB7]/20 object-contain' 
                                                        : 'scale-90 md:scale-95 z-10 opacity-60 hover:opacity-80 blur-[1px] hover:blur-none'}
                                                `}
                                                onClick={() => {
                                                    if(isActive) {
                                                        setSelectedImage(slide.image)
                                                    } else {
                                                        api?.scrollTo(index) // Click on side image to bring it to center
                                                    }
                                                }}
                                            >
                                                <img
                                                    src={slide.image}
                                                    alt={`Testimoni ${slide.id}`}
                                                    className="w-full h-full object-contain bg-gray-50/50"
                                                    loading="lazy"
                                                />
                                                
                                                {/* Zoom icon hint - only show on active center slide */}
                                                {isActive && (
                                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2.5 rounded-full backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </CarouselItem>
                                    )
                                })}
                            </CarouselContent>
                        </Carousel>

                        {/* Custom Next Button */}
                        <button 
                            onClick={() => api?.scrollNext()}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/50 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-md border border-gray-100 transition-all text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Navigation and Actions */}
                <div className="mt-8 mb-4 w-full flex flex-col items-center">
                    {/* Dot Navigation */}
                    <div className="flex justify-center gap-2 mb-8 flex-wrap px-4">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-[#534AB7] w-8" : "bg-gray-300 hover:bg-gray-400 w-2.5"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        &larr; Kembali ke Beranda
                    </Link>
                </div>
            </div>

            {/* Click to Zoom Modal Overlay */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md transition-all animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 md:top-6 md:right-8 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    
                    <div 
                        className="relative w-full max-w-3xl h-full flex items-center justify-center animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage} 
                            alt="Testimoni Zoomed" 
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
