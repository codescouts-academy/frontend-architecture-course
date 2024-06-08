import { useResolve } from "@codescouts/di";
import { useEffect, useState } from "react";

import { CookiesLoaderUseCase } from "@/application/cookies-loader";

export const useFrontViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookies] = useState([]);

  const cookiesLoaderUseCase = useResolve(CookiesLoaderUseCase);

  useEffect(() => {
    setIsLoading(true);
    cookiesLoaderUseCase.execute().then((cookies) => {
      setCookies(cookies);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    cookies,
  };
};
