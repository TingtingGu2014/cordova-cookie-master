var cookieMaster = {

    getCookieValue: function(url, cookieName, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'getCookieValue',
                    [url, cookieName]
        );
    },
    setCookieValue: function (url, cookieName, cookieValue, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'setCookieValue',
                    [url, cookieName, cookieValue]
        );
    },
    clearCookieByName: function (url, cookieName, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'clearCookieByName',
                    [url, cookieName]
        );
    },
    clearCookies: function(successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'clearCookies',
                    []
        );
    }
};
module.exports = cookieMaster;
