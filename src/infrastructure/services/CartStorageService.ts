import { create } from "@codescouts/store";

import { Cart } from "@/domain/model/cart";
import { CartStorageService } from "@/domain/services/CartStorageService";

const useCartStorageInternal = create<CartStorageService>((set) => ({
  cart: new Cart(),
  updateCart: (cart: Cart) => set({ cart }),
  emptyCart: () => set({ cart: new Cart() }),
}))
  .withPersist(Cart)
  .build();

export const useCartStorage = () => useCartStorageInternal();
