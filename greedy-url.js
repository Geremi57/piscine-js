const getURL = function(dataSet) {
    return dataSet.match(/https?:\/\/\S+/g) || []
}

const greedyQuery = function(dataSet) {
    let data = getURL(dataSet) || []
    // let count = 0
    let out = []


    for (let i = 0; i < data.length; i++) {

        let parts = data[i].split('?')
        // console.log(parts);
        
        if (parts[1]) {
            let que = parts[1]
            let count = que.split('&').length
            // count += parts[1].split('&').length
            if (count >= 3){
                out.push(data[i])
            }
        }
    }

    return out
}


const notSoGreedy = function(dataSet) {
    let data = getURL(dataSet) || []
    // let count = 0
    let out = []


    for (let i = 0; i < data.length; i++) {

        let parts = data[i].split('?')
        // console.log(parts);
        
        if (parts[1]) {
            let que = parts[1]
            let count = que.split('&').length
            // count += parts[1].split('&').length
            if (count >=2 ){
                out.push(data[i])
            }
        }
    }

    return out
}

// const dataSet = `
// qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq 
// qhttp://example.com/hello?you=something&something=you
// https://page.com/test?x=1&y=2&z=3
// https://data.com/path?a=1&b=2&c=3&d=4
// `;

// console.log(getURL(dataSet));

// console.log(greedyQuery(dataSet));
// console.log(notSoGreedy(dataSet));



