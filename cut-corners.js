
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


// const modulo = function(a, b){
//      let bWasNeg = false
//     let aWasNeg = false
//     if (b < 0){
//         bWasNeg = true
//         b = -b
//     }
//     if (a < 0) {
//         aWasNeg = true
//         a = -a
//     }
//     let fin = a
//     for (let i = 1; i < b; i++){ 
//         if (b > fin) {
//             return fin
//         }
//         fin -= b
//         if (b > fin) {
//             break
//         }
//     }
//     if (bWasNeg && aWasNeg) {
//         fin = -fin
//     }else if (aWasNeg){
//         fin = -finlet i = 0;
//     let step = n < 0 ? -1 : 1;

//     while ((i + step) <= n && n >= 0) {
//         i += step;
//     }

//     while ((i + step) >= n && n < 0) {
//         i += step;
//     }

//     return i;
//     }else if (bWasNeg){
//         fin = fin
//     }

//     return fin
// }
const trunc = function(n) {
    if (n < 0) {
        let i = 0
        while (i > n) i--
        return i + 1 > n ? i + 1 : i
    }

    let i = 0
    while (i <= n) i++
    return i - 1
}
