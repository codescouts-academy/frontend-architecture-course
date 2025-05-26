export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}
