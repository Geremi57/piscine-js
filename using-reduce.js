const adder= function(arr){
    const added = arr.reduce((acc, val) => {
       return acc + val
    })
    return added
}

// console.log(adder([1, 2, 3, 5, 8]))

const sumOrMul = function(arr, xtra){
    if (xtra == undefined){
        xtra = 1
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
//output is -> 278







  const fArr1 = [
    (x) => x + 2,
    (x) => x ** 2,
    (x) => x - 7,
    (x) => `result: [${x}]`,
  ]

  const fArr2 = [
    (x) => x + 20,
    (x) => x * 3,
    (x) => {
      return {
        result: x,
        isOdd: x % 2 === 0,
      }
    },
  ]

  console.log(funcExec(fArr1, 10))