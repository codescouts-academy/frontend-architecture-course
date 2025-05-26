import { User } from "../model/user";
import { CookiesRepository } from "./CookiesRepository";

export interface CookiesRepositoryFactory {
  create(user: User): CookiesRepository;
}
