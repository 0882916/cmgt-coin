// libraries
const axios = require('axios')
const chalk = require('chalk')

// methods
const compose = require('./methods/search.js').compose
const search = require('./methods/search.js').search

// user and url info
const name = 'Kaspar Dohrin 0882916'

const base_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain'
const next_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next'

console.clear

// get request to next_url and save body in last_block and next_block
axios.get(next_url)
    .then(res => {
        // if next block returns open === false, else continue
        if (res.data.open === false) {
            console.log(chalk.inverse(res.data.message))
            return
        } else {
            console.time('\nFINAL TIME\n')
            let last_block =
                res.data.blockchain.hash +
                res.data.blockchain.data[0].from +
                res.data.blockchain.data[0].to +
                res.data.blockchain.data[0].amount +
                res.data.blockchain.data[0].timestamp +
                res.data.blockchain.timestamp +
                res.data.blockchain.nonce

            let next_block =
                res.data.transactions[0].from +
                res.data.transactions[0].to +
                res.data.transactions[0].amount +
                res.data.transactions[0].timestamp +
                res.data.timestamp

            /* 
            * call method search for nonce, which takes base_url, username, the return value
            * of the compose hash from blockchain added to the string of next_block and the value
            * where nonce starts at (0)
            */
            search(base_url, name, compose(last_block, next_block), 0)

            console.timeEnd('\nFINAL TIME\n')
        }
    })
    // catch error when get request fails
    .catch(error => {
        console.log(chalk.red(error))
        return
    })