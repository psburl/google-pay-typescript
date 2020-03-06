import { ApiVersionProvider } from "../interfaces/api-version-provider";
import { TransactionInfoProvider } from "../interfaces/transaction-info-provider";
import { MerchantInfoProvider } from "../interfaces/merchant-info-provider";
import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "../interfaces/request-builder";

export class PaymentDataRequestBuilder implements RequestBuilder<google.payments.api.PaymentDataRequest>{

    constructor(
        private apiVersionProvider: ApiVersionProvider,
        private transactionInfoProvider: TransactionInfoProvider,
        private allowedPaymentMethodsProvider: AllowedPaymentMethodsProvider,
        private merchantInfoProvider: MerchantInfoProvider) { }

    getRequest(): google.payments.api.PaymentDataRequest {
        let apiVersion = this.apiVersionProvider.getApiVersion();

        return {
            apiVersion: apiVersion.apiVersion,
            apiVersionMinor: apiVersion.apiVersionMinor,
            allowedPaymentMethods: this.allowedPaymentMethodsProvider.getAllowedPaymentMethods(),
            transactionInfo: this.transactionInfoProvider.getTransactionInfo(),
            merchantInfo: this.merchantInfoProvider.getMerchartInfo(),
        }
    }
}