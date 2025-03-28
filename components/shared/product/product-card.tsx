// we want to add the product card component.
// this will replace the div with the product name.
// we want to pass in the product as a prop.
// set the product card component to a constant variable.
// import the link component from next.
// import the image component from next.
// in the return statement we want the card component, 
// we will import it from the ui card.
// inside the card will be the header and the content.
// CardHeader will have padding of 0, and item center.
// in the header we will have an image, with a link around it.
// the link will go to the product page.
// include backticks for the link, and the slug.
// remember we have an array of images, so we want to display the first image.
// this will take the zero index.
// we want to display the image, name, and price.
// we want to add the CardContent component, under the header.
// set the className to p-4, ang grid with a gap of 4.
// here we will add the brand with a text of extra small, and add the product.brand.
// we will then add a link to the product page, this will wrap an h2 with a text of small and font medium.
// add the rating anfd the price to the product card with a div under the link.
//  .flex-between.gap-4 means flex between with a gap of 4.
//  .text-xs means text extra small.
//  .text-sm.font-medium means text small and font medium.
// add a paragraph with the rating 
// we want to show the price, but first make sure it is in stock.
// if it is not in stock, we want to show out of stock with a ternary.
// product.stock  > 0 ? () : ()
// this means if the product stock is greater than 0, show the price, else show out of stock.
// if it is > 0 add a paragraph with font bold and product.price.
// if it is not in stock, add a paragraph with a class of text-destructive and text out of stock.
// import the productType from types.

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

 

const ProductCard  = ({product }: {product: Product}) => {
    return (<Card className="w-ful max-w-sm">
        <CardHeader className="p-0 items-center">
            <Link href={`/products/${product.slug}`}>
                    <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    width={300}
                    height={300}
                    priority={true} />
            </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
            <div className="text-xs">{product.brand}</div>
            <Link href={`/products/${product.slug}`}>
                <h2 className="text-sm font-medium">{product.name}</h2>
            </Link>
            <div className="flex-between gap-4">
                <p>{product.rating} Stars</p>
                {product.stock > 0 ? (
                    <ProductPrice value={Number(product.price)} />
                ) : (
                    <p className="text-destructive">Out of Stock</p>
                )}
            </div>
        </CardContent>
    </Card>
    );
   };

 
export default ProductCard;
