const cutFirst = function(str){
    let fin = ""
    for (let i = 2; i < str.length; i++){
        fin += str[i]
    }
    return fin
}

const cutLast = function(str){
    let fin = ""
    for (let i = 0; i < str.length - 2; i++){
        fin += str[i]
    }
    return fin
}

const cutFirstLast = function(str){
    let fin = "" 
    let aft = ""
    for (let i = 2; i < str.length; i++){
        fin += str[i]
    }
    for (let i = 0; i < fin.length - 2; i++){
        aft += fin[i]
    }
    return aft
}

const keepFirst = function(str){
    let fin = ""
    if (str.length < 2) {
      fin = str
      return fin  
    }
    for (let i = 0; i < 2; i++){
        fin += str[i]
    }
    return fin
}

const keepLast = function(str) {
    let fin = ""
    if (str.length < 2) {
      fin = str
      return fin  
    }
    for (let i = str.length - 2; i < str.length; i++){
        fin += str[i]
    }
    return fin
}

const keepFirstLast = function(str){
      let fin = ""
    if (str.length < 4) {
      fin = str
      return fin  
    }
    for (let i = 0; i < 2; i++){
        fin += str[i]
    }
    for (let i = str.length - 2; i < str.length; i++){
        fin += str[i]
    }
    // return fin
    return fin
}
