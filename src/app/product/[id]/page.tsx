export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-cream text-black px-4 md:px-20 py-20">
      <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
        {/* Photography */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-sm shadow-sm flex items-center justify-center">
          <img src="/herbal-bloom-bottle.png" alt="Herbal Bloom 18 Herbs Hair Oil" className="w-full max-w-sm object-contain" />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2">
          <h1 className="font-serif text-5xl mb-2 tracking-tight text-forest-green">Herbal Bloom 18 Herbs Hair Oil</h1>
          <p className="text-xl text-gray-600 mb-6">8 fl oz / 236 mL</p>
          <div className="text-4xl font-bold mb-6 text-forest-green">$25.99</div>
          <div className="text-md text-gray-600 mb-8 font-medium">Flat Shipping: $7</div>
          
          <div className="flex items-center gap-4 mb-8">
            <label className="font-semibold">Quantity</label>
            <input type="number" defaultValue={1} min={1} className="w-16 p-2 border border-gray-300 rounded-sm" />
            <button className="bg-forest-green text-cream px-10 py-3 rounded-sm font-semibold flex-grow hover:bg-forest-green/90 transition">
              Add to Cart
            </button>
          </div>

          <div className="space-y-8 border-t border-gray-200 pt-8">
            <div>
              <h2 className="font-serif text-2xl mb-4 text-forest-green">Our 18-Herb Botanical Blend</h2>
              <p className="text-gray-700 leading-relaxed">
                A meticulously selected combination of 18 botanicals, curated for their quality and harmony. Our formulation process emphasizes purity and excellence.
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl mb-4 text-forest-green">Directions</h2>
              <p className="text-gray-700 leading-relaxed">
                Apply a small amount to hair as part of your daily ritual, ensuring even distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
