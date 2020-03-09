import { ApiVersionProvider } from "../interfaces/api-version-provider";
import { injectable } from "inversify";

@injectable()
export class StaticApiVersionProvider implements ApiVersionProvider {
    public getApiVersion(): google.payments.api.ApiVersion {
        return {
            apiVersion: 2,
            apiVersionMinor: 0,
        };
    }
}