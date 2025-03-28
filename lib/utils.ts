
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Convert Prisma object to JSON
export function convertToPlainObject<T>(value: T): T 
{
  return JSON.parse(JSON.stringify(value));
}

// create a utility function to format a number with decimal places, we want to get 
// the int and the decimal part of the number, we will use the split method to split the number
export function formatNumber(num: number): string {
  const parts = num.toString().split('.');
  const int = parts[0];
  const dec = parts[1] || '';
  return `${int}.${dec.padEnd(2, '0')}`;
}

