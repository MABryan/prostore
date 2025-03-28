'use server';
// this is a server-side file
// we will create a function that will return all products
// from the database, it willl initially return a prisma object
// but we will convert it to a JSON object
// we will initialize a new PrismaClient object
// then fetch all products from the database
// take will specify the number of products to fetch
// we will disconnect the client and return the products
// orderBy will specify the order in which the products will be fetched
// createdAt: 'desc' will fetch the products in descending order of their creation date
// finally we will return the data
// We want to click on a product (shirt) image, and it takes us to product/ and then the slug (url) 
//Thus product/polo-stretch-shirt
//So we want to fetch the data by that slug and then display it on the page.
//The first step is to create the action that fetches the data by this slug.
// create the page in the app folder called product/[slug].tsx

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
        orderBy: {  createdAt: 'desc' },
    });
  return convertToPlainObject(data);
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
      where: { slug: slug },
    });
} 