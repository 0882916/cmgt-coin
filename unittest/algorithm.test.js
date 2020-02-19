const algorithm = require('../methods/createhash/algorithm.js').algorithm

const value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const tobe = '0000000000'

test('string', () => {
    expect(algorithm(value)).toStrictEqual(tobe)
})