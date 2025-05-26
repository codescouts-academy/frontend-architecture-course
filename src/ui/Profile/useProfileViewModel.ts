import { useUserStorage } from "@/infrastructure/services/UserStorageService";

export const useProfileViewModel = () => {
  const { user } = useUserStorage();

  return { user };
};
