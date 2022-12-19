// const FileSystem = require('fs');
// const Path = require('path')
const settings = require("../settings/app-settings.development.json")

function AppSettings () {
    // let settings = {}

    //  const filePath = "..\\settings\\app-settings.development.json";
    //const filePath = Path.join("M:\\React-Redux-Store", "src", "settings", `app-settings.development.json`);



    // if ( FileSystem.existsSync(filePath) ) {
    //     settings = FileSystem.readFileSync(filePath,{ encoding: "utf-8" });
    //     if ( settings ) {
    //         settings = JSON.parse(settings);
    //     }
    // }
    // else {
    //     console.error("Settings file not exists.");
    // }

    console.info(`Process running in development mode.`)

    return settings;
}

if ( global.appSettingsInstance === undefined ) {
    global.appSettingsInstance = AppSettings();
}

module.exports = global.appSettingsInstance;