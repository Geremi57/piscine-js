const multiply = function(a, b){
    let bWasNeg = false
    let aWasNeg = false
    if (b < 0){
        bWasNeg = true
        b *= -1
    }
    if (a < 0) {
        aWasNeg = true
        a *= -1
    }
    let fin = 0
    for(let i = 0; i < b; i++){
        fin += a
    }
    if (bWasNeg && aWasNeg) {
        fin *= -1 * -1
    }else if (bWasNeg || aWasNeg){
        fin *= -1
    }
    return fin
}

const divide = function(a, b) {
    let bWasNeg = false
    let aWasNeg = false
    if (b < 0){
        bWasNeg = true
        b *= -1
    }
    if (a < 0) {
        aWasNeg = true
        a *= -1
    }
    let fin =  a 
    
    for (let i = 1; i < b; i++){ 
        fin -= b
        if (b > fin) {
            fin = i 
            break
        }
    }
    console.log(fin)
    if (bWasNeg && aWasNeg) {
        fin *= -1 * -1
    }else if (bWasNeg || aWasNeg){
        fin *= -1
    }
    return fin
}

const modulo = function(a, b){
     let bWasNeg = false
    let aWasNeg = false
    if (b < 0){
        bWasNeg = true
        b *= -1
    }
    if (a < 0) {
        aWasNeg = true
        a *= -1
    }
    let fin = a
    for (let i = 1; i < b; i++){ 
        fin -= b
        if (b > fin) {
            break
        }
    }
    if (bWasNeg && aWasNeg) {
        fin *= -1 * -1
    }else if (bWasNeg || aWasNeg){
        fin *= -1
    }

    return fin
}
