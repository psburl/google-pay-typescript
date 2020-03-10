/**
 * Defines an action to be executed after GPay request in case of success and error
 *
 */
export interface PaymentProcessor {
    onSucess(paymentData: google.payments.api.PaymentData) : void;
    onError(reason: string) : void;
}