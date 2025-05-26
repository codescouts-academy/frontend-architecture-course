import { Navigate } from "react-router";

import { useUserStorage } from "@/infrastructure/services/UserStorageService";
import { Buy } from "@/ui/Buy";
import { Cart } from "@/ui/Cart";
import { Orders } from "@/ui/Orders";
import { Logout } from "@/ui/pages/Auth/Logout";
import { Profile } from "@/ui/Profile";

export const User = () => {
  const { user } = useUserStorage();
  if (!user) return <Navigate to="/auth" />;

  return (
    <main>
      <Logout />
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
};
