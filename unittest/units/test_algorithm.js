const chalk = require('chalk')

const algorithm = require('../../createhash/methods/algorithm.js').algorithm

function test_algorithm(array) {
    console.log(chalk.cyan(`=== algorithm method ===`))
    // testing function algorithm
    let number_array = algorithm(array)

    if (zero_to_nine === true) {
        console.log(chalk.green(`[x] array index's do not contain characters other than [0-9]!`))
    } else {
        console.error(chalk.red(`ERROR: algorithm function contains characters outside of [0-9]!`))
    }
}

module.exports = {
    test_algorithm: test_algorithm
}