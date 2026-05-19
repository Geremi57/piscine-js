const invert = function(obj){
   let keys = Object.keys(obj)
    let val = Object.values(obj)
    let empObj = {}
    console.log(keys)
    console.log(val)

    let creObj = Object.fromEntries(keys.map ((key, index) => [key, val[index]]))

    keys.forEach(key => {
        val.forEach(val => {
            empObj[key] = val;
        })
    })
    console.log(empObj)
    console.log(creObj)

}

console.log(invert({ x: 'a', y: 'b', z: 'c' }))