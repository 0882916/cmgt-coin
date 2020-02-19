const chalk = require('chalk')

const numberfy = require('../methods/createhash/numberfy.js').numberfy

function test_numberfy(string) {
    console.log(chalk.cyan(`=== numberfy method ===`))
    // testing function numberfy
    let number_array = numberfy(string)

    let zero_to_nine = number_array.every(digit => {
        return digit >= 0 && digit <= 9
    })

    if (zero_to_nine === true) {
        console.log(chalk.green(`[x] array index's do not contain characters other than [0-9]!`))
    } else {
        console.error(chalk.red(`ERROR: numberfy function contains characters outside of [0-9]!`))
    }

    let multi_to_single = number_array.every(digit => {
        return digit.length === 1
    })

    if (multi_to_single === true) {
        console.log(chalk.green(`[x] array index's do not contain mutli character entries!`))
    } else {
        console.error(chalk.red(`ERROR: numberfy function contains characters outside of [0-9]!`))
    }

    let check_type = number_array.every(digit => {
        return typeof digit === 'number'
    })

    if (check_type === true) {
        console.log(chalk.green(`[x] array index's do not contain none number type entries!`))
    } else {
        console.error(chalk.red(`ERROR: numberfy function contains characters that are not numbers!`))
    }
}

module.exports = {
    test_numberfy: test_numberfy
}