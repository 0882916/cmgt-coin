// take first 10 index's and second 10 index's and add them together
// mod%10 value and place back, repeat
function algorithm(array) {
    // if length !== 10 apply logic, else return string value
    if (array.length !== 10) {
        first_ten_index = array.slice(0, 10)
        second_ten_index = array.slice(10, 20)

        array.splice(0, 20)

        // add index 0 to 10, 1 to 11, etc
        for (let i = 9; i >= 0; i--) {
            let added = (first_ten_index[i] + second_ten_index[i])
            array.unshift(added % 10)
        }
        // repeat
        return algorithm(array)
    } else {
        return array.join('')
    }
}

module.exports = {
    algorithm: algorithm
}