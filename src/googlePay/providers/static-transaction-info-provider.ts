import { TransactionInfoProvider } from "../interfaces/transaction-info-provider";
import { injectable } from "inversify";

@injectable()
export class StaticTransactionInfoProvider implements TransactionInfoProvider {
    public getTransactionInfo(): google.payments.api.TransactionInfo {
        return {
            displayItems: [
                {
                    label: "Subtotal",
                    type: "LINE_ITEM",
                    price: "11.00",
                }
            ],
            countryCode: "BR",
            currencyCode: "BRL",
            totalPriceStatus: "FINAL",
            totalPrice: "11.00",
            totalPriceLabel: "Total",
        };
    }
}