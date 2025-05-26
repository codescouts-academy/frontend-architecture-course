import { cookies } from "@/data/fakeData";
import { Product } from "@/domain/model/product";
import { CookiesRepository } from "@/domain/services/CookiesRepository";

import { fakeApi } from "../rest/api";

export class CookiesRepositoryForNormalUser implements CookiesRepository {
  getAll(): Promise<Product[]> {
    return fakeApi(cookies.slice(0, 3));
  }
}
