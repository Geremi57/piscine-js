const pyramid = function(str, n){
    let end = (n * 2) - 1
    let fin = ""
    for (let i = 1; i <= n; i++){
                let blocks = (2 * i) - 1
                let space = (n - i) * str.length
        fin += " ".repeat(space)

        for (let j = 0; j < blocks; j++){

            // if (j < n - i -1) {
            //     fin += " ".repeat(str.length)                
            // }else if (j <= n +i -1){
            //     fin += str
            // }
            // let mid = (end - i) / 2
            fin += str
        }
        if (i  <  n) {
            fin += "\n"
        
    }
}
    
    return fin

}