/**
 * Provide Google Pay API with a payment amount, currency, and amount status
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo|TransactionInfo}
 * @returns {google.payments.api.TransactionInfo} transaction info, suitable for use as transactionInfo property of PaymentDataRequest
 */
export interface TransactionInfoProvider {
    getTransactionInfo(): google.payments.api.TransactionInfo;
}