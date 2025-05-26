import { useResolve } from "@codescouts/di";

import { AddToCartUseCase } from "@/application/add-to-cart";
import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

export const useCookiesViewModel = () => {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const addToCartUseCase = useResolve(AddToCartUseCase);

  const addToCart = (product) => {
    addToCartUseCase.execute(user, product);
  };

  return {
    cart,
    user,
    addToCart,
  };
};
