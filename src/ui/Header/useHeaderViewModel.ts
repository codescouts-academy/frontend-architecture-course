import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

export const useHeaderViewModel = () => {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  return {
    userName: user?.name,
    isLoggedIn: !!user,
    quantity: cart?.size,
  };
};
