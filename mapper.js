const map = function(arr, callback){
    let fin = []
    for (let i = 0; i < arr.length; i++){
        // console.log(fin[i]);
        fin.push(callback(arr[i]))
    }
    return fin
}


// console.log(map([1,2,3,4,5], callback))