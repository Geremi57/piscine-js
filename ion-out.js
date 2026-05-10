const ionOut = function(str){
    let withIon = str.replace(/ion\b/gi, "")
    let arr = withIon.match(/\w+/g)
    // for(let i = 0; i < withIon.length; i++){
    //     arr.push(withIon[i])
    // }


    // arr.push(withIon[withIon.length-1].replace(/\w[ion]/gi, ""))
    

    return arr || []
}

console.log(ionOut("attention caution nation motion"));
// Output: ['attent', 'caut', 'nat', 'mot']

console.log(ionOut("creation fiction emotion"));
// Output: ['creat', 'fict', 'emot']