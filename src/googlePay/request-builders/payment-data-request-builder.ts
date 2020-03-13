import { TransactionInfoProvider } from "../interfaces/transaction-info-provider";
import { MerchantInfoProvider } from "../interfaces/merchant-info-provider";
import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "../interfaces/request-builder";
import { injectable, inject } from "inversify";
import { CallbackIntentsProvider } from "../interfaces/callback-intents-provider";
import { ShippingAddressInfoProvider } from "../interfaces/shipping-address-info-provider";
import { TYPES } from "../constant/types";
/**
 * Build a payment data request based on sub fields injected on construtor
 */
@injectable()
export class PaymentDataRequestBuilder implements RequestBuilder<google.payments.api.PaymentDataRequest>{

    constructor(
        @inject(TYPES.TransactionInfoProvider) private transactionInfoProvider: TransactionInfoProvider,
        @inject(TYPES.AllowedPaymentMethodsProvider) private allowedPaymentMethodsProvider: AllowedPaymentMethodsProvider,
        @inject(TYPES.MerchantInfoProvider) private merchantInfoProvider: MerchantInfoProvider,
        @inject(TYPES.CallbackIntentsProvider) private callbackIntentsProvider: CallbackIntentsProvider,
        @inject(TYPES.ShippingAddressInfoProvider) private shippingAddressInfoProvider: ShippingAddressInfoProvider) { }

    /**
     * @returns {google.payments.api.PaymentDataRequest} that represents the request builded based on injected providers
     */
    public getRequest(): google.payments.api.PaymentDataRequest {

        return {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: this.allowedPaymentMethodsProvider.getAllowedPaymentMethods(),
            transactionInfo: this.transactionInfoProvider.getTransactionInfo(),
            merchantInfo: this.merchantInfoProvider.getMerchartInfo(),
            callbackIntents: this.callbackIntentsProvider.getCallbackIntents(),
            shippingAddressRequired: this.shippingAddressInfoProvider.isRequired(),
            shippingAddressParameters: this.shippingAddressInfoProvider.getParameters()
        }
    }
}