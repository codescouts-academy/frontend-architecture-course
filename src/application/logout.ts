import { CartStorageService } from "@/domain/services/CartStorageService";
import { UserStorageService } from "@/domain/services/UserStorageService";

export class LogoutUseCase {
  constructor(
    private readonly userStorageService: UserStorageService,
    private readonly cartStorage: CartStorageService
  ) {}

  public execute(): void {
    this.cartStorage.emptyCart();

    this.userStorageService.logout();
  }
}
