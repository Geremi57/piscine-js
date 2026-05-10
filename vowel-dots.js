const vowelDots = function(str){

    if (str == ""){
        return ""
    }
    let vowels = str.replace(/[aeiou]/gi, "$&.") || ""

    // for (let i=0; i < str.length;i++){
    //     orrArr.map((el, j) => {
    //         if (str[i] == vowels[j]){
    //             return str[i] + "."
    //         }   else{
    //            return str[i]
    //         }
    //     })
    // }
    return vowels
}

    let vowels = /[aeiou]/
