import 'whatwg-fetch'
require('es6-promise').polyfill();
require('isomorphic-fetch');
const Promise = require('bluebird')
const HOST = 'https://kutekiu.herokuapp.com/api'
const DEV = 'http://localhost:3003/api'
/**
 * fetch by get data
 * @param {string} url
 */
export default url => new Promise(function (resolve, reject) {
    fetch(HOST + url)
        .then(function (response) {
            if (response.status >= 400) {
                reject(new Error("Bad response from server"))
            }
            return response.json();
        })
        .then(function (stories) {
            resolve(stories);
        })
        .catch(err => reject(err));
})
export const freeFetch = (url) => new Promise(function (resolve, reject) {
    fetch(url)
        .then(function (response) {
            if (response.status >= 400) {
                reject(new Error("Bad response from server"))
            }
            return response.json();
        })
        .then(function (stories) {
            resolve(stories);
        })
        .catch(err => reject(err));
})
/**
 * fetch send post data
 * @param {string} url 
 * @param {urlencoding} body 
 */
export const doPost = (url, body) => {

    return new Promise(function (resolve, reject) {
        fetch(DEV + url, {
            // credentials: 'include', //pass cookies, for authentication
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
            body,
        })
            .then(function (response) {
                if (response.status >= 400) {
                    reject(new Error("Bad response from server", response))
                }
                return response.json();
            })
            .then(function (stories) {
                resolve(stories);
            })
            .catch(err => reject(err));
    })
}

export const doUpload = (url, body) => {
    return new Promise((resolve, reject) => {
        fetch(HOST + url, {
            // credentials: 'include', //pass cookies, for authentication
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
            body,
        }).then(doc => {
            resolve(doc);
        }).catch(err => reject(err));
    })
}