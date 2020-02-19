const algorithm = require('../methods/createhash/algorithm.js').algorithm

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

test('string', () => {
    expect(algorithm(array)).toBe(array.length===10)
})