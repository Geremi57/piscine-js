const groupPrice = function(str){

    let matches = [...str.matchAll(/(?:[A-Z]{3}|\$)(\d+)\.(\d+)/g)]

    return matches.map(match => [
        match[0],
        match[1],
        match[2]
    ])
}

console.log(groupPrice('The price of the cereals is $4.00.'));