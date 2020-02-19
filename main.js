const get = require('./requests/get').get
const post = require('./requests/post').post

// user and url info
const base_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain'
const next_url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain/next'

const name = 'Kaspar Dohrin 0882916'
const start_value = 0

fetchandupdate()

async function fetchandupdate() {
    console.time('\nFINAL TIME')
    await (post(base_url, name, await get(next_url, start_value)))

    console.timeEnd('\nFINAL TIME')
}
