import { Kernel } from "inversify"
import { GooglePayMiddleware } from "./googlePay/google-pay-middleware";
import { StaticPaymentOptionsProvider } from "./googlePay/providers/static-payment-options-provider";
import { IsReadyToPayRequestBuilder } from "./googlePay/request-builders/is-ready-to-pay-request-builder";
import { StaticAllowedPaymentMethodsProvider } from "./googlePay/providers/static-allowed-payment-methods-provider";
import { PaymentDataRequestBuilder } from "./googlePay/request-builders/payment-data-request-builder";
import { StaticMerchantInfoProvider } from "./googlePay/providers/static-merchant-info-provider";
import { StaticTransactionInfoProvider } from "./googlePay/providers/static-transaction-info-provider";
import { TestPaymentProcessor } from "./googlePay/payment-processors/test-payment-processor";
import { StaticApiVersionProvider } from "./googlePay/providers/static-api-version-provider";
import { PaymentOptionsProvider } from "./googlePay/interfaces/payment-options-provider";
import { ApiVersionProvider } from "./googlePay/interfaces/api-version-provider";
import { AllowedPaymentMethodsProvider } from "./googlePay/interfaces/allowed-payment-methods-provider";
import { RequestBuilder } from "./googlePay/interfaces/request-builder";
import { TransactionInfoProvider } from "./googlePay/interfaces/transaction-info-provider";
import { MerchantInfoProvider } from "./googlePay/interfaces/merchant-info-provider";
import { PaymentProcessor } from "./googlePay/interfaces/payment-processor";
import { StaticCallbackIntentsProvider } from "./googlePay/providers/static-callback-intents-provider";
import { CallbackIntentsProvider } from "./googlePay/interfaces/callback-intents-provider";
import { ShippingAddressInfoProvider } from "./googlePay/interfaces/shipping-address-info-provider";
import { StaticShippingAddressInfoProvider } from "./googlePay/providers/static-shipping-address-info-provider";


let kernel = new Kernel();
kernel.bind<PaymentOptionsProvider>("PaymentOptionsProvider").to(StaticPaymentOptionsProvider);
kernel.bind<ApiVersionProvider>("ApiVersionProvider").to(StaticApiVersionProvider);
kernel.bind<AllowedPaymentMethodsProvider>("AllowedPaymentMethodsProvider").to(StaticAllowedPaymentMethodsProvider);
kernel.bind<RequestBuilder<google.payments.api.IsReadyToPayRequest>>("IsReadyToPayRequestBuilder").to(IsReadyToPayRequestBuilder);
kernel.bind<RequestBuilder<google.payments.api.PaymentDataRequest>>("PaymentDataRequestBuilder").to(PaymentDataRequestBuilder);
kernel.bind<TransactionInfoProvider>("TransactionInfoProvider").to(StaticTransactionInfoProvider);
kernel.bind<MerchantInfoProvider>("MerchantInfoProvider").to(StaticMerchantInfoProvider);
kernel.bind<CallbackIntentsProvider>("CallbackIntentsProvider").to(StaticCallbackIntentsProvider);
kernel.bind<ShippingAddressInfoProvider>("ShippingAddressInfoProvider").to(StaticShippingAddressInfoProvider);
kernel.bind<PaymentProcessor>("PaymentProcessor").to(TestPaymentProcessor);
kernel.bind<GooglePayMiddleware>("GooglePayMiddleware").to(GooglePayMiddleware);


export default kernel;