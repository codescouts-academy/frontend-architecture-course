export type ProductTitle = string;
export class Product {
  constructor(
    public id: UniqueId,
    public title: ProductTitle,
    public price: PriceCents,
    public toppings: Ingredient[]
  ) {}
}

export const ingredients: Record<Ingredient, string> = {
  chocolate: "Chocolate",
  cocoa: "cocoa",
  cherry: "cherry",
  marshmallow: "marshmallow",
  peanut: "peanut",
};
