import { RequestBuilder } from "./interfaces/request-builder";
import { PaymentProcessor } from "./interfaces/payment-processor";
import { PaymentOptionsProvider } from "./interfaces/payment-options-provider";
import { injectable, inject } from "inversify";
import { TYPES } from "./constant/types";

@injectable()
export class GooglePayMiddleware {

    private googlePaymentClient: google.payments.api.PaymentsClient;

    public constructor(
        @inject(TYPES.PaymentOptionsProvider) paymentOptionsProvider: PaymentOptionsProvider,
        @inject(TYPES.IsReadyToPayRequestBuilder) private isReadyToPayRequestBuilder: RequestBuilder<google.payments.api.IsReadyToPayRequest>,
        @inject(TYPES.PaymentDataRequestBuilder) private paymentDataRequestBuilder: RequestBuilder<google.payments.api.PaymentDataRequest>,
        @inject(TYPES.PaymentProcessor) private paymentDataProcessor: PaymentProcessor) { 
            this.googlePaymentClient = new google.payments.api.PaymentsClient(paymentOptionsProvider.getPaymentOptions());
        }

    public shouldBeLoaded(): boolean {
        let result = true;
        this.googlePaymentClient.isReadyToPay(this.isReadyToPayRequestBuilder.getRequest())
            .then((response) => {
                if (response.result) {
                    result = true;
                }
            })
            .catch((reason) => {
                console.error(reason);
            });
        return result;
    }

    public getButton(): HTMLElement {
        return this.googlePaymentClient.createButton({
            onClick: () => {
                let request = this.paymentDataRequestBuilder.getRequest();
                console.log(JSON.stringify(request))
                this.googlePaymentClient.prefetchPaymentData(request);
                this.googlePaymentClient.loadPaymentData(request)
                    .then((paymentData) => this.paymentDataProcessor.onSucess(paymentData))
                    .catch((reason) => this.paymentDataProcessor.onError(reason));
            }
        })
    }
}