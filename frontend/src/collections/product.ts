export type Category =
  | "Creatinas"
  | "Proteínas"
  | "Aminoacidos"
  | "Preentrenos"
  | "Quemadores"
  | "Vitaminas"
  | "Precursor Testosterona"
  | "Combos";

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand?: string;
  price: number;
  image: string;
  description: string;
  isCombo: boolean;
  // Campos específicos para Proteínas
  proteinType?: "Limpia" | "Hipercalórica";
  popular?: boolean;
}
