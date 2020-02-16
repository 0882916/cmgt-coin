const chalk = require('chalk')

const test_numberfy = require('./units/test_numberfy.js').test_numberfy
const test_specify = require('./units/test_specify.js').test_specify
const test_algorithm = require('./units/test_algorithm.js').test_algorithm

let string = 'test'
let array = [0, 1, 2, 3, 4, 5]

unittest(string, array)

function unittest(string, array) {
    let errors = 0

    console.time(chalk.yellow('UNIT TEST DURATION'))
    console.log(chalk.yellow(`\nstarting unit test ...\n`))

    test_numberfy(string)
    test_specify(array)

    console.log(chalk.yellow(`\n... unit test complete with ${errors} errors!`))
    console.timeEnd(chalk.yellow('UNIT TEST DURATION'))
}