// here we will create a responsive menu for the header
// we will create a new component called menu.tsx
//Add the sheet component 
//In terminal  npx shadcn@latest add sheet
//We need to put the menu in its own component 
//Create a new file in the header folder in components called menu.tsx 
//Do sfc and call it menu 
// in the return lets add a div with a class names with a flex and justify content space between gap 3
// Inside that we will have a nav with hidden by default but show on medium screens, md:flex and items center
// and cut and paste everythind from the 'space-x-2' from the index the mode toggle and the 2 buttons and put them in the menu component
// add the sheet component to the menu component
// create a nav class for meduim screens and up and add the hidden class to it
// it will have a sheet component with a sheet trigger and a sheet content
// it will have a class name of align-middle
// in the sheet trigger we will have an icon of ellipsis vertical, the dots
// under the trigger we will have the sheet content
// in the sheet content we will have a div with a class name of flex and flex-col and align items to start
// in the sheet content we will have the sheet title and the sheet description at the bottom
//we want to add menu items such as ModeToggle and Button and Link and ShoppingCart and UserIcon
//we will import the Button and ModeToggle and Link and ShoppingCart and UserIcon
// Button as child and variant of ghost 
// and in the button we will have our link to the cart page
// import sheet from the components ui sheet 
// import mode toggle from the components ui mode toggle
// import button from the components ui button
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from 'next/link';
import { ShoppingCart, EllipsisVertical } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import UserButton  from "./user-button";
const   Menu  = () => {
    return (
    <div className='flex justify-end gap-3'>
        <nav className='hidden md:flex w-full max-w-xs gap-1'> 
            <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <ShoppingCart /> Cart
                </Link>
            </Button>
           <UserButton />
        </nav>
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className='flex flex-col items-start'>
                    <SheetTitle>Menu</SheetTitle>
                    <ModeToggle />
                    <Button asChild variant='ghost' >
                        <Link href='/cart'>
                        <ShoppingCart /> Cart 
                        </Link>
                        </Button>

                        <UserButton />

                    <SheetDescription></SheetDescription>
                </SheetContent>        
             </Sheet>
        </nav>
    </div>
 );
};
 
export default Menu;
