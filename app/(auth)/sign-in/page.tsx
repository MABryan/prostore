// app/auth/sign-in/page.tsx
// import the auth function from the auth.ts file
// we want to add the shipping and handling of the sign in page



import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import CredentialsSignInForm from './credentials-signin-form'; // ← ensure this filename matches
import { redirect } from 'next/navigation';


 
export const metadata: Metadata = {
    title: 'Sign in',
  };
  
  interface SignInPageProps {
    searchParams: {
      callbackUrl?: string;
    };
  }
  
  export default async function SignInPage({
    searchParams,
  }: SignInPageProps) {
    const { callbackUrl } = searchParams;
    const session = await auth();
  
    if (session) {
      // redirect throws behind the scenes
      redirect(callbackUrl || '/');
    }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/images/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
              priority
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Welcome back! Please enter your details.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
async function auth() {
    // Simulate authentication logic
    return null; // Replace with actual session object or null
}

