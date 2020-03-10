/**
 * Return an PaymentOptions to initialize a client
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/client#PaymentOptions|PaymentOptions constructor}
 * @returns {google.payments.api.PaymentOptions} Google Pay API client
 */
export interface PaymentOptionsProvider {
    getPaymentOptions(): google.payments.api.PaymentOptions;
}