import { GooglePayMiddleware } from "./googlePay/google-pay-middleware";
import { StaticPaymentOptionsProvider } from "./googlePay/providers/static-payment-options-provider";
import { IsReadyToPayRequestBuilder } from "./googlePay/request-builders/is-ready-to-pay-request-builder";
import { StaticApiVersionProvider } from "./googlePay/providers/static-api-version-provider";
import { StaticAllowedPaymentMethodsProvider } from "./googlePay/providers/static-allowed-payment-methods-provider";
import { PaymentDataRequestBuilder } from "./googlePay/request-builders/payment-data-request-builder";
import { StaticMerchantInfoProvider } from "./googlePay/providers/static-merchant-info-provider";
import { StaticTransactionInfoProvider } from "./googlePay/providers/static-transaction-info-provider";
import { TestPaymentProcessor } from "./googlePay/providers/test-payment-processor";

function Test() {
    let middleware = new GooglePayMiddleware(
        new StaticPaymentOptionsProvider(),
        new IsReadyToPayRequestBuilder(new StaticApiVersionProvider(), new StaticAllowedPaymentMethodsProvider()),
        new PaymentDataRequestBuilder(new StaticApiVersionProvider(), new StaticTransactionInfoProvider(), new StaticAllowedPaymentMethodsProvider(), new StaticMerchantInfoProvider()),
        new TestPaymentProcessor());

    if (middleware.shouldBeLoaded()) {
        let button = middleware.getButton();
        document.body.appendChild(button);
    }
    else{
        console.log("could not be loaded")
    }
}

Test();
