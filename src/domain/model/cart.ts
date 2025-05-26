import { Product } from "./product";

export class Cart {
  private _products: Product[] = [];

  constructor(products: Product[] = []) {
    this._products = products;
  }

  public addProduct(product: Product): void {
    this._products.push(product);
  }

  public contains(product: Product): boolean {
    return this.products.some(({ id }) => id === product.id);
  }

  public calculateTotal(): PriceCents {
    return this.products.reduce((total, { price }) => total + price, 0);
  }

  public get products(): Product[] {
    return [...this._products];
  }

  public get size(): number {
    return this._products.length;
  }

  public get isEmpty(): boolean {
    return this.size === 0;
  }
}
