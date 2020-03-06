import { ApiVersionProvider } from "../interfaces/api-version-provider";

export class StaticApiVersionProvider implements ApiVersionProvider {
    getApiVersion(): google.payments.api.ApiVersion {
        return {
            apiVersion: 2,
            apiVersionMinor: 0,
        };
    }
}