function isPositive(num) {
    if (num > 0) {
        return true
    }
    else if (num < 0) {
        return false
    }
}

const abs = function(num){
    let abs = 0
    abs = num * 1
        if (num < 0){
            abs = num * -1
            return abs
        }
    if (num == null) {
        return 0
    }
    return abs
}
