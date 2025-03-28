//Product Details Page 
//We want to click on a product (shirt) image, and it takes us to product/ and then the slug (url) 
//Thus product/polo-stretch-shirt
//So we want to fetch the data by that slug and then display it on the page.
//The first step is to create the action that fetches the data by this slug.
//pass in props, and get the params from the props
//get the slug from the params
//fetch the product by the slug
//const ProductDetailsPage 
// for the params, the types will be a Promise, and the slug will be a string
// import badge from shadcn library
// we want 5 columns in a section, and span 2 columns for the image
// the first will be the images column
// small screens 1 but medium sceens cols 5 
// we wiil add the rating and number of reviews
// add the details column
// add the product details
// add the actions column
// add the product price
// we need to add the buttons for out of stock and in stock


import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from '@/components/shared/product/product-price';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductImages from "@/components/shared/product/product-images";

const ProductDetailsPage = async (props: { 
    params: Promise <{ slug:string } >
}) => {
    const { slug } = await props.params;

    const product = await getProductBySlug(slug);
    if (!product) {
        return notFound();
    }

    // Fetch product data by slug here
    return <> 


    <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
            {/* Images Column */}
            <div className='col-span-2'>
                <ProductImages images={product.images} />
            </div>
            {/* Product Details Column */}
            <div className='col-span-2 p-5'>
            <div className="flex flex-col gap-6">

            <p>
                 {product.brand} {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p>{product.rating} of {product.numReviews} Reviews</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3"></div>


            <ProductPrice value={parseFloat(product.price)}
            className="w-24 rounded-full bg-green-100
            text-green-700 text-center py-1 px-2"
            />

       <div className="mt-10"></div>
       <p className="font-semibold">Description</p>
       <p>{product.description}</p>

                     
            </div>
        </div>

    {/* Actions Column with the card component */}
{/* Card Component */}
<Card>
    <CardContent className='p-4'>  
        <div className="mb-2 flex justify-between">
            <div>Price</div>
        </div>

        <ProductPrice value={parseFloat(product.price)} />
        <div className="mb-2 flex justify-between">
            <div>Status</div>
            {product.stock > 0 ? (
                <Badge>In Stock</Badge>
                ) : (
                <Badge>Out of Stock</Badge>

            )}
        </div>

            {product.stock > 0 && (
                <div className="flex-center">
                    <Button className='w-full'>Add To Cart</Button>
                </div>
            )}
    </CardContent>
</Card>
{/* End Card Component */}

</div>
   
</section>
</> 
};   


export default ProductDetailsPage;
 
