import { MerchantInfoProvider } from "../interfaces/merchant-info-provider";

export class StaticMerchantInfoProvider implements MerchantInfoProvider {
    getMerchartInfo(): google.payments.api.MerchantInfo {
        return {
            merchantId: '01234567890123456789',
            merchantName: 'Example Merchant',
        };
    }
}