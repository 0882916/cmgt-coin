// libraries
const axios = require('axios')

// post nonce matched and username to url
async function post(base_url, name, nonce) {
    await axios.post(base_url, {
        "nonce": nonce.toString(),
        "user": name
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res.data)
    }).catch(error => {
        console.log(error)
    })
}

module.exports = {
    post: post
}