import { PaymentService } from "../services/PaymentService";
import { Cart } from "./cart";
import { User } from "./user";

export type OrderStatus = "new" | "delivery" | "completed";

export class Order {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;

  public constructor(user: User, cart: Cart) {
    this.cart = cart;
    this.user = user.id;
    this.status = "new";
    this.created = new Date().toISOString();
    this.total = this.cart.calculateTotal();
  }

  async tryPay(payment: PaymentService) {
    return await payment.tryPay(this.total);
  }

  finish() {
    this.status = "completed";
  }

  deliver() {
    this.status = "delivery";
  }
}
