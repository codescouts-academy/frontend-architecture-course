import { CookiesRepository } from "@/domain/services/CookiesRepository";
import { CookiesRepositoryFactory } from "@/domain/services/CookiesRepositoryFactory";
import { UserStorageService } from "@/domain/services/UserStorageService";

export class CookiesLoaderUseCase {
  private readonly cookiesRepository: CookiesRepository;

  constructor(
    cookiesRepositoryFactory: CookiesRepositoryFactory,
    userStorage: UserStorageService
  ) {
    const user = userStorage.user;
    this.cookiesRepository = cookiesRepositoryFactory.create(user);
  }

  execute() {
    return this.cookiesRepository.getAll();
  }
}
