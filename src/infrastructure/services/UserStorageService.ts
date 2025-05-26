import { create } from "@codescouts/store";

import { User } from "@/domain/model/user";
import { UserStorageService } from "@/domain/services/UserStorageService";

const useUserStorageInternal = create<UserStorageService>((set) => ({
  updateUser: (user: User) => set({ user }),
  logout: () => set({ user: undefined }),
}))
  .withPersist(User)
  .build();

export const useUserStorage = () => useUserStorageInternal();
