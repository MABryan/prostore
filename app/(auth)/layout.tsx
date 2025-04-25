
//Auth Layout and Sign in Page
//We will have separate layouts for both 
//In app folder in addition to root, we will have a folder called (auth) 
//Inside that (auth) create a new file layout.tsx 
//Copy from the root layout.tsx 
// we want a wrapping div with flex and h-screen full to wrap children
// any pages we create inside the (auth) folder will be wrapped with this layout


export default function AuthLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( <div className="flex-center min-h-screen w-full">
      {children}
   </div>
    );
}