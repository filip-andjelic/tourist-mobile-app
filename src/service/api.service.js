import {UtilService} from "./util.service";
import {ConstantsService} from "./Constants.service";

const urlBase = ConstantsService.URL_BASE;
const endpointUrls = {
    playerSettings: urlBase + 'video/playerSettings',
    getIP: 'https://api.ipify.org?format=json',
    registration: urlBase + 'registration-api.php',
    sessions: urlBase + 'sessions-api.php',
    students: urlBase + 'students-api.php',
    tasks: urlBase + 'tasks-api.php',
    notes: urlBase + 'notes-api.php',
    update: urlBase + 'update-api.php'
};

/*
 *  * Usage & Purpose *
 *
 *  `ApiService` handles all requests and communication with server.
 */
export const ApiService = {
    returnPromise: (data, timeout) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, timeout ? timeout : 50);
        });
    },
    getRequest: (url) => {
        return fetch(url).then((response) => response.json())
            .then((data) => {
                //console.log('GET RESPONSE SUCCESS -> ', data);
                if (!data) {
                    return false;
                }

                return ApiService.prettifyResponse(data);
            })
            .catch((error) => {
                console.error('GET request failed! Error -> ', error);
            });
    },
    postRequest: (url, data) => {
        console.log('Fetch Post Data sent -> ', data);

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive',
            },
            body: JSON.stringify({data: data}),
        }).then(response => response.json()).then((data) => {
            //console.log('SUCCESS -> ', data);
            if (!data) {
                return false;
            }

            return ApiService.prettifyResponse(data);
        }).catch((error) => {
            console.error('POST request failed. Error -> ', error);
        });
    },
    prettifyResponse: (data, log) => {
        if (!data) {
            return false;
        }
        if (UtilService.isNumber(data)) {
            return data;
        }
        if (UtilService.isString(data)) {
            data = data
                .replace(/\\"/g, "'").replace(/\\'/g, "'")
                .replace(/""{/g, '{').replace(/"{/g, '{')
                .replace(/}""/g, '}').replace(/}"/g, '}');

            if (data.indexOf('{') >= 0 && data.indexOf('}')) {
                data = JSON.parse(data);

                return ApiService.prettifyResponse(data);
            }
            if (data.indexOf('[') >= 0 && data.indexOf(']')) {
                data = JSON.parse(data);

                return ApiService.prettifyResponse(data);
            }

            return data;
        }
        let prettyData = {};

        UtilService.loopThroughItems(data, (property, key) => {
            if (UtilService.isString(key)) {
                key = key.replace(/\\"/g, '').replace(/\\'/g, '');
            }

            prettyData[key] = ApiService.prettifyResponse(property);
        });

        return prettyData;
    },
    endpoints: {
        loginAttempt: (data) => {
            return ApiService.postRequest(endpointUrls.registration, data);
        },
        checkToken: (token, isMentor) => {
            let data = {
                token: token
            };

            if (isMentor) {
                data.isMentor = true;
            }

            const query = "?data=" + encodeURIComponent(JSON.stringify(data));

            return ApiService.getRequest(endpointUrls.registration + query).then((response) => {
                return response;
            });
        },
        updateUser: (data, id, createNew) => {
            return ApiService.postRequest(endpointUrls.update, {
                data: data,
                id: id,
                type: 'user',
                createNew: !!createNew
            });
        },
        getIP: () => {
            return ApiService.getRequest(endpointUrls.getIP);
        },
        watchBeacon: (data) => {
            navigator.sendBeacon(endpointUrls.watch, data);
        }
    }
};
