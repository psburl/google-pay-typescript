import { AllowedPaymentMethodsProvider } from "../interfaces/allowed-payment-methods-provider";
import { injectable } from "inversify";

@injectable()
export class StaticAllowedPaymentMethodsProvider implements AllowedPaymentMethodsProvider {
    public getAllowedPaymentMethods(): google.payments.api.CardPaymentMethod[] {
        return [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["VISA", "MASTERCARD"],
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        'gateway': 'cielo',
                        'gatewayMerchantId': 'exampleGatewayMerchantId',
                    }
                }
            },
        ];
    }
}