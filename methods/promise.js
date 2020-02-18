const compose = require('./search.js').compose
const search = require('./search.js').search

async function promise(last, next, url, name, n) {

    let parallel = [
        first = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 500))
        }),
        second = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 475))
        }),
        third = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 450))
        }),
        // fourth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 425))
        // }),
        // fifth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 400))
        // }),
        // sixth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 375))
        // }),
        // seventh = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 350))
        // }),
        // eigth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 325))
        // }),
        // nineth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 300))
        // }),
        // tenth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 275))
        // }),
        // eleventh = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 250))
        // }),
        // twelveth = new Promise(function (resolve, reject) {
        //     setTimeout(() => resolve(search(url, name, compose(last, next), n * 0), 225))
        // }),
    ]

    Promise.race(parallel)
}
module.exports = {
    promise: promise
}
