const longWords = function(arr){
    let satisfied = true
    arr.every((val) => {
        if (val.length < 5 ){
            satisfied = false
        }
    }
    )
    return satisfied
}

const oneLongWord = function(arr){
    let satisfied = false
    arr.some((val) => {
        if (val.length >= 10) {
            satisfied = true
        }
    })
    return satisfied
}

const noLongWords = function(arr){
    let satisfied = true
    arr.every((val) => {
        if (val.length >= 7){
            satisfied = false
        }
        return true
    })
    return satisfied
}
