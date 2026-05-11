const findIP = function(str){

    let possible = str.match(/\b\d+\.\d+\.\d+\.\d+(:\d+)?\b/g) || []

    console.log(possible);
    let result = []

    for (let i = 0; i < possible.length; i++) {

        let parts = possible[i].split('.')

        console.log(parts);
        let valid = true

        for (let j = 0; j < parts.length; j++) {

            let num = Number(parts[j])
            if (
                parts[j].length > 1 &&
                parts[j][0] === '0'
            ) {
                valid = false
            }

            if (num < 0 || num > 255) {
                valid = false
            }
        }
        
                    let ipPort = possible[i].split(":")
        
                // let ip = ipPort[0]
                

        let port = ipPort[1]
        if (port !== undefined) {
            
            let p = Number(port)
            
            if (p < 0 || p > 65535) {
                valid = false
            }
        }
        
        if (valid) {
            result.push(possible[i])
        }
    }

    return result
}
