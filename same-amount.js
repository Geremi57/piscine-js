const sameAmount = function(str, reg1, reg2){

     let r1 = new RegExp(reg1.source, "g")
    let r2 = new RegExp(reg2.source, "g")

    let match1 = str.match(r1) || []
    let match2 = str.match(r2) || []

    return match1.length === match2.length
}

