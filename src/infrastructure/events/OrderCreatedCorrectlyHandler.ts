import { Handler } from "@codescouts/events";

import { OrderCreatedCorrectly } from "@/domain/events/OrderCreatedCorrectly";
import { NotificationService } from "@/domain/services/NotificationService";

export class OrderCreatedCorrectlyHandler extends Handler<OrderCreatedCorrectly> {
  public constructor(private readonly notify: NotificationService) {
    super(OrderCreatedCorrectly);
  }

  protected handle(event: OrderCreatedCorrectly): void | Promise<void> {
    debugger
    const message = `New order created correctly by a total of ${event.order.total} € .- at ${event.when}`;

    this.notify.success(message);
  }
}
