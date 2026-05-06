
const arrToSet = function(arr){
    let set = new Set();
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
    const type = typeof val

    if (type === 'string') return 'String'
    if (type === 'number') return 'Number'
    if (type === 'boolean') return 'Boolean'
    if (type === 'function') return 'Function'
    if (type === 'object') return 'Object'

    return type

}



const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate will be ignored
set.add(3);
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");

// Test each function
console.log("arrToSet:", arrToSet(arr));
console.log("arrToStr:", arrToStr(arr));
console.log("setToArr:", setToArr(set));
console.log("setToStr:", setToStr(set));
console.log("strToArr:", strToArr(str));
console.log("strToSet:", strToSet(str));
console.log("mapToObj:", mapToObj(map));
console.log("objToArr:", objToArr(obj));
console.log("objToMap:", objToMap(obj));
console.log("arrToObj:", arrToObj(arr));
console.log("strToObj:", strToObj(str));

// Test superTypeOf with different types
console.log("superTypeOf(map):", superTypeOf(map));
console.log("superTypeOf(set):", superTypeOf(set));
console.log("superTypeOf(obj):", superTypeOf(obj));
console.log("superTypeOf(str):", superTypeOf(str));
console.log("superTypeOf(666):", superTypeOf(666));
console.log("superTypeOf(NaN):", superTypeOf(NaN));
console.log("superTypeOf(arr):", superTypeOf(arr));
console.log("superTypeOf(null):", superTypeOf(null));
console.log("superTypeOf(undefined):", superTypeOf(undefined));
console.log("superTypeOf(superTypeOf):", superTypeOf(superTypeOf));