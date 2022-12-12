// const AppSettings = require("../extensions/AppSettingsExtension");

const EndpointRoute = {
    // url: AppSettings.api,
    url: "http://dummyjson.com/data/",
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
