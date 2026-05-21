function replica(target, ...sources) {
    // console.log("replica called", target, sources)
    // console.log("sources length", sources.length)

    let s = 0
    while (s < sources.length) {

    const source = sources[s]
    // console.log("source", source)
      // if (!source) { s++; continue }

    const keys = Object.keys(source)
      // const keys = Object.getOwnPropertyNames(source)
      // console.log("keys", keys)
       let k = 0

       while (k < keys.length) {
          const key = keys[k]
            const value = source[key]
            // console.log("key", key, "value", value, typeof value)

           if (value instanceof RegExp) {
                // console.log("regex", value)
                // target[key] = new RegExp(value.source, value.flags)
                target[key] = value
                k++
                continue
            }

            if (Array.isArray(value)) {
                // console.log("array", value)
                // target[key] = [...value]
                // target[key] = replica([], ...value)
                target[key] = replica([], value)
                k++
                continue
            }

            if (value && typeof value === 'object') {
                // console.log("object", value)
                // console.log("target[key]", target[key])

                const targetVal = target[key]
                const targetIsValid = targetVal &&
                    typeof targetVal === 'object' &&
                    !Array.isArray(targetVal)

                // if (!targetIsValid) target[key] = Object.create(null)
             if (!targetIsValid) {
                    target[key] = {}
               }

                // console.log("recursing into", key)
                target[key] = replica(target[key], value)
                k++
                continue
          }

            // console.log("primitive", key, value)
            // if (value === undefined) { k++; continue }
            // if (value === null) { k++; continue }
          target[key] = value
          k++
      }
       s++

    }

    // console.log("replica result", target)
    return target
}

// function replica(target, ...sources) {
//     return Object.assign(target, ...sources)
// }
