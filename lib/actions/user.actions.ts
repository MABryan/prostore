// any actions that relate to the users, or authentication.
// it is a server action, so it will be run on the server
// import signInFormSchema from '../validators';
// bring in the sign in and sign out functions from next auth
// create user actions

// any actions that relate to the users, or authentication.
// it is a server action, so it will be run on the server
// import signInFormSchema from '../validators';
// bring in the sign in and sign out functions from next auth
// create user actions

'use server';
 
import { signInFormSchema } from "../validators";
import { signIn, signOut } from "next-auth/react";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    // Validate the form data against the schema
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    // Sign in with credentials (this will redirect or throw on error)
    await signIn('credentials', user);
    
    // Return successful response
    return { success: true, message: 'Sign in successful' };
  } catch (error) {
    // Rethrow redirect errors
    if (isRedirectError(error)) {
      throw error;
    }
    // Return error response
    return { success: false, message: 'Invalid email or password' };
  }
}

// Sign out user
export async function signOutUser() {
  // Sign out user by calling the function from next-auth
  await signOut();
  // Optionally, you can perform a redirect or additional actions here
}
