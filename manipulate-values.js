const filterValues = function(obj, callback){
    let newObj; 
    newObj = Object.fromEntries(
        Object.entries(obj).filter(([key, val]) => callback(val)
    )
    )
    return newObj
}

const mapValues = function(obj, callback){
    let newObj; 
    newObj = Object.fromEntries(
        Object.entries(obj).map(([key, val]) => [key, callback(val)]
    )
    )
    return newObj
}

const reduceValues = function(obj, callback, start = 0){
    if (start ==  undefined) {
        start = 0
    }
    let numb
    numb = Object.values(obj).reduce(callback, start)
    return numb
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

const result = filterValues(nutrients, (nutrient) => nutrient >= 12);
console.log(result); 

console.log(mapValues(nutrients, (v) => v + 1))

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))