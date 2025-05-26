import { Cart } from "@/domain/model/cart";

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}
