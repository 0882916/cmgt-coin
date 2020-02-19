const calculate = require('../methods/calculate.js').calculate

const value = 'a string of 3 numbers and 10 words with spaces'
const tobe = '4527915343'

test('returns string with length 10 containing just 0 through 9', () => {
    expect(calculate(value)).toStrictEqual(tobe)
})