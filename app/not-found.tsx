// here we will create a not found page for the app
// we will return a div with a message that says "Page not found"
// this will have a button with an on click which means that when the button is clicked
// the user will be redirected to the homepage, this will be a client component, and we 
// will use the app name and the button component from shad cn
// in the return we will add a div with classes flex justify-center items-center h-screen
// and a button with the on click event that will redirect the user to the homepage
// image src will be the app name and the alt will be the app name
// the button will have the text "Go back home"
// export the not found page component
// set the priority to be true 

'use client'
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import {Button} from '@/components/ui/button';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src='/images/logo.svg' 
                width={48}
                height={48}
                alt={`${APP_NAME} logo`} 
                priority={true} 
            />
            <div className="p-6 w-1/3 rounded-lg shadow-md-text-center">
            <h1 className="h1 text-3xl-font-bold mb4">Not Found</h1>
            <p className="text-destructive">Could not find requested page</p>
            <Button 
                variant='outline'
                className='mt-4 ml-2'
                onClick={() => (window.location.href = '/')}
            >
                Back to Home
            </Button>
            </div>
        </div>
    );
};
 
export default NotFoundPage;

