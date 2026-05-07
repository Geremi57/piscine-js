const slice = function(str, index, end){
    let arra = []
    let stri = ""
    if (end == undefined) {
        end = str.length
    }
    if (end < 0) {
        end += str.length
    }
    if (index < 0) {
        index += str.length
    }
    if (str instanceof Array) {
        // console.log("array");
        
        for (let i = index; i < end; i++){
            arra.push(str[i])
        }
    }else if (typeof str == "string"){
        // console.log(" string");
        for (let i = index; i < end; i++){
            stri += str[i]
        }
    }
    return stri || arra
}