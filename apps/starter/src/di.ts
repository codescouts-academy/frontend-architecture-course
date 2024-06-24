import { useEventDispatcher } from "@codescouts/ui";
import { register } from "ts-injecty";

import { AddToCartUseCase } from "@/application/add-to-cart";
import { AuthenticateUseCase } from "@/application/authenticate";
import { LogoutUseCase } from "@/application/logout";
import { OrderProductsUserCase } from "@/application/order-products";
import { useAuth } from "@/infrastructure/services/AuthenticationService";
import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useNotifier } from "@/infrastructure/services/NotificationService";
import { useOrdersStorage } from "@/infrastructure/services/OrdersStorageService";
import { usePayment } from "@/infrastructure/services/PaymentService";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

import { CookiesLoaderUseCase } from "./application/cookies-loader";
import { OrderCreatedCorrectlyHandler } from "./infrastructure/events/OrderCreatedCorrectlyHandler";
import { CookiesRepositoryFactoryConcrete } from "./infrastructure/services/CookiesRepositoryFactoryConcrete";
import { CookiesRepositoryForAdmin } from "./infrastructure/services/CookiesRepositoryForAdmin";
import { CookiesRepositoryForNormalUser } from "./infrastructure/services/CookiesRepositoryForNormalUser";

export const buildDependencies = (builder: typeof register) => {
  return [
    builder(OrderCreatedCorrectlyHandler).build(),

    builder(LogoutUseCase)
      .withDependencies(useUserStorage, useCartStorage)
      .build(),

    builder(AuthenticateUseCase)
      .withDependencies(useAuth, useUserStorage)
      .build(),

    builder(AddToCartUseCase)
      .withDependencies(useCartStorage, useNotifier)
      .build(),

    builder(OrderProductsUserCase)
      .withDependencies(
        useOrdersStorage,
        useCartStorage,
        usePayment,
        useNotifier,
        useEventDispatcher
      )
      .build(),

    builder(CookiesRepositoryForAdmin).build(),
    builder(CookiesRepositoryForNormalUser).build(),
    builder(CookiesRepositoryFactoryConcrete).build(),

    builder(CookiesLoaderUseCase)
      .withDependencies(CookiesRepositoryFactoryConcrete, useUserStorage)
      .build(),
  ];
};
