const specify = require('../methods/createhash/specify.js').specify

const value = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6]
const tobe = [1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6, 0, 1, 2, 3, 4, 5, 6, 7]

test('string', () => {
    expect(specify(value, 0)).toStrictEqual(tobe)
})