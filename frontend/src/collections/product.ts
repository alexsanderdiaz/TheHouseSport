export const CATEGORIES = [
  "Creatinas",
  "Proteínas",
  "Aminoacidos",
  "Preentrenos",
  "Quemadores",
  "Vitaminas",
  "Precursor Testosterona",
  "Combos",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const BRANDS = [
  "Optimum Nutrition",
  "Dymatize",
  "MuscleTech",
  "BSN",
  "Cellucor",
  "Universal Nutrition",
] as const;

export type Brand = (typeof BRANDS)[number];

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand?: Brand;
  price: number;
  image: string;
  description: string;
  isCombo: boolean;
  // Campos específicos para Proteínas
  proteinType?: "Limpia" | "Hipercalórica";
  popular?: boolean;
}
