
const round = function (n){

    if (n === Infinity || n === -Infinity) {
        return n
    }
    // Math.round(n)
    let wasNeg = false
    if (n < 0) {
        wasNeg = true
        n *= -1
    }
    let whole = trunc(n)
    let dec = n - whole
    let val = 0
    let fin = n
    
    // console.log(dec);
    if (dec >= 0.5) {
        val = 1 - dec
        fin = n + val
    }else if (dec < 0.5) {
        // val = 1 - dec
        fin = n - dec
    }
    if (wasNeg){
        fin *= -1
    }
    return fin 
}

const ceil = function (n) {
    if (n === Infinity || n === -Infinity) {
        return n
    }
    let wasNeg = false
    if (n < 0) {
        wasNeg = true
        // n *= -1
    }
    let whole = trunc(n)
    // console.log(whole);
    
    let dec = n - whole
    // console.log(dec);
    
    let val = 0
    let fin = n
    if (dec > 0 && dec < 0.5){
        val = 1 - dec
        fin = n + val
        return fin
    }
    if (dec <= -0.5) {
        dec *= -1
        val = 1 - dec
        fin = n + dec
        return fin
    }else if (dec > -0.5 && dec < 0){
        dec *= -1
        val = 1 - dec
        fin = n + dec
        return fin
    }
    if (dec >= 0.5){
        val = 1 - dec
        fin = n + val
    }

// if (wasNeg){
//         fin *= -1
//     }
    return fin

}

const floor = function (n) {
    if (n === Infinity || n === -Infinity) {
        return n
    }
    let wasNeg = false
    if (n < 0) {
        wasNeg = true
        // n *= -1
    }
    let whole = trunc(n)
    // console.log(whole);
    let dec = n - whole
    // console.log(dec); 
// console.log(nums.map(ceil));
    
    let val = 0
    let fin = n
    if (dec > 0 && dec < 0.5){
        val = 1 - dec
        fin = n - dec
        return fin
    }
    if (dec <= -0.5) {
        dec *= -1
        val = 1 - dec
        fin = n - val
        return fin
// console.log(nums.map(ceil));

    }else if (dec > -0.5 && dec < 0){
        dec *= -1
        val = 1 - dec
        fin = n - val
        return fin
    }
    if (dec >= 0.5){
        val = 1 - dec
        fin = n - dec
    }

    return fin
}

const trunc = function (n) {
    if (n === Infinity || n === -Infinity) {
        return n
    }

    let count = 0
    let number = n

    if (number < 0) {
        while (number <= -1) {
            number += 1
            count -= 1
        }
    } else {
        while (number >= 1) {
            number -= 1
            count += 1
        }
    }

    return count
}