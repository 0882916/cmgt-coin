const compose = require('../methods/search.js').compose

const value_last = '000020602f2706b6bf5d74a166d38a7e979d80b2cfca73734e5e6d756a1d3c25CMGT Mining Corporation0944552115821078404441582108018174prnt.sc/t9sics'
const value_next = 'CMGT Mining Corporation0944552115821080033101582108254333'
const tobe = '000023867547067da4672acda2676151bbc66235fc40f2c4afbfa0e67821ed94CMGT Mining Corporation0944552115821080033101582108254333'

test('string', () => {
    expect(compose(value_last, value_next)).toStrictEqual(tobe)
})