import { IEventDispatcher } from "@codescouts/events";
import { mock } from "@codescouts/test/jest";

import { OrderCreatedCorrectly } from "@/domain/events/OrderCreatedCorrectly";
import { Cart } from "@/domain/model/cart";
import { Order } from "@/domain/model/order";
import { User } from "@/domain/model/user";
import { CartStorageService } from "@/domain/services/CartStorageService";
import { NotificationService } from "@/domain/services/NotificationService";
import { OrdersStorageService } from "@/domain/services/OrdersStorageService";
import { PaymentService } from "@/domain/services/PaymentService";

import { OrderProductsUserCase } from "./order-products";

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
describe("order products", () => {
  const orderStorage = mock<OrdersStorageService>();
  const cartStorage = mock<CartStorageService>();
  const payment = mock<PaymentService>();
  const notifier = mock<NotificationService>();
  const dispatcher = mock<IEventDispatcher>();

  const user = new User(
    "sample-user-id",
    "fake",
    "fakeEmail",
    ["malvavisco", "cacahuete"],
    ["cacao", "cereza"],
    ["admin"]
  );
  const cart = new Cart([
    { title: "asd", price: 10, toppings: [], id: "fake" },
    { title: "asd", price: 10, toppings: [], id: "fake2" },
  ]);

  const orderProducts = new OrderProductsUserCase(
    orderStorage,
    cartStorage,
    payment,
    notifier,
    dispatcher
  );

  test("when the payment is failed notify users", async () => {
    payment.tryPay.mockResolvedValue(false);

    await orderProducts.execute(user, cart);

    expect(notifier.error).toHaveBeenCalledWith("We have not been able to process your payment 🤷");
  });

  test("when the payment is successfully add order correctly", async () => {
    payment.tryPay.mockResolvedValue(true);

    await orderProducts.execute(user, cart);

    expect(notifier.success).toBeCalledTimes(0);
    expect(orderStorage.addOrder).toBeCalledTimes(1);
    expect(cartStorage.emptyCart).toBeCalledTimes(1);
  });

  test("when the payment is successfully dispatch order correctly created event", async () => {
    payment.tryPay.mockResolvedValue(true);

    await orderProducts.execute(user, cart);

    expect(notifier.success).toBeCalledTimes(0);
    expect(dispatcher.dispatch).toHaveBeenCalledWith(
      new OrderCreatedCorrectly(new Order(user, cart))
    );
  });
});
