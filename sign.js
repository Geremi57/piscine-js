const sign = function(num){
    let sign = 0
    if (num < 0) {
        sign = -1
    }
    else if (num > 0) {
        sign = 1
    }
    return sign
}

const sameSign = function(num1, num2){
    let bool = false
    if (num1 > 0 && num2 > 0) {
        bool = true
    }else if (num1 < 0 && num2 < 0) {
        bool = true
    }else if (num1 == 0 && num2 == 0) {
        bool = true
    }
    return bool
}