import { Kernel } from "inversify"
import { GooglePayMiddleware } from "./googlePay/google-pay-middleware";
import { StaticPaymentOptionsProvider } from "./googlePay/providers/static-payment-options-provider";
import { IsReadyToPayRequestBuilder } from "./googlePay/request-builders/is-ready-to-pay-request-builder";
import { StaticAllowedPaymentMethodsProvider } from "./googlePay/providers/static-allowed-payment-methods-provider";
import { PaymentDataRequestBuilder } from "./googlePay/request-builders/payment-data-request-builder";
import { StaticMerchantInfoProvider } from "./googlePay/providers/static-merchant-info-provider";
import { StaticTransactionInfoProvider } from "./googlePay/providers/static-transaction-info-provider";
import { TestPaymentProcessor } from "./googlePay/payment-processors/test-payment-processor";
import { PaymentOptionsProvider } from "./googlePay/interfaces/payment-options-provider";
import { AllowedPaymentMethodsProvider } from "./googlePay/interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "./googlePay/interfaces/request-builder";
import { TransactionInfoProvider } from "./googlePay/interfaces/transaction-info-provider";
import { MerchantInfoProvider } from "./googlePay/interfaces/merchant-info-provider";
import { PaymentProcessor } from "./googlePay/interfaces/payment-processor";
import { StaticCallbackIntentsProvider } from "./googlePay/providers/static-callback-intents-provider";
import { CallbackIntentsProvider } from "./googlePay/interfaces/callback-intents-provider";
import { ShippingAddressInfoProvider } from "./googlePay/interfaces/shipping-address-info-provider";
import { StaticShippingAddressInfoProvider } from "./googlePay/providers/static-shipping-address-info-provider";
import { TYPES } from "./googlePay/constant/types";


let kernel = new Kernel();

kernel.bind<PaymentOptionsProvider>(TYPES.PaymentOptionsProvider)
    .to(StaticPaymentOptionsProvider);

kernel.bind<AllowedPaymentMethodsProvider>(TYPES.AllowedPaymentMethodsProvider)
    .to(StaticAllowedPaymentMethodsProvider);

kernel.bind<RequestBuilder<google.payments.api.IsReadyToPayRequest>>(TYPES.IsReadyToPayRequestBuilder)
    .to(IsReadyToPayRequestBuilder);

kernel.bind<RequestBuilder<google.payments.api.PaymentDataRequest>>(TYPES.PaymentDataRequestBuilder)
    .to(PaymentDataRequestBuilder);

kernel.bind<TransactionInfoProvider>(TYPES.TransactionInfoProvider)
    .to(StaticTransactionInfoProvider);

kernel.bind<MerchantInfoProvider>(TYPES.MerchantInfoProvider)
    .to(StaticMerchantInfoProvider);

kernel.bind<CallbackIntentsProvider>(TYPES.CallbackIntentsProvider)
    .to(StaticCallbackIntentsProvider);

kernel.bind<ShippingAddressInfoProvider>(TYPES.ShippingAddressInfoProvider)
    .to(StaticShippingAddressInfoProvider);

kernel.bind<PaymentProcessor>(TYPES.PaymentProcessor)
    .to(TestPaymentProcessor);

kernel.bind<GooglePayMiddleware>(TYPES.GooglePayMiddleware)
    .to(GooglePayMiddleware);

export default kernel;