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
    priceLabel: '$25.99',
    sizeLabel: '8 fl oz / 236 mL',
    details: [
      'Directions for use: Apply a small amount to the scalp and/or hair. Gently massage the oil into the scalp with your fingertips. Leave the oil in for your preferred amount of time. Wash or rinse hair as desired.',
      'Basic care: For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.',
      'Ingredient information: Pending confirmation.',
    ],
    image: '/herbal-bloom-bottle.png',
  },
];

export const brandFacts = {
  name: 'Herbal Bloom',
  line: 'A considered hair-care ritual.',
  note: 'Product information is being finalized.',
};
