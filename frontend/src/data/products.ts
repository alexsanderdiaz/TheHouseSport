import type { Product } from "../collections/product";

export const products: Product[] = [
  {
    id: "p1",
    name: "Whey Protein Isolate",
    category: "Proteínas",
    brand: "Optimum Nutrition",
    price: 59.99,
    image: "/assets/images/whey-isolate.jpg",
    description:
      "Proteína de suero aislada para una rápida absorción y recuperación muscular.",
    isCombo: false,
    proteinType: "Limpia",
    popular: true,
  },
];
