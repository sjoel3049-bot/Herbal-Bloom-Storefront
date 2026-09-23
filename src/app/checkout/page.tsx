'use client';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/context/CartContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { items, subtotal, shipping, total } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <main className="min-h-screen py-24 px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-light mb-12">Checkout</h1>
      <div className="space-y-4">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Shipping: ${shipping.toFixed(2)}</p>
        <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
        <button 
          onClick={handleCheckout}
          className="bg-black text-white px-8 py-3 hover:bg-gray-800"
        >
          Pay with Stripe
        </button>
      </div>
    </main>
  );
}
