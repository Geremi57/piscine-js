const filterShortStateName = function(arr){
     let fin = arr.filter((val) => {
        if (val.length < 7){
            return val
        }
     })
     return fin
}

const filterStartVowel = function(arr){
    let fin = arr.filter((val) => {
        let beg = val[0].toLowerCase()
        if (beg == 'a' || beg == 'e' || beg == 'i'
            || beg == 'o' || beg == 'u'
        ){
            return val
        }
    })
    return fin
}

const filter5Vowels = function(arr){
    let fin = arr.filter((val) => {
        let toLower = val.toLowerCase()
        // console.log(toLower)
        let count = 0
        let start = 0
        for (let i = start; i < val.length; i++){
        if (toLower[i] === "a" || toLower[i] === "e" || toLower[i] === "i" || toLower[i] === "o" || toLower[i] === "u"){
            start = i
            // console.log(toLower[i], i)
            count++
        }
        // console.log(count)

        // if (toLower.includes("a") || toLower.includes("e") || toLower.includes("i") || toLower.includes("o") || toLower.includes("u")){
            // console.log(val)
           
        // }
        if (count >= 5) {
            // console.log(count)
            return val
        }
    }
})
    return fin
}

const filter1DistinctVowel = function(arr){
    let fin = arr.filter((val) => {
        let toLower = val.toLowerCase()
        let start = 0
        let dis = ""
        for (let i = 0; i < val.length; i++){
        if (toLower[i] === "a" || toLower[i] === "e" || toLower[i] === "i" || toLower[i] === "o" || toLower[i] === "u"){
            // start = i
            dis += toLower[i]
            // if (toLower)
            // break

            // return dis
            // break
            // console.log(toLower[i], i)
            // count++
        }
        // if (toLower === )
    }
    for (let j = 0; j < dis.length; j++){
        if (dis[0] !== dis[j]) {
            return false
        }
    }
    return true
    // console.log(dis)
    // return dis
})
return fin
}

const multiFilter = function(arr){

    let fin = arr.filter((val) => {
        let satisfyCapital = false
        let satisfyName = true
        let satisfyTag = false
        let satisfyRegion = false

        let toLowerName = val.name.toLowerCase()
        let toLowertag = val.tag.toLowerCase()
        if(val.capital.length >= 8) {
            satisfyCapital = true
        }
        if(toLowerName[0] === 'a' || 
            toLowerName[0] === 'e' || 
            toLowerName[0] === 'i' || 
            toLowerName[0] === 'o' || 
            toLowerName[0] === 'u') {
                satisfyName = false
                        }
            if (toLowertag.includes("a") || 
            toLowertag.includes("e") || 
            toLowertag.includes("i") || 
            toLowertag.includes("o") || 
            toLowertag.includes("u") ) {
                satisfyTag = true
            }

            if (val.region != "South"){
                satisfyRegion = true
            }

            if (satisfyCapital && satisfyName && satisfyRegion && satisfyTag){
                return val
            }
    })
    return fin
}
