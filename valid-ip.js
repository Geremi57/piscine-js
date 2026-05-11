const findIP = function(str){

    let possible = str.match(/(?<![\d.])\d+\.\d+\.\d+\.\d+(?::\d+)?(?![\d.])/g) || []

    // console.log(possible);
    let result = []

    for (let i = 0; i < possible.length; i++) {

let currentIP = possible[i]

// if (possible[i].includes(':')) {
// }
// console.log(parts);
let valid = true


        let port;
        if (possible[i].includes(':')) {
            
            currentIP = possible[i].split(':')[0]
            let split = possible[i].split(':')

            ip = split[0]
            port = split[1]
        }
let parts = currentIP.split('.')

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

        
                // let ip = ipPort[0]
                

        // let port = ipPort[1]
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


