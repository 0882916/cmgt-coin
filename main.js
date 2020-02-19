// libraries
const axios = require('axios')
const chalk = require('chalk')

// methods
// const compose = require('./methods/search.js').compose
// const search = require('./methods/search.js').search
const promise = require('./methods/promise.js').promise

// user and url info
const name = 'goml'

const base_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain'
const next_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next'

const n = 12345678901234567890

let last_block
let next_block

get()

// get request to next_url and save body in last_block and next_block
function get() {
    axios.get(next_url).then(res => {
        // if next block returns open === false, else continue
        if (res.data.open === false) {
            console.log(chalk.inverse(res.data.message))
            return
        } else {
            console.time('\nFINAL TIME')
            last_block =
                res.data.blockchain.hash +
                res.data.blockchain.data[0].from +
                res.data.blockchain.data[0].to +
                res.data.blockchain.data[0].amount +
                res.data.blockchain.data[0].timestamp +
                res.data.blockchain.timestamp +
                res.data.blockchain.nonce

            next_block =
                res.data.transactions[0].from +
                res.data.transactions[0].to +
                res.data.transactions[0].amount +
                res.data.transactions[0].timestamp +
                res.data.timestamp

            promise(last_block, next_block, base_url, name, n)
        }
    }).catch(error => {
        console.log(chalk.red(error))
        return
    })
}

/*
* call method search for nonce, which takes base_url, username, the return value
* of the compose hash from blockchain added to the string of next_block and the value
* where nonce starts at (0)
*/
// function timeout() {
//     setTimeout(search(base_url, name, compose(last_block, next_block), 0), 120000)
// }
// timeout()
// console.timeEnd('\nFINAL TIME')