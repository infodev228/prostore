'use server';

// import { PrismaClient } from '../generated/prisma';

// import { PrismaClient } from '@prisma/client';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';

console.log('=========>>>prisma', await prisma.product);

// get Lateste product
export async function getLatestProducts() {
  // const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: 'desc',
    },
  });
  console.log('first 4 products=====>', products);
  return convertToPlainObject(products);
}
