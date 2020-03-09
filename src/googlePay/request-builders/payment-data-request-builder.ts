import { ApiVersionProvider } from "../interfaces/api-version-provider";
import { TransactionInfoProvider } from "../interfaces/transaction-info-provider";
import { MerchantInfoProvider } from "../interfaces/merchant-info-provider";
import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "../interfaces/request-builder";
import { injectable, inject } from "inversify";

@injectable()
export class PaymentDataRequestBuilder implements RequestBuilder<google.payments.api.PaymentDataRequest>{

    constructor(
        @inject("ApiVersionProvider") private apiVersionProvider: ApiVersionProvider,
        @inject("TransactionInfoProvider") private transactionInfoProvider: TransactionInfoProvider,
        @inject("AllowedPaymentMethodsProvider") private allowedPaymentMethodsProvider: AllowedPaymentMethodsProvider,
        @inject("MerchantInfoProvider") private merchantInfoProvider: MerchantInfoProvider) { }

    public getRequest(): google.payments.api.PaymentDataRequest {
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