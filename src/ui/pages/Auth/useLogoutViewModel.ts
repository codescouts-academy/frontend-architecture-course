import { useResolve } from "@codescouts/di";

import { LogoutUseCase } from "@/application/logout";

export const useLogoutViewModel = () => {
  const useCase = useResolve(LogoutUseCase);

  const logout = () => {
    useCase.execute();
  };

  return { logout };
};
