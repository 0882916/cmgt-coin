const chalk = require('chalk')

const specify = require('../../methods/createhash/specify.js').specify

function test_specify(array) {
    console.log(chalk.cyan(`=== specify method ===`))
    // testing function specify
    let mod_ten_array = specify(array)

    let tenfold =  mod_ten_array.length%10 === 0

    if (tenfold === true) {
        console.log(chalk.green(`[x] array legnth equals %10 === 0!`))
    } else {
        console.error(chalk.red(`ERROR: array is not filled correctly!`))
    }
    
    let zero_to_nine = mod_ten_array.every(digit => {
        return digit >= 0 && digit <= 9
    })

    if (zero_to_nine === true) {
        console.log(chalk.green(`[x] array index's do not contain characters other than [0-9]!`))
    } else {
        console.error(chalk.red(`ERROR: numberfy function contains characters outside of [0-9]!`))
    }

    let multi_to_single = mod_ten_array.every(digit => {
        return digit.length === 1
    })

    if (multi_to_single === true) {
        console.log(chalk.green(`[x] array index's do not contain mutli character entries!`))
    } else {
        console.error(chalk.red(`ERROR: numberfy function contains characters outside of [0-9]!`))
    }

    let check_type = mod_ten_array.every(digit => {
        return typeof digit === 'number'
    })

    if (check_type === true) {
        console.log(chalk.green(`[x] array index's do not contain none number type entries!`))
    } else {
        console.error(chalk.red(`ERROR: numberfy function contains characters that are not numbers!`))
    }
}

module.exports = {
    test_specify: test_specify
}