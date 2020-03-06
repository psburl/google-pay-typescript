import { PaymentProcessor } from "../interfaces/payment-processor";

export class TestPaymentProcessor implements PaymentProcessor {
    onSucess(paymentData: google.payments.api.PaymentData): void {
        let paymentToken = paymentData.paymentMethodData.tokenizationData.token;
        let token = JSON.parse(paymentToken as string);
        let signature = token.signature;
        let signedMessage = token.signedMessage;
        console.log("signature: " + signature);
        console.log("signedMessage: " + signedMessage);
    }    
    
    onError(reason: string): void {
        console.log(reason);
    }
}