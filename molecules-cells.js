const RNA = function (str){
    let fin = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] == "C") {
            fin += "G"
        }else if (str[i] == "G") {
            fin += "C"
        }else if (str[i] == "T") {
            fin += "A"
        }else if (str[i] == "A") {
            fin += "U"
        }
    }
    return fin

}

const DNA = function (str){
    let fin = ""
    for (let i = 0; i < str.length; i++){
        if (str[i] == "G") {
            fin += "C"
        }else if (str[i] == "C") {
            fin += "G"
        }else if (str[i] == "A") {
            fin += "T"
        }else if (str[i] == "U") {
            fin += "A"
        }
    }
    return fin



}