/**
 * Configure support for the Google Pay API
 *
 * @see {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
 * @returns {google.payments.api.MerchantInfo} MerchantInfo fields
 */
export interface MerchantInfoProvider {
    getMerchartInfo(): google.payments.api.MerchantInfo;
}