// check array length and fill up starting at 0 counting++ till length%10 === 0
function specify(array, n) {

    if (array.length % 10 === 0) {
        array.map(x => {
            return x
        })
        return array
    } else {
        array.push(parseInt(n))
        return specify(array, n += 1)
    }
}

module.exports = {
    specify: specify
}