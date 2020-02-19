const specify = require('../methods/createhash/specify.js').specify

const value = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1]
const tobe = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]

test('returns array with %10 compatible index-length and filler content starting from 0 through 8', () => {
    expect(specify(value, 0)).toStrictEqual(tobe)
})