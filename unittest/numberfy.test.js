const numberfy = require('../methods/createhash/numberfy.js').numberfy

const value = 'test'
const tobe = [1, 1, 6, 1, 0, 1, 1, 1, 5, 1, 1, 6]

test('string', () => {
    expect(numberfy(value)).toStrictEqual(tobe)
})