import { injectable } from "inversify";
import { ShippingAddressInfoProvider } from "../interfaces/shipping-address-info-provider";

@injectable()
export class StaticShippingAddressInfoProvider implements ShippingAddressInfoProvider {
    
    public isRequired(): boolean {
        return true;
    }    
    
    public getParameters(): google.payments.api.ShippingAddressParameters {
        return {
            allowedCountryCodes: ["BR"],
            phoneNumberRequired: true
        }
    }    
}