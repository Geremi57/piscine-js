const letterSpaceNumber = function(str){

    if (str == ""){
        return []
    }

    return str.match(/[a-z]\s\d(?![a-z\d])/gi) || []
}