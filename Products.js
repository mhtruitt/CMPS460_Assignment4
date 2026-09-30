// data/products.js
// A small, static "database" of products. In a real app this would come
// from an API, but keeping it here as a plain array keeps the example
// focused on navigation and passing data between screens.

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 79.99,
    description:
      'Over-ear wireless headphones with active noise cancellation and 30 hours of battery life.',
  },
  {
    id: '2',
    name: 'Smart Water Bottle',
    price: 34.5,
    description:
      'Tracks your daily water intake and glows to remind you to stay hydrated throughout the day.',
  },
  {
    id: '3',
    name: 'Mechanical Keyboard',
    price: 129.0,
    description:
      'A compact 75% mechanical keyboard with hot-swappable switches and per-key RGB lighting.',
  },
];

export default products;
