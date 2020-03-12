export interface ShippingAddressInfoProvider { 
    isRequired(): boolean;
    getParameters(): google.payments.api.ShippingAddressParameters;
}