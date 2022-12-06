const AppSettings = require("../extensions/AppSettingsExtension");

const EndpointRoute = {
    url: AppSettings.api,
    version: "v1",

    // Account
    account: {
        prefix: "/account",

        signUp: "/sign-up",
        signIn: "/sign-in",
        changePassword: "/changePassword"
    },
}

export default EndpointRoute;
