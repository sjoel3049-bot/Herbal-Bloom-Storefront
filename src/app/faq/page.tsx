export default function FAQPage() {
  const faqs = [
    { q: "What is the shipping cost?", a: "Shipping is a flat rate of $7." },
    { q: "What is the price of the product?", a: "The 18 Herbs Hair Oil is $25.99." }
  ];

  return (
    <main className="min-h-screen bg-cream text-black px-4 md:px-20 py-20">
      <h1 className="font-serif text-4xl mb-12 text-forest-green">Frequently Asked Questions</h1>
      <div className="max-w-3xl space-y-8">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h2 className="font-semibold text-xl mb-2">{faq.q}</h2>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
