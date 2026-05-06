const max = function(num1, num2) {
    let max = num1
    if (num1 > num2){
        max = num1
    }else if(num2 > num1){
        max = num2
    }
    return max
}

const min = function(num1, num2) {
    let min = num1
     if (num1 > num2){
        min = num2
    }else if(num2 > num1){
        min = num1
    } 
    return min
}
