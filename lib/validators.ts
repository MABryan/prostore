// create the schema for the data, such an inserting products  
// the price will have 2 decimal places, the name and slug must be at least 3 characters long,
// we will create a helper function to validate the data against the schema
// wwe want to put price in its own variable called currency and set it to z


import { z } from 'zod';

const currency = z

.string()
.refine((val) => /^\d+(\.\d{1,2})?$/.test(val), {
  message: 'Price must be a number with up to 2 decimal places',
}); 

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  slug: z.string().min(3, 'Slug must be at least 3 characters long'),
  category: z.string(),
  description: z.string(),
  rating: z.number(),
  numReviews: z.number(),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  isFeatured: z.boolean(),
  brand: z.string().nullable(), 
  price: currency
   
});