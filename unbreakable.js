const split = function(str, sep){
    let arr = []
    let word = ""
    for (let i= 0; i < str.length; i++){
       if (str[i] == sep) {
            arr.push(word)
            word = ""
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
