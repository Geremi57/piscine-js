// const set = new Set();

const arrToSet = function(arr){
    arr.forEach(el => {
        set.add(el)
    });
    return set
}

const arrToStr = function(arr){
    let joined = arr.join("")
    return joined
}

const setToArr = function(set){
    let arr = []

    set.forEach(el => {
        arr.push(el)
    })
    return arr
}

const setToStr = function(set){
    let joinedSet = Array.from(set).join("")
    return joinedSet
}

const strToArr = function(str){
    let splitted = str.split("")
    return splitted
}

const strToSet = function(str){
    let splitted = str.split("")
    let set = new Set(splitted)
    return set

}

const mapToObj = function(map) {
    let obj = Object.fromEntries(map)
    return obj
}

const objToArr = function(obj){
    let arr = []
    Object.values(obj).forEach(el => {
        arr.push(el)
    })
    return arr
}

const objToMap = function(obj){
    let map = new Map(Object.entries(obj))
    return map
}

const arrToObj = function(arr){
    let obj = {...arr}
    return obj

}

const strToObj = function(str){
    let arr = str.split("")
    let obj = {...arr}
    return obj
}

const superTypeOf = function(val){

    if (val instanceof Map) {
        return 'Map'
    }else if (val instanceof Set){
        return 'Set'
    }else if (val instanceof Array){
        return 'Array'
    }else if (typeof val === undefined){
        return 'undefined'
    }else if (val === null){
        return 'Null'
    }
    return typeof val
}
