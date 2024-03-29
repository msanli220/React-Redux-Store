// const AppSettings = require("../extensions/AppSettingsExtension");

const EndpointRoute = {
    // url: AppSettings.api,
    url: "https://dummyjson.com",
    version: "v1",

    // Account
    account: {
        prefix: "/auth",
        signUp: "/sign-up",
        signIn: "/login",
        changePassword: "/changePassword"
    },
    product: {
        prefix:"/products",
    },
    user:{
        prefix:"/users",
        addUser:"/add"
    }
}

export default EndpointRoute;
