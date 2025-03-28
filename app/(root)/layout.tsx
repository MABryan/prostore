// We need to bring the header into the root layout 
// to make it accessible to all pages.
// We need to bring the footer into the root layout 
// to make it accessible to all pages.
import Header from '@/components/shared/header';
import Footer from '@/components/footer';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div className="flex h-screen flex-col">
<Header />
    <main className="flex-1 wrapper">{children}</main>
    <Footer />
</div>
    );
    }