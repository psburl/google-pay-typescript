export interface PaymentProcessor {
    onSucess(paymentData: google.payments.api.PaymentData) : void;
    onError(reason: string) : void;
}