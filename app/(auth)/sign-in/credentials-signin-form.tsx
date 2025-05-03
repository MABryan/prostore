//Credentials Sign In Form
//In the sign-in folder create a file called credentials-signin-form.tsx
// This page will have some hooks and logic to handle the sign in form
// We will use the signIn function from next-auth to handle the sign in
// We will use the useForm hook from react-hook-form to handle the form
// from shadcn we need lable and input
// in the terminal run npm i react-hook-form zod @hookform/resolvers
// we want divs that wrap around the input and label
// import label and input from shadcn
// add the id and name and type and required, and auto complete to the input
// we want something to say that if we dont have an account we can create one
// we will add a button to sign in
// Hook Up Sign Up Form. 
// Here will connect the sign in form to the sign in with credentials action.
// We will apply use action state and use form status 
// use action state will give us the data and action
// use form status will give us the form status
// show that if there is an error or success
// we will add a link to the sign up page
// if data is false show a div with the data.message

'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInDefaultValues } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import { useSearchParams } from 'next/navigation';


const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {
        success : false,
        message : '',
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignInButton = () => {
        const { pending } = useFormStatus();
        return (
            <Button disabled={pending} className="w-full" variant="default">
                {pending ? 'Signing in...' : 'Sign In'}
            </Button>
        );

    }

    return (
    <form action={action}> 
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <div className="space-y-6">
        <div>
        <Label htmlFor="email" >Email</Label>
        <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
        />
        </div>

        <div>
        <Label htmlFor="Password" >Password</Label>
        <Input
            id="Password"
            name="Password"
            type="Password"
            required
            autoComplete="Password"
            defaultValue={signInDefaultValues.password}
        />
        </div>
        <div>
         <SignInButton />
        </div>

        {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
            Don&apos;t have an account? {''}
            <Link href="/sign-up" target="_self" className="link">
            Sign Up
            </Link>
            </div> 
     </div>       
    </form>  
);
};
 
export default CredentialsSignInForm;
