// libraries
const axios = require('axios')
const chalk = require('chalk')

// methods
const compose = require('../methods/search.js').compose
const search = require('../methods/search.js').search

// get request to next_url and save body in last_block and next_block
async function get(next_url, nonce) {
    await axios.get(next_url)
        .then(res => {
            // if next block returns open === false, else continue
            if (res.data.open === false) {
                let message = res.data.message
                let countdown = res.data.countdown

                console.log(chalk.inverse(`${message}: ${countdown}`))

                setTimeout(() => {
                    get(next_url, nonce)
                },
                    parseInt(countdown)
                )

            } else {
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
                let result = search(compose(last_block, next_block), nonce)

                console.log(`\nmatched nonce: ${result}`)

                return result
            }
        })
        .catch(error => {
            console.log(chalk.red(error.response.data))
            return
        })
}
module.exports = {
    get: get
}