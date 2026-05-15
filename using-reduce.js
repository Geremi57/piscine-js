const adder= function(arr, start=0){
    const added = arr.reduce((acc, val) => {
       return acc + val
    }, start)
    return added
}

// console.log(adder([1, 2, 3, 5, 8]))

const sumOrMul = function(arr, xtra){
    if (xtra == undefined){
        xtra = 0
    }
    const sumOrMul = arr.reduce((acc, val) => {
        // acc = xtra * val
        if (val == 0) {
            acc = acc * val
        }
        if (val % 2 == 0){
            // acc = acc 
           acc = acc * val
        }else{
            // acc = acc + xtra
            acc = acc + val
        }
        return acc
    }, xtra)
 return sumOrMul
}

const funcExec = function(arr, start=0){
    const funcExec = arr.reduce((acc, val) => {
        return val(acc)
    }, start)
    return funcExec
}


console.log(adder([1, 2, 3, 4]), 10)

console.log(adder([9, 24, 7, 11, 3], 10), 64)


// console.log(1+2+3+5+8)
console.log(sumOrMul([18, 17, 7, 13, 25], 12))
console.log(sumOrMul([1, 2, 3, 5, 8], 5))
console.log(sumOrMul([8, 16, 7, 0, 32]))
console.log(sumOrMul([29, 23, 3, 2, 25]))

console.log(sumOrMul([8, 16, 7, 0, 31]), 31)
//output is -> 278



