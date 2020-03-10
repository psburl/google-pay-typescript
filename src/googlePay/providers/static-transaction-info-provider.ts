import { TransactionInfoProvider } from "../interfaces/transaction-info-provider";
import { injectable } from "inversify";

@injectable()
export class StaticTransactionInfoProvider implements TransactionInfoProvider {
    public getTransactionInfo(): google.payments.api.TransactionInfo {
        return {
            displayItems: [
                {
                    label: "Subtotal",
                    type: "SUBTOTAL",
                    price: "11.00"
                },
                {
                    label: "Item 1",
                    type: "LINE_ITEM",
                    price: "1.00",
                    status: "PENDING"
                }
            ],
            transactionId: "asd",
            countryCode: "BR",
            currencyCode: "BRL",
            totalPriceStatus: "FINAL",
            totalPrice: "12.00",
            totalPriceLabel: "Total",
            checkoutOption: "COMPLETE_IMMEDIATE_PURCHASE"
        };
    }
}