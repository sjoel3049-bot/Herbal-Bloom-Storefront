import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Herbal Bloom | Luxury Botanical Hair Care',
  description: 'Premium botanical hair care for natural radiance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-[#1A1A1A]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
