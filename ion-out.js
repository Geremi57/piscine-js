const ionOut = function(str){
    let out = str.match(/\w+/g) || []
    let arr = []

    
    for(let i = 0; i < out.length; i++){

        if (/tion$/.test(out[i])) {
            arr.push(out[i].replace(/ion$/, ""))
        }
    }

    // arr.push(withIon[withIon.length-1].replace(/\w[ion]/gi, ""))
    

    return arr
}
