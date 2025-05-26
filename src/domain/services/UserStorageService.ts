import { UserService } from "@codescouts/domain";

import { User } from "@/domain/model/user";

export interface UserStorageService extends UserService {
  user?: User;
  updateUser(user: User): void;
  logout(): void;
}
