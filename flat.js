const flat = function(arr, depth = 100000) {

    let result = []

    for (let i = 0; i < arr.length; i++) {

        let item = arr[i]

        if (Array.isArray(item) && depth > 0) {

            let flattened = flat(item, depth - 1)

            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j])
            }

        } else {
            result.push(item)
        }
    }

    return result
}
