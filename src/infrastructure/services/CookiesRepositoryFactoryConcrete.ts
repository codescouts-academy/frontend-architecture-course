import { Factory } from "ts-injecty";

import { User } from "@/domain/model/user";
import { CookiesRepositoryFactory } from "@/domain/services/CookiesRepositoryFactory";

import { CookiesRepositoryForAdmin } from "./CookiesRepositoryForAdmin";
import { CookiesRepositoryForNormalUser } from "./CookiesRepositoryForNormalUser";

export class CookiesRepositoryFactoryConcrete
  extends Factory
  implements CookiesRepositoryFactory
{
  create(user?: User) {
    debugger;
    if (user?.isAdmin) return this.resolver.resolve(CookiesRepositoryForAdmin);

    return this.resolver.resolve(CookiesRepositoryForNormalUser);
  }
}
