import { Product } from "@/domain/model/product";
import { User } from "@/domain/model/user";
import { CartStorageService } from "@/domain/services/CartStorageService";
import { NotificationService } from "@/domain/services/NotificationService";

export class AddToCartUseCase {
  private readonly warningMessage = "This cookie is dangerous for your health!😱";

  constructor(
    private readonly storage: CartStorageService,
    private readonly notifier: NotificationService
  ) {}

  public execute(user: User, product: Product): void {
    debugger
    if (user.hasAllergy(product.toppings)) {
      this.notifier.error(this.warningMessage);
      return;
    }

    const cart = this.storage.cart;

    cart.addProduct(product);

    this.storage.updateCart(cart);
  }
}
