'use client';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, subtotal, shipping, total } = useCart();

  return (
    <main className="min-h-screen py-24 px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-light mb-12">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-8">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <p>{item.name} x {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="text-right space-y-2 pt-8">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping (Flat Rate): ${shipping.toFixed(2)}</p>
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </main>
  );
}
