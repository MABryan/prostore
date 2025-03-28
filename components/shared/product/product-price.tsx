// Product Price Component
// This component will display the price of the product
// It will be used in the Product component
// In components / shared / product 
// New file product-price.tsx
// this will take in a value and an optional className if we want to style it differently
// with the types for these props, we will have a value of type number and className of number, and className of
// optional so we add ? after the name of the prop, then string after the colon
// above the return statement, we will add 2 decimal places to the value
// we will create a variable called stringValue and set it to the value passed in, then call toFixed(2) on it
// import the utility function cn from classnames
// we will destructure the intValue and floatValue from the stringValue.split('.') method
// we will return a paragraph element with the className of text-2xl and the className passed in
// we will display the intValue and floatValue inside the paragraph element
// in the paragraph element, we will display the intValue and floatValue, the dollar sign will be small with
// a span element and 2 classes making it smaller and align-super to push it up
// and the floatValue will be large with a span element
// we want to do the same for the floatValue but with a larger font size with super,
// a dot and the floatValue


import { cn } from '@/lib/utils';

const ProductPrice  = ({ value, className }: { value: number; className?:
string; }) => {
    // Add 2 decimal places to the value
    const stringValue = value.toFixed(2);
    // Get the int and the decimal part (float) with split
    const [intValue, floatValue] = stringValue.split('.');
    // Return the price
    // we want to display a dynamic text with 2xl font size and the className passed in with
    // a className prop
    return (
        <p className={cn('text-2xl', className)}>
            <span className="text-xs align-super">$</span>
            <span>{intValue}</span>
            <span className="text-xs align-super">.{floatValue}</span>
        </p>
    );
};

export default ProductPrice;