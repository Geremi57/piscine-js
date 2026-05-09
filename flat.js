const flat = function(arr, depth = 1) {

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

console.log(flat([1, [2, [3, [4]]]], Infinity));


console.log((flat([1]), [1]))
console.log((flat([1, [2]]), [1, 2]))
console.log((flat([1, [2, [3]]]), [1, 2, [3]]))
console.log((flat([1, [2, [3], [4, [5]]]], 2), [1, 2, 3, 4, [5]]))
console.log((flat([1, [2, [3], [4, [5]]]], 3), [1, 2, 3, 4, 5]))
console.log((flat([1, [2, [3], [4, [5]]]], Infinity), [1, 2, 3, 4, 5]))
