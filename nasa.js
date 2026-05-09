const nasa = function(n){
    let str = "" 
    for (let i =1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            str += "NASA "
            continue
        }
        if (i % 3 == 0){
            str += "NA "
            continue
        }
        if (i % 5 == 0) {
            str += "SA "
            continue
        }
        str += `${i} `
    }
    return str
}

// console.log(nasa(60));
