function words(str){
    return str.split(" ")
}

function sentence(arr){
    arr = arr.join(" ")
    return arr
}


const yell = function(str){
    return str.toUpperCase()
}


const whisper = function(str){
    let starter = str.toLowerCase()
    let padded =starter.padStart(starter.length+1, "*")
    padded = padded.padEnd(padded.length+1, "*")
    // starter.padEnd(30, '*')
    return padded
}

const capitalize = function(str){
    let cap = str.toLowerCase()
    cap = str.charAt(0).toUpperCase()+cap.slice(1)
    return cap
}

