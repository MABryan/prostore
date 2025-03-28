// create a new file called mode-toggle.tsx 
// we will use hooks in this file to toggle between light and dark mode
// anything that is dynamic in nature should be a client-side component,
// because by default Next.js is a server-side rendering framework
// so we 'use client' to make it a client-side component, so that we can use hooks
// in this file
// also need the Dropdown trigger component from the dropdown-menu.tsx file
// we will add a button inside the trigger component
// the button will be an icon Sun Moon SunMoon 
// we need to check the theme value from the useTheme hook
// if the theme is 'system' we will show the SunMoon icon
// if the theme is 'dark' we will show the Sun icon
// if the theme is 'light' we will show the Moon icon
// we will also add a DropdownMenu component
// and wrap the DropdownMenuTrigger component inside it
// we will also add a DropdownMenuContent component
// and wrap the DropdownMenuContent component inside it
// we will also add a DropdownMenuLabel component
// and wrap the DropdownMenuLabel component inside it
// we will also add a DropdownMenuSeparator component
// and wrap the DropdownMenuSeparator component inside it
// to make sure a component is mounted before we use it, we will use the useEffect hook
// we will set the mounted state to true in the useEffect <hook>    </hook> 
// add the dropdown-menu content
// add the dropdown-menu label
// we also need to add the check box items for the dropdown menu

'use client';
import { useEffect, useState } from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu,
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuCheckboxItem
        
 } from '@/components/ui/dropdown-menu';
import {useTheme} from 'next-themes';
import {SunIcon, MoonIcon, SunMoon} from 'lucide-react';


const ModeToggle  = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button 
            variant='ghost' 
            className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                { theme === 'system' ? (
                    <SunMoon />
                ) : theme === 'dark' ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}

            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
                checked={theme === 'system'}
                onClick={() => setTheme('system')}
            >
                System 
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme('dark')}
            >
                Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
                checked={theme === 'system'}
                onCheckedChange={() => setTheme('light')}
            >
                Light 
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;



// Now, we need to import this new component in the header/index.tsx file