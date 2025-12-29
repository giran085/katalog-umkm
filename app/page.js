import prisma from '@/lib/prisma';
import Catalog from '@/components/Catalog';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  });

  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' }
  });

  const serializedProducts = products.map((product) => ({
    ...product,
    createdAt: product.createdAt.toString(),
  }));

  return <Catalog products={serializedProducts} categories={categories} />;
}
