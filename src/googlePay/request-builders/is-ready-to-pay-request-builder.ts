import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "../interfaces/request-builder";
import { injectable, inject } from "inversify";
/**
 * Build an is ready to pay request based on sub fields injected on construtor
 */
@injectable()
export class IsReadyToPayRequestBuilder implements RequestBuilder<google.payments.api.IsReadyToPayRequest> {

    constructor(@inject("AllowedPaymentMethodsProvider") private allowedPaymentMethodsProvider: AllowedPaymentMethodsProvider) { }

    /**
     * @returns {google.payments.api.IsReadyToPayRequest} that represents the request builded based on injected providers
     */
    public getRequest(): google.payments.api.IsReadyToPayRequest {

        return {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: this.allowedPaymentMethodsProvider.getAllowedPaymentMethods(),
        }
    }
}