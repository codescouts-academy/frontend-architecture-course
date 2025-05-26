import { useResolve } from "@codescouts/di";
import { useState } from "react";

import { OrderProductsUserCase } from "@/application/order-products";
import { UserName } from "@/domain/model/user";
import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

export const useBuyViewModel = () => {
  const orderProductsUseCase = useResolve(OrderProductsUserCase);
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const [name, setName] = useState<UserName>(user?.name ?? "");
  const [email, setEmail] = useState<Email>(user?.email ?? "");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    await orderProductsUseCase.execute(user, cart);
    setLoading(false);
  };

  return {
    user,
    cart,
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    loading,
  };
};
