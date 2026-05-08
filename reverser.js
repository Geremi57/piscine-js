const reverse = function(arr){
    if (arr instanceof Array) {
        let finArr = []
        for (let i=arr.length-1; i >= 0; i--){
            finArr.push(arr[i])
            console.log(arr);
            
        }
        return finArr
    }else if (typeof arr == "string"){
        let str = ""
        for (let i = arr.length-1;i >= 0; i--){
            str += arr[i]
        }
        return str
    }
}
