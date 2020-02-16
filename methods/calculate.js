const numberfy = require('./createhash/numberfy.js').numberfy
const specify = require('./createhash/specify.js').specify
const algorithm = require('./createhash/algorithm.js').algorithm

function calculate(string) {
    let n = 0

    // take base string and modify it to be single numbers
    let array = numberfy(string)
    // take array of single numbers and fill to be %10 compatible
    let array_mod_10 = specify(array, n)
    // take %10 === 0 array length and apply mod10 algorithm
    let final_string = algorithm(array_mod_10)

    // return string of 10 numbers
    return final_string
}

module.exports = {
    calculate: calculate
}