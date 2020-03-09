import "reflect-metadata";
import kernel from "./inversify.config";
import { GooglePayMiddleware } from "./googlePay/google-pay-middleware";

function Test() {

    let middleware = kernel.get<GooglePayMiddleware>("GooglePayMiddleware");

    if (middleware.shouldBeLoaded()) {
        let button = middleware.getButton();
        document.body.appendChild(button);
    }
    else {
        console.log("could not be loaded")
    }
}

Test();