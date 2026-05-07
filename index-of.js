const indexOf = function(arr, char, start){
    let fin = -1
    if (start == undefined) {
        start = 0
    }
        for (let i = start; i < arr.length; i++){
            if (arr[i] == char){
                fin = i
                break
            }
        }
    return fin
}

const lastIndexOf = function(arr, char, start) {
    let fin = -1
    if (start == undefined) {
        start = arr.length
    }
    for (let i = start; i >= 0; i--) {
        if (arr[i] == char) {
            fin = i
            break
        }

    }
    return fin
}

const includes = function(arr, char) {
    let bool = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == char){
            fin = true
            break
        }
    }
    return fin
}