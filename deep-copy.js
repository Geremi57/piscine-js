function deepCopy(value) {
    // console.log("deepCopy", value, typeof value)
    if (value === null) {
        // console.log("null")
        return null
    }

    if (value === undefined) {
        // console.log("undefined")
        return undefined
    }

    if (typeof value === 'number') {
        // console.log("number", value)
        return value
    }

    if (typeof value === 'string') {
        // console.log("string", value)
        return value
    }

    if (typeof value === 'boolean') {
        // console.log("boolean", value)
        return value
    }

    if (value instanceof RegExp) {
        // console.log("regex", value.source, value.flags)
        // return value
        return new RegExp(value.source, value.flags)
    }

    if (Array.isArray(value)) {
        // console.log("array length", value.length)
        const copy = []
        // const copy = new Array(value.length)
        let i = 0
        while (i < value.length) {
            // console.log("copying index", i, value[i])
            copy[i] = deepCopy(value[i])
            i++
        }
        // console.log("array copy done", copy)
        return copy
    }

    if (typeof value === 'object') {
        // console.log("object keys", Object.keys(value))
        const keys = Object.keys(value)
        // const keys = Object.getOwnPropertyNames(value)
        const copy = {}
        let i = 0
        while (i < keys.length) {
            const key = keys[i]
            const val = value[key]
            // console.log("copying key", key, val)
            // if (val === undefined) { i++; continue }
            copy[key] = deepCopy(val)
            i++
        }
        // console.log("object copy done", copy)
        return copy
    }

    // console.log("fallthrough", value)
    return value
}

// function deepCopy(value) {
//     return JSON.parse(JSON.stringify(value))
// }

// function deepCopy(value) {
//     try {
//         return structuredClone(value)
//     } catch(e) {
//         console.log("structuredClone failed", e)
//         return value
//     }
// }

// function shallowCopy(value) {
//     if (Array.isArray(value)) return [...value]
//     if (typeof value === 'object' && value !== null) return { ...value }
//     return value
// }