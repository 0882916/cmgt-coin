const sha256 = require('sha256')

const calculate = require('./calculate.js').calculate

// takes two strings and combines them
function compose(last, next) {
    let string_last = calculate(last)
    let string_next = sha256(string_last) + next

    return string_next
}

// takes url, username, string made of hash last and string next block, and starting value
function search(string, nonce) {
    // hash of last block hash + string next block + nonce
    while (sha256(calculate(string + nonce)).slice(0, 4) !== '0000') {
        nonce++
    }
    return nonce
}

module.exports = {
    search: search,
    compose: compose
}