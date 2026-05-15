const fold = function(arr, callback, acc){
    if (acc == undefined) {
        acc = 0
    }
    for (let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i], arr)
    }
    return acc
}

const foldRight = function(arr, callback, acc){
     if (acc == undefined) {
        acc = 0
    }
    for (let i = arr.length-1; i >= 0; i--){
        acc = callback(acc, arr[i], arr)
    }
    return acc
}

function reduce(arr, callback) {
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {

        const curr = arr[i];

        acc = callback(acc,curr,i,arr);
    }
    return acc;
}

const reduceRight = function(arr, callback){
     let acc = arr[arr.length-1]
    for (let i = arr.length-2; i >= 0; i--) {

        const curr = arr[i];

        acc = callback(acc,curr,i,arr);
    }
    return acc;
}