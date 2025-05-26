import { Product } from "../model/product";

export interface CookiesRepository {
  getAll(): Promise<Product[]>;
}
