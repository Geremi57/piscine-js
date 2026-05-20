const pick = function(obj, arr){
    // let keys = Object.keys(obj)
    // let vals = Object.values(obj)

    const arr2 = Array.isArray(arr) ? arr : [arr]
    let newObj;

    // console.log(arr2[0])
    if (arr2[0] === undefined){
        return obj
    }

    
    newObj = Object.fromEntries(
        arr2.filter(key => key in obj).map(key => [key, obj[key]])
    )
    
    // }
        // if (arr2[index] == key){
    // else if (typeof arr2 == 'string'){
    //     newObj = Object.fromEntries(
    //        arr2.filter(key => key in obj).map(key => [key, obj[key]])
    //     )
    // }
    return newObj
}

const omit = function(obj, arr){
    const arr2 = Array.isArray(arr) ? arr : [arr]
    const keys = Object.keys(obj)
    // if (arr2.length > 0){
    //     return obj
    // }
    let newObj;
    //  if (arr2[0] === undefined){
    //     return obj
    // }
    //   if (arr2 instanceof Array){
        newObj = Object.fromEntries(
            keys.filter(key => !arr2.includes(key)).map(key => [key, obj[key]])
        )
    // }
        // if (arr2[index] == key){
    // }else if (typeof arr2 == 'string'){
    //     newObj = Object.fromEntries(
    //        arr2.filter(key => key in obj).map(key => [key, obj[key]])
    //     )
    // }
    return newObj
}

// console.log(pick({ a: "x", b: "y", c: "z" }))

//  console.log(pick({ firstName: 'James', lastName: 'Bond' }, ['firstName', 'lastName']))
// //   console.log(pick({ brand: 'ford', motor: 'v8', year: 2000 }))
// //   console.log(pick({ brand: 'ford', year: 2000 }))
//    console.log(pick({ firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }, ['ageVerified']))
// //   console.log(pick({ ageVerified: false }))
// console.log(pick({ brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' }, ['brand']))
//   console.log(pick({ drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }, ['grinders', 'saws']))
// //   console.log(pick({ drill: 'bosh' }))
//   console.log(pick({ board: 'monopoly', cards: 'poker', dice: 'roulette' }))
// //   console.log(pick({ dice: 'roulette' }))
//   console.log(pick({ England: 'english', Spain: 'spanish', Portugal: 'portuguese' }, 'Spain'))
// //   console.log(pick({ England: 'english', Portugal: 'portuguese' }))
// //   console.log(pick({ samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' }))

// console.log(omit({ board: 'monopoly', cards: 'poker', dice: 'roulette' },  ['board', 'cards']))
// console.log(omit({ drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }, ['grinders', 'saws']))
// console.log(omit({ England: 'english', Spain: 'spanish', Portugal: 'portuguese' },'Spain'))
// console.log(omit({ samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' }))