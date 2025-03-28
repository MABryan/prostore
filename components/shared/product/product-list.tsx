// Here we want to display in a component called product list.
// this will take in props so we want to destructure the props.
// we want to display the products in a grid.
// data and title that will be placed into an h2 tag.
// for the types for now we will use any. Optional title/
// in the return a div with class name and spacing on the y axis, thus my-10.
// an h2 tag with the title prop.
// export the ProductList component.
// margin bottom 4 to push the products down.
// we want to show the products in a grid.
// so data.length > 0, we want to display the products in a grid.
// show something else if there are no products.
// map through the data and return a product name.
// we want this wrapped in grid classes.
// grid.grid.cols-1, thus a 1 column grid.
// but with a small screen we want to display 2 columns.
// thus grid.cols-2.
//on medium screens we want to display 3 columns.
// thus grid.cols-3.
// on large screens we want to display 4 columns.
// thus grid.cols-4.
// inside that div is where we want to create our list of products.
// data.map, pass in our function, and we want to call each one product.
// we want to limit the amount of products that are displayed.
// we want to add the product card component.
// this will replace the div with the product name.
// we want to pass in the product as a prop.
// first we need to install the shadcn ui library.
// npx shadcn@latest add card 
// set product key to the product slug.
// import the product card component.


 
import ProductCard from "./product-card";


const ProductList = ({
    
    data,
    title,
    limit,
 }: {
    data: { id: string; name: string; slug: string; category: string; description: string; rating: number; numReviews: number; stock: number; images: string[]; isFeatured: boolean; brand: string | null; price: string; createdAt: Date }[];
    title?: string;
    limit?:number;
 }) => {
        const limitedData = limit ? data.slice(0, limit) : data;

    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{ title }</h2>
            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-4 gap-4" >
                    {limitedData
                    .map((product) => (
                    <ProductCard key={product.slug} product={product} />
                    ))}        
            </div>
            ) : (
                <div>
                <p>No Products Found</p> 
                </div>
            )} 
         </div>
     );
};

export default ProductList;

