import { create } from "@codescouts/store";

import { Order } from "@/domain/model/order";
import { OrdersStorageService } from "@/domain/services/OrdersStorageService";

const useOrdersStorageInternal = create<OrdersStorageService>((set) => ({
  orders: [],
  addOrder: (order: Order) =>
    set((state) => ({ orders: [...state.orders, order] })),
  update: (order: Order) =>
    set((state) => {
      const updatedOrders = state.orders.map((o) => {
        return o === order ? order : o;
      });

      return { orders: updatedOrders };
    }),
})).build();

export const useOrdersStorage = () => useOrdersStorageInternal();
