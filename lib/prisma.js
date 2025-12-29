import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
    // Fallback to dummy URL during build if env is missing
    // This prevents "Environment variable not found" crash
    const url = process.env.DATABASE_URL || 'postgresql://build:build@localhost:5432/build';

    return new PrismaClient({
        datasources: {
            db: {
                url: url,
            },
        },
    });
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
