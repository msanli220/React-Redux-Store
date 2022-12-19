// const AppSettings = require("../extensions/AppSettingsExtension");

const EndpointRoute = {
    // url: AppSettings.api,
    url: "http://dummyjson.com",
    version: "v1",

    // Account
    account: {
        prefix: "/account",

        signUp: "/sign-up",
        signIn: "/auth/login",
        changePassword: "/changePassword"
    },
}

export default EndpointRoute;
