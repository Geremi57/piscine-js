const split = function(str, sep) {
    let arr = []
    let word = ""
    if (sep == "") {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }

    return arr
}

    for (let i = 0; i < str.length; i++) {

        let match = true

        for (let j = 0; j < sep.length; j++) {
            if (str[i + j] != sep[j]) {
                match = false
                break
            }
        }

        if (match) {
            arr.push(word)
            word = ""
            i += sep.length - 1
        } else {
            word += str[i]
        }
    }

    arr.push(word)

    return arr
}


const join = function(arr, sep){
    let str = ""
    if (sep == undefined){
        sep = ','
    }
    for (let i= 0; i < arr.length; i++){
        str += arr[i]
        if (i < arr.length-1){
            // str += " "
            str += sep
            // str += " "

        }
    }
    return str
}
