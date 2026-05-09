const chunky = function(arr, n) {
    let twoDarr = []
    for (let i = 0; i < arr.length; i+= n) {
        let start = 0
        let sliced;
        // if (i == n) {
        //     sliced = 
        //     start = i + 1
        // }
        twoDarr.push(arr.slice(i, i + n))
    }
    return twoDarr
}
