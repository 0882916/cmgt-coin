const get = require('./requests/get').get
const post = require('./requests/post').post

// user and url info
const base_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain'
const next_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next'

const name = 'Kaspar Dohrin 0882916'
const start_value = 0

async function fetchandupdate() {
    console.time('\nFINAL TIME')

    let nonce = await get(next_url, start_value)

    if (nonce) await post(base_url, name, nonce) 
    ? console.log(`error, nonce not defined`) 
    : console.timeEnd('\nFINAL TIME')
}

fetchandupdate()