import { PaymentOptionsProvider } from "../interfaces/payment-options-provider";
import { injectable } from "inversify";

@injectable()
export class StaticPaymentOptionsProvider implements PaymentOptionsProvider {
    public getPaymentOptions(): google.payments.api.PaymentOptions {
        return {
            environment: 'TEST',
        };
    }
}