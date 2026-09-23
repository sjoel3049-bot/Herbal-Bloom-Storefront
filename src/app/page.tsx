export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-[#2D4539] text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Herbal Bloom</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10">Luxury Botanical Hair Care</p>
          <a href="/product/18-herbs-oil" className="border border-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-[#2D4539] transition">
            Discover the Oil
          </a>
        </div>
      </section>

      {/* Flagship Product Teaser */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8">The 18 Herbs Hair Oil</h2>
        <p className="text-lg opacity-80 mb-12">
          A meticulously crafted botanical infusion designed to nurture and enhance your hair's natural vitality.
        </p>
        <div className="bg-[#EAE4D7] h-64 w-64 mx-auto mb-8 flex items-center justify-center">
          <img src="/herbal-bloom-bottle.png" alt="Herbal Bloom 18 Herbs Hair Oil" className="w-full h-full object-contain" />
        </div>
      </section>
    </main>
  );
}
