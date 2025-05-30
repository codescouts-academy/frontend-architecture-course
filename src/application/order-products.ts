import { IEventDispatcher } from "@codescouts/events";

import { OrderCreatedCorrectly } from "@/domain/events/OrderCreatedCorrectly";
import { Cart } from "@/domain/model/cart";
import { Order } from "@/domain/model/order";
import { User } from "@/domain/model/user";
import { CartStorageService } from "@/domain/services/CartStorageService";
import { NotificationService } from "@/domain/services/NotificationService";
import { OrdersStorageService } from "@/domain/services/OrdersStorageService";
import { PaymentService } from "@/domain/services/PaymentService";

export class OrderProductsUserCase {
  constructor(
    private orderStorage: OrdersStorageService,
    private cartStorage: CartStorageService,
    private payment: PaymentService,
    private notifier: NotificationService,
    private dispatcher: IEventDispatcher
  ) {}

  public async execute(user: User, cart: Cart) {
    debugger
    const order = new Order(user, cart);

    const paid = await order.tryPay(this.payment);
    if (!paid) return this.notifier.error("We have not been able to process your payment 🤷");

    this.orderStorage.addOrder(order);
    this.cartStorage.emptyCart();

    this.dispatcher.dispatch(new OrderCreatedCorrectly(order));

    // Simulate delivery and completion just for demo purposes
    // In a real-world scenario, this would be handled by a different service
    // or a background job
    setTimeout(() => {
      this.deliverOrder(order);

      setTimeout(() => {
        this.completeOrder(order);
      }, 5000);
    }, 5000);
  }

  private deliverOrder(order: Order) {
    order.deliver();

    this.orderStorage.update(order);
  }

  private completeOrder(order: Order) {
    order.finish();

    this.orderStorage.update(order);
  }
}
