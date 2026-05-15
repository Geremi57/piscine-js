const every = function(arr, callback){
    let satisfied = true
    for(let i = 0; i < arr.length; i++){
        fin = callback(arr[i], i, arr)

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
        const result =
            callback(arr[i], i, arr);
        if (result) {
            satisfied = true
            return ;
        }
    }
    return satisfied
};



const none = function(arr, func) {
    let satisfied = true
    for (let i = 0; i < arr.length; i++) {
        const result =
            func(arr[i], i, arr);
        if (result) {
            satisfied = false
            return satisfied;
        }
    }
    return satisfied;
};
