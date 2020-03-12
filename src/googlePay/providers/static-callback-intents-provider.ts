import { CallbackIntentsProvider } from "../interfaces/callback-intents-provider";
import { injectable } from "inversify";

@injectable()
export class StaticCallbackIntentsProvider implements CallbackIntentsProvider {
    getCallbackIntents(): google.payments.api.CallbackIntent[] {
        return ["PAYMENT_AUTHORIZATION"];
    }
}