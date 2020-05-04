import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import {Dimensions} from "react-native";
import {TriggerCallbackOnlyOncePerPeriod} from "./trigger.callback.only.once.per.period.helper";

/*
 *  * Usage & Purpose *
 *  
 *  `Util` contains methods which are commonly used but not contained in other services.
 */
export const UtilService = {
    validateEmail: (email) => {
        const trimWhitespaceLowercase = email.replace(/\s+/g, '').toLowerCase();
        const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regEx.test(trimWhitespaceLowercase)) {
            return trimWhitespaceLowercase;
        }

        return false;
    },
    validateHex: (hex) => {
        const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);

        return isValid;
    },
    generateRandom: () => {
        return new Date().valueOf() * Math.random();
    },
    getSessionId: () => {
        return Constants.sessionId;
    },
    getSystemFonts: () => {
        return Constants.systemFonts;
    },
    replaceAt: (string, index, replacement) => {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    },
    objectToArray: (object) => {
        if (!object) {
            return [];
        }
        let arrayOfProperties = [];

        Object.values(object).forEach((propertyValue) => {
            arrayOfProperties.push(propertyValue);
        });

        return arrayOfProperties;
    },
    getViewport: () => {
        const {width, height} = Dimensions.get('window');

        return {
            x: width,
            y: height
        };
    },
    log: (text, variable) => {
        console.log('-----!----- Log Written Data -----!-----');
        console.log(text);

        if (variable || variable === false || variable === 0) {
            console.log(variable);
        } else {
            console.log('Not Defined');
        }

        console.log('-----!-----!-----!-----');
    },
    truncateString: (string, limit) => {
        if (!string || !limit) return '';
        string = String(string);

        return (string.length > limit) ? string.substr(0, limit - 1) + '...' : string;
    },
    readFile: (fileName) => {
        return FileSystem.getInfoAsync(FileSystem.documentDirectory + fileName)
            .then((response) => {
                if (response && response.exists) {
                    return FileSystem.readAsStringAsync(FileSystem.documentDirectory + fileName)
                        .then((data) => {
                            return JSON.parse(data);
                        });
                }

                return false;
            });
    },
    writeFile: (fileName, fileContent) => {
        const content = Util.isString(fileContent) ? fileContent : JSON.stringify(fileContent);

        return FileSystem.writeAsStringAsync(FileSystem.documentDirectory + fileName, content)
            .then(() => {
                return Util.readFile(fileName);
            });
    },
    deleteFile: (fileName) => {
        return FileSystem.getInfoAsync(FileSystem.documentDirectory + fileName)
            .then((response) => {
                if (response && response.exists) {
                    return FileSystem.deleteAsync(FileSystem.documentDirectory + fileName);
                }

                return Util.returnPromise(true);
            });
    },
    getLocation: (successHandle, failHandle) => {
        Permissions.askAsync(Permissions.LOCATION).then((status) => {
            if (status.status === 'granted') {
                Location.getCurrentPositionAsync({}).then((location) => {
                    // Log Written Data
                    //Util.log('location', location);
                    Location.reverseGeocodeAsync(location.coords).then((address) => {
                        // Log Written Data
                        //Util.log('reverseGeocodeAsync', address);
                        successHandle(address);
                    });
                });
            } else {
                failHandle();
            }
        });
    },
    outputOnlyNumbers: (input, warningCallback) => {
        input = String(input);
        let output = '';
        let numbers = '.0123456789';

        for (let i = 0; i < input.length; i++) {
            if (input[i] === ',') {
                output = output + '.';

                return;
            }
            if (numbers.indexOf(input[i]) > -1) {
                output = output + input[i];
            } else if (warningCallback) {
                warningCallback();
            }
        }

        return output;
    },
    triggerCallbackOnlyOncePerPeriod: (callbackKey, callback, period) => {
        return TriggerCallbackOnlyOncePerPeriod(callbackKey, callback, period, Util);
    },
    capitalizeFirstLetter: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    parseURLParamsAsObject: (string) => {
        const url = string ? string.replace('?', '') : window.location.search.replace('?', '');
        const urlParams = url.split('&');
        let params = {};

        urlParams.forEach((param) => {
            const parameterNameValue = param.split('=');

            if (parameterNameValue[0] && parameterNameValue[1]) {
                params[parameterNameValue[0]] = decodeURIComponent(parameterNameValue[1]);
            }
        });

        return params;
    },
    isNumber: (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    isString: (s) => {
        return typeof s === 'string';
    },
    loopThroughItems: (items, callback) => {
        for (let itemKey in items) {
            callback(items[itemKey], itemKey)
        }
    },
    clone: (obj) => {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
        if (obj instanceof Date) {
            return new Date(obj.getTime());
        }
        if (Array.isArray(obj)) {
            let clonedArr = [];
            obj.forEach(function (element) {
                clonedArr.push(UtilService.clone(element))
            });
            return clonedArr;
        }
        let clonedObj = new obj.constructor();

        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                clonedObj[prop] = UtilService.clone(obj[prop]);
            }
        }

        return clonedObj;
    }
};