const compose = require('./search.js').compose
const search = require('./search.js').search

async function promise(last, next, url, name, n) {

    let parallel = [
        first = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 5000))
        }),
        second = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(search(url, name, compose(last, next), n * 1), 4500))
        }),
        // third = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 2), 4000))
        // }),
        // fourth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 3), 3500))
        // }),
        // fifth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 4), 3000))
        // }),
        // sixth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 5), 2500))
        // }),
        // seventh = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 6), 2000))
        // }),
        // eigth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 7), 1500))
        // }),
        // nineth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 8), 1000))
        // }),
        // tenth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 9), 500))
        // }),
    ]

    Promise.race(parallel)
}
module.exports = {
    promise: promise
}
