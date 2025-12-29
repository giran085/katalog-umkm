import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { formatRupiah } from '@/utils/currency';
import AddToCartButton from './AddToCartButton';

export const revalidate = 0;

export async function generateStaticParams() {
    const products = await prisma.product.findMany({ select: { id: true } });
    return products.map((product) => ({
        slug: product.id.toString(),
    }));
}

export default async function ProductDetail({ params }) {
    const id = parseInt(params.slug);
    if (isNaN(id)) return notFound();

    const product = await prisma.product.findUnique({
        where: { id },
        include: { category: true },
    });

    if (!product) return notFound();

    // Serialization for Client Component compatibility
    const serializedProduct = {
        ...product,
        createdAt: product.createdAt.toString(),
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Image Section */}
                <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square md:aspect-auto md:h-[500px]">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center">
                    <div className="mb-2">
                        <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full font-medium">
                            {product.category?.name}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {product.name}
                    </h1>
                    <p className="text-2xl font-bold text-gray-900 mb-6">
                        {formatRupiah(product.price)}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {product.description}
                    </p>

                    <div className="flex gap-4">
                        <AddToCartButton product={serializedProduct} />
                    </div>
                </div>
            </div>
        </div>
    );
}
