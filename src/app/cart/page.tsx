export default function CartPage() {
  const cartItems = [
    { name: "18 Herbs Hair Oil", price: 25.99, quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 7.00;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-cream text-black px-4 md:px-20 py-20">
      <h1 className="font-serif text-4xl mb-12 text-forest-green">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-xl">Your shopping cart is currently empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-6">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-4">
              <span>Shipping</span>
              <span className="font-semibold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-serif text-forest-green pt-2">
              <span>Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-forest-green text-cream py-4 rounded-sm font-semibold mt-4 hover:bg-forest-green/90 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
