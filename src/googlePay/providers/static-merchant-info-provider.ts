import { MerchantInfoProvider } from "../interfaces/merchant-info-provider";
import { injectable } from "inversify";

@injectable()
export class StaticMerchantInfoProvider implements MerchantInfoProvider {
    public getMerchartInfo(): google.payments.api.MerchantInfo {
        return {
            merchantId: '01234567890123456789',
            merchantName: 'Example Merchant',
        };
    }
}