//Adding the user button
//Go to component / shared / header user-button.tsx 
// we need to know it the user is logged in or not
// import auth from the lib auth 
// to sign out we need to use the action signOutUser from the user actions
// we then want shadcn components button and link 
// add code to see if the user is logged in or not
// go into the components function and add a user button
// we get the session from the auth function
// then we want to check if the session is null or not

import Link from "next/link";
import {auth} from  "@/lib/auth";
import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuItem, 
    DropdownMenuLabel,
    DropdownMenuTrigger, 
}  from "@/components/ui/dropdown-menu";

import { UserIcon } from "lucide-react";

const UserButton  = async () => {
    const session = await auth(); 

    if (!session) {
        return (
            <Button asChild>
                <Link href="/sign-in">
                <UserIcon /> Sign In
                </Link>
            </Button>
        );
    }
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <UserIcon /> User
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuItem onClick={signOutUser}>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
 
export default UserButton;



