import { useOrdersStorage } from "@/infrastructure/services/OrdersStorageService";

export const useOrdersViewModel = () => {
  const { orders } = useOrdersStorage();

  return {
    orders,
  };
};
