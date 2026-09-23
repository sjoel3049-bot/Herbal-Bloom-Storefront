import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-black font-sans">
        <nav className="flex items-center justify-between px-20 py-6 border-b border-gray-200">
          <Link href="/" className="font-serif text-2xl text-forest-green">Herbal Bloom</Link>
          <div className="flex gap-8 font-sans font-medium text-forest-green">
            <Link href="/product/18-herbs-hair-oil">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart">Cart</Link>
          </div>
        </nav>
        {children}
        <footer className="px-20 py-12 border-t border-gray-200 text-center font-sans text-sm text-gray-500">
          &copy; Herbal Bloom
        </footer>
      </body>
    </html>
  );
}
