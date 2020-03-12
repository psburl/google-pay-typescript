import { PaymentOptionsProvider } from "../interfaces/payment-options-provider";
import { injectable } from "inversify";

@injectable()
export class StaticPaymentOptionsProvider implements PaymentOptionsProvider {
    public getPaymentOptions(): google.payments.api.PaymentOptions {
        return {
            environment: 'TEST',
            paymentDataCallbacks: {
                onPaymentAuthorized: (paymentData) => {
                    return new Promise<google.payments.api.PaymentAuthorizationResult>((resolve, reject)=>{
                        resolve({transactionState: "SUCCESS"});
                    });
                }
            }
        };
    }
}