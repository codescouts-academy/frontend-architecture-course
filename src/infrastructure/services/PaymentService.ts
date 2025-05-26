import { PaymentService } from "@/domain/services/PaymentService";
import { fakeApi } from "@/infrastructure/rest/api";

export const usePayment = (): PaymentService => {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(amount < 500);
    },
  };
};
