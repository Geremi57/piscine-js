const every = function(arr, callback){
    let satisfied = true
    for(let i = 0; i < arr.length; i++){
      let fin = callback(arr[i], i, arr)

        if (!fin){
            satisfied = false
            return satisfied
        }
    }
    return satisfied
}



const some = function(arr, callback) {
    let satisfied = false
    for (let i = 0; i < arr.length; i++) {
        let fin =
            callback(arr[i], i, arr);
        if (fin) {
            satisfied = true
            return satisfied;
        }
    }
    return satisfied
};



const none = function(arr, callback) {
    let satisfied = true
    for (let i = 0; i < arr.length; i++) {
        let fin =
            callback(arr[i], i, arr);
        if (fin) {
            satisfied = false
            return satisfied;
        }
    }
    return satisfied;
};
