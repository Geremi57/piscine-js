const multiply = function(a, b){
    let bWasNeg = false
    let aWasNeg = false
    if (b < 0){
        bWasNeg = true
        b = -b
    }
    if (a < 0) {
        aWasNeg = true
        a = -a
    }
    if (a == 0 || b == 0){
        return 0
    }
    let fin = 0
    for(let i = 0; i < b; i++){
        fin += a
    }
    if (bWasNeg && aWasNeg) {
        fin = fin
    }else if (bWasNeg || aWasNeg){
        fin = -fin
    }
    return fin
}

const divide = function(a, b) {
    let bWasNeg = false
    let aWasNeg = false
    if (b < 0){
        bWasNeg = true
        b = -b
    }
    if (a < 0) {
        aWasNeg = true
        a = -a
    }
    let fin =  a 
    
    for (let i = 0; i < b; i++){ 
        if (b > fin) {
            fin = 0
            return fin
            // break
        }
        fin -= b

        if (b > fin) {
            fin = i + 1
            break
        }
    }
    // console.log(fin)
    if (bWasNeg && aWasNeg) {
        fin = fin
    }else if (bWasNeg || aWasNeg){
        fin = -fin
    }
    return fin
}

const modulo = function(a, b){
     let bWasNeg = false
    let aWasNeg = false
    if (b < 0){
        bWasNeg = true
        b = -b
    }
    if (a < 0) {
        aWasNeg = true
        a = -a
    }
    let fin = a
    for (let i = 1; i < b; i++){ 
        if (b > fin) {
            return fin
        }
        fin -= b
        if (b > fin) {
            break
        }
    }
    if (bWasNeg && aWasNeg) {
        fin = -fin
    }else if (aWasNeg){
        fin = -fin
    }else if (bWasNeg){
        fin = fin
    }

    return fin
}
