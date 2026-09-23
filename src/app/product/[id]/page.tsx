import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  if (params.id !== '18-herbs-oil') {
    notFound();
  }

  return (
    <main className="min-h-screen py-24 px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="bg-[#EAE4D7] h-[500px] flex items-center justify-center">
          <img src="/herbal-bloom-bottle.png" alt="Herbal Bloom 18 Herbs Hair Oil" className="max-h-full object-contain" />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-light mb-4">Herbal Bloom 18 Herbs Hair Oil</h1>
          <p className="text-xl mb-8">$25.99</p>
          <div className="prose mb-10">
            <p className="opacity-80 leading-relaxed mb-6">
              An elegant, botanical blend crafted for daily hair care. Experience the subtle, natural aromatic infusion with every application.
            </p>
            <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
            <p className="italic text-sm opacity-70 mb-6 border-b border-[#2D4539] pb-4">
              Ingredient list pending official confirmation.
            </p>
          </div>

          <button className="bg-[#2D4539] text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-[#1f3028] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
