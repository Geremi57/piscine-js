const map = function(arr, callback){
    let fin = []
    for (let i = 0; i < arr.length; i++){
        // console.log(fin[i]);
        fin.push(callback(arr[i], i, arr))
    }
    return fin
}
const flatMap = function(arr, func) {
    const fin = [];
    const mapped = map(arr, func);
    for (let i = 0; i < mapped.length; i++) {
        const curr = mapped[i];
        if (Array.isArray(curr)) {
            for (let j = 0; j < curr.length; j++) {
                fin.push(curr[j]);
            }

        } else { 
             fin.push(curr);
        }
    }

    return fin;
};
// console.log(map([1,2,3,4,5], callback))