import { ApiVersionProvider } from "../interfaces/api-version-provider";
import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "../interfaces/request-builder";

export class IsReadyToPayRequestBuilder implements RequestBuilder<google.payments.api.IsReadyToPayRequest> {

    constructor(
        private apiVersionProvider: ApiVersionProvider,
        private allowedPaymentMethodsProvider: AllowedPaymentMethodsProvider) { }

    getRequest(): google.payments.api.IsReadyToPayRequest {
        let apiVersion = this.apiVersionProvider.getApiVersion();

        return {
            apiVersion: apiVersion.apiVersion,
            apiVersionMinor: apiVersion.apiVersionMinor,
            allowedPaymentMethods: this.allowedPaymentMethodsProvider.getAllowedPaymentMethods(),
        }
    }
}