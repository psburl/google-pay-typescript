export interface PaymentOptionsProvider {
    getPaymentOptions(): google.payments.api.PaymentOptions;
}