const nasa = function(n){
    let str = "" 
    for (let i =1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            str += "NASA"
            if (i < n){
            str += " "
        }
            continue
        }
        if (i % 3 == 0){
            str += "NA"
            if (i < n){
            str += " "
        }
            continue
        }
        if (i % 5 == 0) {
            str += "SA"
            if (i < n){
            str += " "
        }
            continue
        }
        str += `${i}`
        if (i < n){
            str += " "
        }
        
    }
    return str
}
