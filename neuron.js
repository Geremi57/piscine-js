function neuron(data) {
// console.log("neuron input", data)
    // console.log("data length", data.length)

if (data.length === 0) {
// console.log("empty data")
        return {}
}

const result = {}
// const result = Object.create(null)

let i = 0
    while (i < data.length) {
const item = data[i]
        // console.log("item", item)

// const [left, responsePart] = item.split(' - Response: ')
const dashIndex = item.indexOf(' - Response: ')
        // console.log("dashIndex", dashIndex)
        const left = item.slice(0, dashIndex)
const responsePart = item.slice(dashIndex + ' - Response: '.length)
// console.log("left", left, "responsePart", responsePart)

        const response = responsePart.trim()
// console.log("response", response)

// const [typePart, contentPart] = left.split(': ')
        const colonIndex = left.indexOf(': ')
// console.log("colonIndex", colonIndex)
const typePart = left.slice(0, colonIndex)
        const contentPart = left.slice(colonIndex + 2)
        // console.log("typePart", typePart, "contentPart", contentPart)

const type = typePart.toLowerCase()
        // console.log("type", type)
        const content = contentPart.trim()
// console.log("content", content)

// const key = content.toLowerCase().replace(/[!?]/g, '').replace(/\s+/g, '_')
const keyRaw = content.toLowerCase()
// console.log("keyRaw", keyRaw)
        const keyNoSymbols = keyRaw.replace(/[!?]/g, '')
// const keyNoSymbols = keyRaw.replace(/[!?,\.]/g, '')
const key = keyNoSymbols.replace(/\s+/g, '_')
        // console.log("key", key)

        if (!result[type]) {
// console.log("new type", type)
            result[type] = {}
        // result[type] = Object.create(null)
}

if (!result[type][key]) {
// console.log("new key", key, "under", type)
// const singular = type.slice(0, -1)
            const singular = type.endsWith('s') ? type.slice(0, -1) : type
    // console.log("singular", singular)
result[type][key] = {
// [type.slice(0, -1)]: content,
                [singular]: content,
        responses: [],
            }
        }

result[type][key].responses.push(response)
        // console.log("pushed response", response, "to", key)
        i++
    }

// console.log("result", result)
    return result
}


// function getType(item) {
//     return item.split(': ')[0].toLowerCase()
// }

// function getKey(content) {
//     return content.toLowerCase().replace(/[!?]/g, '').replace(/\s+/g, '_')
// }