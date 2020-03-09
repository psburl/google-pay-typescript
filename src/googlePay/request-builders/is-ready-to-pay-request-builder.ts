import { ApiVersionProvider } from "../interfaces/api-version-provider";
import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "../interfaces/request-builder";
import { injectable, inject } from "inversify";

@injectable()
export class IsReadyToPayRequestBuilder implements RequestBuilder<google.payments.api.IsReadyToPayRequest> {

    constructor(
        @inject("ApiVersionProvider") private apiVersionProvider: ApiVersionProvider,
        @inject("AllowedPaymentMethodsProvider") private allowedPaymentMethodsProvider: AllowedPaymentMethodsProvider) { }

    public getRequest(): google.payments.api.IsReadyToPayRequest {
        let apiVersion = this.apiVersionProvider.getApiVersion();

        return {
            apiVersion: apiVersion.apiVersion,
            apiVersionMinor: apiVersion.apiVersionMinor,
            allowedPaymentMethods: this.allowedPaymentMethodsProvider.getAllowedPaymentMethods(),
        }
    }
}