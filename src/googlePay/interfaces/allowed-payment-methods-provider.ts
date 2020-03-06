export interface AllowedPaymentMethodsProvider {
    getAllowedPaymentMethods(): google.payments.api.CardPaymentMethod[]
}