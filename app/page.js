import prisma from '@/lib/prisma';
import Catalog from '@/components/Catalog';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let products = [];
  let categories = [];

  try {
    products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' }
    });

    categories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Fallback to empty to prevent build crash
  }

  const serializedProducts = products.map((product) => ({
    ...product,
    createdAt: product.createdAt.toString(),
  }));

  return <Catalog products={serializedProducts} categories={categories} />;
}
