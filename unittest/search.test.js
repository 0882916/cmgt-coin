const search = require('../methods/search.js').search

// const string = '000023867547067da4672acda2676151bbc66235fc40f2c4afbfa0e67821ed94CMGT Mining Corporation0944552115821080033101582108254333'
// const nonce = '62664'
// const tobe = '000063ea5a5c42cc01b2babf1aaaa4cbb9331c1177aa7d86b9250efcd4aed7f0'

const string = '000023867547067da4672acda2676151bbc66235fc40f2c4afbfa0e67821ed94CMGT Mining Corporation0944552115821080033101582108254333'
const nonce = 62664
const tobe = 62664

test('string', () => {
    expect(search(string, nonce)).toStrictEqual(tobe)
})