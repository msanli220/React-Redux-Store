const FileSystem = require('fs');
const Path = require('path')

function AppSettings () {
    let settings = {}

     const filePath = Path.join(process.cwd(), process.env.NODE_ENV==="production" ? "resources" : "src", "settings", `app-settings.${process.env.NODE_ENV_ALT}.json`);
    //const filePath = Path.join("M:\\React-Redux-Store", "src", "settings", `app-settings.development.json`);

   
    console.log("AppSettings.filePath", filePath);

    if ( FileSystem.existsSync(filePath) ) {
        settings = FileSystem.readFileSync(filePath,{ encoding: "utf-8" });
        if ( settings ) {
            settings = JSON.parse(settings);
        }
    }
    else {
        console.error("Settings file not exists.");
    }

    console.info(`Process running in development mode.`)

    return settings;
}

if ( global.appSettingsInstance === undefined ) {
    global.appSettingsInstance = AppSettings();
}

module.exports = global.appSettingsInstance;