import { Product } from "../domain/model/product";
import data from "./cookies.json";

export const cookies: Product[] = [
  ...data as Product[]
];
