import dotenv from 'dotenv/config';
import getEnvironmentVariable from './environmentVariable.js';

const constants = {
    app : {
        port : getEnvironmentVariable("PORT", 80),
        url: (() => {
            const APP_URL = getEnvironmentVariable("APP_URL");
            const urlObj = new URL(APP_URL);
            if (urlObj.pathname !== null && urlObj.undefined !== null && urlObj.pathname !== "/") throw new TypeError(
                `APP_URL cannot have a path, however the path: "${urlObj.pathname}" was provided`
            );
            return APP_URL;
        })(),
        callbackPath : "/auth/callback",
        loginPath : "/auth/login",
        session : {
            secret : getEnvironmentVariable("SESSION_SECRET")
        },
        log : {
            directory : getEnvironmentVariable("LOG_DIRECTORY", "./logs"),
            level: "info"
        }
    },
    oauth : {
        urls: {
            authorization: getEnvironmentVariable("OAUTH_AUTHORIZATION_URL"),
            token: getEnvironmentVariable("OAUTH_TOKEN_URL"),
        },
        client: {
            id: getEnvironmentVariable("OAUTH_CLIENT_ID"),
            secret: getEnvironmentVariable("OAUTH_CLIENT_SECRET")
        }
    },
};

console.log("Constants:", constants);

export default constants; 
