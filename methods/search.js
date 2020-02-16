const axios = require('axios')
const sha256 = require('sha256')
const chalk = require('chalk')

const calculate = require('./calculate.js').calculate

// takes two strings and combines them
function compose(last, next) {
    let string_last = calculate(last)
    let string_next = sha256(string_last) + next

    console.group(chalk.yellow('INFO: hash data'))
    console.log(chalk.yellow(`blockchain string:\n${last}\n`))
    console.log(chalk.yellow(`blockchain %10:\n${string_last}\n`))
    console.log(chalk.yellow(`blockchain hash:\n${sha256(string_last)}\n`))
    console.log(chalk.yellow(`transaction string:\n${sha256(string_last) + next}\n`))
    console.groupEnd('INFO: hash data')

    return string_next
}

// takes url, username, string made of hash last and string next block, and starting value
function search(url, name, string, nonce) {
    // hash of last block hash + string next block + nonce
    while (sha256(calculate(string + nonce)).slice(0, 4) !== '0000') {
        nonce++
    }
    console.log(chalk.cyan(`matched nonce: ${nonce}`))
    console.log(chalk.cyan(`matched hash: ${sha256(calculate(string + nonce))}`))

    // post nonce matched and username to url
    axios.post(url, {
        "nonce": nonce.toString(),
        "user": name
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res.data)
    }).catch(error => {
        console.log(error)
    })
}

module.exports = {
    search: search,
    compose: compose
}