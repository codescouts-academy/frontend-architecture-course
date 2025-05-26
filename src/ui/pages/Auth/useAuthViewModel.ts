import { useResolve } from "@codescouts/di";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { AuthenticateUseCase } from "@/application/authenticate";
import { UserName } from "@/domain/model/user";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

export const useAuthViewModel = () => {
  const navigate = useNavigate();
  const { user } = useUserStorage();
  const authenticateUseCase = useResolve(AuthenticateUseCase);

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  const [name, setName] = useState<UserName>("");
  const [email, setEmail] = useState<Email>("");
  const [loading, setLoading] = useState(false);

  const login = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    await authenticateUseCase.execute(name, email);
    setLoading(false);
  };

  return { login, name, email, setName, setEmail, loading };
};
