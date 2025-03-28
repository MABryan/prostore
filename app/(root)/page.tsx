
// Code: Homepage component
// Description: This is the main page of the app.
// Define a constant variable called Homepage, and assigns an arrow function to it.
// An arrow function is a function that does not have a name.
// It replaces the function keyword with an arrow (=>) and places it between 
// // the parameters and the function body.
// Here the arrow function returns a string "Prostore".
// The string "Prostore" is wrapped in a fragment.
// A fragment is a way to group multiple elements together.
// The fragment is returned by the arrow function.
// The arrow function is assigned to the Homepage constant variable.
// Export the Homepage component.
// Import data from the db.json file.
// we want to display in a component called product list.
// we want to limit the amount of products that are displayed.



import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";


const Homepage = async () => {
    // Get latest products
    const latestProducts = (await getLatestProducts()).map(product => ({
        ...product,
        price: product.price.toString(),
        rating: Number(product.rating)
    }));
    
    return ( <>
         <ProductList  data={latestProducts} title="Newest Arrivals" limit=
         {4} 
         />
    </>
    );
};

export default Homepage;
