const invert = function(obj){
   let keys = Object.keys(obj)
    let val = Object.values(obj)
    let empObj = {}
    console.log(keys)
    console.log(val)

    let creObj = Object.fromEntries(val.map ((value, index) => [value, keys[index]]))

    keys.forEach(key => {
        val.forEach(val => {
            empObj[key] = val;
        })
    })
    // console.log(empObj)
    // console.log(creObj)

    return creObj
}

console.log(invert({ x: 'a', y: 'b', z: 'c' }))
console.log(invert({ language: 'english' }))