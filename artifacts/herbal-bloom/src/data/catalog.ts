export type Product = {
  id: string;
  name: string;
  shortName: string;
  descriptor: string;
  priceLabel: string;
  sizeLabel: string;
  details: string[];
  image: string;
};

export const productCatalog: Product[] = [
  {
    id: 'herbal-bloom-18-herbs-hair-oil',
    name: 'Herbal Bloom 18 Herbs Hair Oil',
    shortName: '18 Herbs Hair Oil',
    descriptor: 'The singular product in the Herbal Bloom ritual.',
    priceLabel: 'Price to be confirmed',
    sizeLabel: 'Size to be confirmed',
    details: [
      'Product details to be confirmed.',
      'Ingredient information to be confirmed.',
      'Usage guidance to be confirmed.',
    ],
    image: '/herbal-bloom-bottle.png',
  },
];

export const brandFacts = {
  name: 'Herbal Bloom',
  line: 'A considered hair-care ritual.',
  note: 'Product information is being finalized. We keep this space clear until every detail is ready to share.',
};
