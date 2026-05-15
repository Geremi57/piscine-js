const filter = function(arr, callback){
    let fin = []
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            fin.push(arr[i])
        }
    }
    return fin
}

const reject = function(arr, callback) {
    const rej = [];
     for (let i = 0; i < arr.length; i++) {
       const curr = arr[i];
       const satisfied =
         callback(curr, i, arr);
         if (!satisfied) {
            rej.push(curr);
        }
    }
    return rej;
};

const partition = function(arr, callback){
   return [filter(arr, callback), reject(arr, callback)]
}