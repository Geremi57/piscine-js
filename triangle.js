const triangle = function(str, n){
    let fin = ""
    for (let i = 1; i <= n; i++){
        for (let j = 0; j < i; j++){
            fin += str
        }
        if (i < n) {
            fin += '\n'
        }
    }
    return fin
}

