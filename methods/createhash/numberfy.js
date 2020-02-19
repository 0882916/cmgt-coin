// strip white spaces, convert to character codes and split multi-character numbers'
function numberfy(string) {
    let charcodes = new Array()

    let stripped_string = string.replace(/\s/g, '')

    let regex = new RegExp("[0-9]")

    for (let i = 0; i < stripped_string.length; i++) {

        // if number true return else convert
        if (regex.test(stripped_string.charAt(i))) {
            charcodes.push(parseInt(stripped_string.charAt(i)))
        } else {
            let char_code = stripped_string.charCodeAt(i).toString()
            for (let j = 0; j < char_code.length; j++) {
                charcodes.push(parseInt(char_code.charAt(j)))
            }
        }
    }
    // return array of single digit intergers
    return charcodes
}

module.exports = {
    numberfy: numberfy
}