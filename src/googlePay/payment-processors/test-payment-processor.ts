import { PaymentProcessor } from "../interfaces/payment-processor";
import { injectable } from "inversify";

@injectable()
export class TestPaymentProcessor implements PaymentProcessor {
    public onSucess(paymentData: google.payments.api.PaymentData): void {
        let paymentToken = paymentData.paymentMethodData.tokenizationData.token;
        let token = JSON.parse(paymentToken as string);
        let signature = token.signature;
        let signedMessage = token.signedMessage;
        console.log("signature: " + signature);
        console.log("signedMessage: " + signedMessage);
    }    
    
    public onError(reason: string): void {
        console.log(reason);
    }
}