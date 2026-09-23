import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center bg-forest-green text-cream px-4 text-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">Herbal Bloom</h1>
          <p className="font-sans text-xl md:text-2xl mb-10 max-w-2xl font-light">
            Modern luxury botanical hair care.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl font-semibold text-gold">$25.99</span>
          </div>
          <Link href="/product/18-herbs-hair-oil" className="bg-gold text-forest-green px-10 py-4 rounded-sm font-semibold hover:bg-gold/90 transition shadow-lg">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 px-4 md:px-20 text-center">
        <h2 className="font-serif text-4xl mb-8 text-forest-green">Pure Botanical Luxury</h2>
        <p className="font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Herbal Bloom brings together the finest botanical elements to create a sophisticated hair care experience. Our 18-herb blend is carefully curated for those who seek elegance and efficacy in their daily ritual.
        </p>
      </section>

      {/* Flagship Product Teaser */}
      <section className="py-24 px-4 md:px-20 bg-forest-green text-cream">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-cream/10 rounded-sm flex items-center justify-center">
            <img src="/herbal-bloom-bottle.png" alt="Herbal Bloom 18 Herbs Hair Oil" className="w-3/4 object-contain" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="font-serif text-4xl mb-6 text-gold">18 Herbs Hair Oil</h3>
            <p className="mb-8 text-lg font-light leading-relaxed">
              Experience the transformative power of our botanical blend. This meticulously crafted oil is designed to nourish and elevate your hair care routine, providing a touch of nature's luxury to every strand.
            </p>
            <Link href="/product/18-herbs-hair-oil" className="inline-block border border-gold text-gold px-8 py-3 rounded-sm hover:bg-gold hover:text-forest-green transition">
              Discover the Ingredients
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <h3 className="font-serif text-3xl mb-8">Ready to elevate your ritual?</h3>
        <Link href="/product/18-herbs-hair-oil" className="bg-forest-green text-cream px-10 py-4 rounded-sm font-semibold hover:bg-forest-green/90 transition">
          Shop Herbal Bloom
        </Link>
      </section>
    </main>
  );
}
