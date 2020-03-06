import { PaymentOptionsProvider } from "../interfaces/payment-options-provider";

export class StaticPaymentOptionsProvider implements PaymentOptionsProvider {
    getPaymentOptions(): google.payments.api.PaymentOptions {
        return {
            environment: 'TEST',
        };
    }
}