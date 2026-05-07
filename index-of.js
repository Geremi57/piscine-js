const indexOf = function(arr, char){
    let fin = -1
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == char){
                fin = i
                break
            }
        }
    return fin
}

const lastIndexOf = function(arr, char) {
    let fin = -1
    for (let i = arr.length; i >= 0; i--) {
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