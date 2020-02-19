const numberfy = require('../methods/createhash/numberfy.js').numberfy

const value = 'test'
const tobe = [1, 1, 6, 1, 0, 1, 1, 1, 5, 1, 1, 6]

test('returns an array with single digit integers per index containing soley characters 0 through 9', () => {
    expect(numberfy(value)).toStrictEqual(tobe)
})