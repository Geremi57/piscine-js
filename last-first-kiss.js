function first(arg){
    return arg[0]
}

function last(arg){
    return arg[arg.length-1]
}


function kiss(arg){
 let first = arg[0]
 let last = arg[arg.length-1]
 let arr = []

 arr.push(last)
 arr.push(first)
 return arr
}