// Create a footer component
// Bring in the APP NAME constant from the lib/constants file
// we want to display the year but not hard code it to avoid updating it every year,
// so we will create a variable to hold the current year
// and a footer class that will display the year and the app name and py5 tag around it and 
// flex justify-center to center the content
// next to that we will display the app name and the current year, and All rights reserved
import { APP_NAME } from '@/lib/constants';

const  Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='border-t'>
            <div className='p-5 flex justify-center'>
            <p>{APP_NAME} &copy; {currentYear} All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer; 