/**
 * Describe your site's support for the CARD payment method and its required
 * fields
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
 * @returns {google.payments.api.CardPaymentMethod[]} transaction info, suitable for use as transactionInfo property of PaymentDataRequest
 */
export interface AllowedPaymentMethodsProvider {
    getAllowedPaymentMethods(): google.payments.api.CardPaymentMethod[]
}