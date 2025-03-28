// Zod Validation and Type Inference 
// this file is for our types 
// we can infer from our Zod schema
// and use them in our code
// install zod
// npm install zod
// we will put a validators file in the lib folder
// we will use z.infer to get the type of the schema
// we will create a type for the product
// we will use the type in our code

import { z } from 'zod';
import { productSchema } from '@/lib/validators';

export type Product = z.infer<typeof productSchema> & {
  id: string;
  rating: number;
  createdAt:Date;
  
   
};