// Product Images Component 
//We want clickable large and small images 
//We loop through the images, display them here based on whichever one is current,
//and we will have a state called current 
// the function ProductImages will take in a prop called images, with an array of string
// return initilly images 
// we want to make this a client component because we want to use state
// and we want to use the useState hook
// under the large image, we will display the small images by looping through the images
// and displaying them
// put them in a class of flex so that they are in a row
// we want be able to click on the small images and have them change the large image
// also show a border based on if it is the current image or not
// add an onClick event to the small images
// and set the current image to the one that is clicked
// add the conditional class to the small images

'use client';
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";



const ProductImages = ({ images }: { images: string[] }) => {
    const [current, setCurrent] = useState(0);

    return <div className="space-y-4" >
    <Image src={images[current]} alt='product image' width={1000}
    height={1000} className='min-h-[300px] object-cover object-center' 
    />
    <div className="flex">
        {images.map((image, index) => (
            <div 
            key={image} 
            onClick={() => setCurrent(index)}
             className={cn(
                'border mr-2 cursor-pointer hover:border-orange-600', 
                current === index &&'border-orange-500'
            )}
              >
                <Image src={image} alt='image' width={100} height={100}/>
            </div>
        ))}
        </div>
  </div>;
};
 
export default ProductImages;

