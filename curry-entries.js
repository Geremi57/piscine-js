// const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 })
function defaultCurry(obj1) {
    // console.log("obj1", obj1)
    return function(obj2) {
        // console.log("obj2", obj2)
        // return Object.assign({}, obj1, obj2)
        const result = {}
        for (const key in obj1) {
            result[key] = obj1[key]
        }
        for (const key in obj2) {
            result[key] = obj2[key]
        }
        // console.log("merged", result)
        return result
    }
}

// const mapCurry = (fn) => (obj) =>
//   Object.fromEntries(Object.entries(obj).map(([k, v]) => fn([k, v])))
function mapCurry(fn) {
    // console.log("mapCurry fn", fn)
    return function(obj) {
        // console.log("mapCurry obj", obj)
        const entries = Object.entries(obj)
        // console.log("entries", entries)
        const mapped = []
        for (let i = 0; i < entries.length; i++) {
            const k = entries[i][0]
            const v = entries[i][1]
            // console.log("mapping", k, v)
            mapped.push(fn([k, v]))
        }
        // return mapped
        return Object.fromEntries(mapped)
    }
}

// const reduceCurry = (fn) => (obj, start) =>
//   Object.entries(obj).reduce((acc, [k, v]) => fn(acc, [k, v]), start)
function reduceCurry(fn) {
    return function(obj, start) {
        // console.log("reduceCurry start", start)
        const entries = Object.entries(obj)
        let acc = start
        for (let i = 0; i < entries.length; i++) {
            const k = entries[i][0]
            const v = entries[i][1]
            // console.log("reducing", k, v, "acc so far", acc)
            acc = fn(acc, [k, v])
        }
        // console.log("reduce result", acc)
        return acc
    }
}

// const filterCurry = (fn) => (obj) =>
//   Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn([k, v])))
function filterCurry(fn) {
    return function(obj) {
        // console.log("filterCurry obj", obj)
        const entries = Object.entries(obj)
        const kept = []
        for (let i = 0; i < entries.length; i++) {
            const k = entries[i][0]
            const v = entries[i][1]
            // console.log("testing", k, v)
            if (fn([k, v])) {
                // console.log("kept", k)
                kept.push([k, v])
            }
        }
        return Object.fromEntries(kept)
    }
}

function reduceScore(personnel, start) {
    // console.log("reduceScore", personnel, start)
    // console.log("force users only?", Object.values(personnel).filter(v => v.isForceUser))
    return reduceCurry(function(acc, [_, v]) {
        if (!v.isForceUser) {
            // console.log("skipping non force user")
            return acc
        }
        // console.log("adding scores", v.pilotingScore, v.shootingScore)
        // return acc + v.pilotingScore
        return acc + v.pilotingScore + v.shootingScore
    })(personnel, start)
}

function filterForce(personnel) {
    // console.log("filterForce", personnel)
    // return filterCurry(([_, v]) => v.isForceUser)(personnel)
    return filterCurry(function([_, v]) {
        // console.log("isForceUser", v.isForceUser, "shootingScore", v.shootingScore)
        // return v.isForceUser
        return v.isForceUser && v.shootingScore >= 80
    })(personnel)
}

function mapAverage(personnel) {
    // console.log("mapAverage input", personnel)
    return mapCurry(function([k, v]) {
        // const avg = (v.pilotingScore + v.shootingScore) / 2
        const total = v.pilotingScore + v.shootingScore
        const avg = total / 2
        // console.log(k, "total", total, "avg", avg)
        // return [k, { ...v, averageScore: avg }]
        const updated = {}
        for (const prop in v) {
            updated[prop] = v[prop]
        }
        updated.averageScore = avg
        // console.log("updated", k, updated)
        return [k, updated]
    })(personnel)
}

// function getForceUserNames(personnel) {
//     return Object.entries(personnel)
//         .filter(([_, v]) => v.isForceUser)
//         .map(([k]) => k)
// }

// function totalScore(personnel) {
//     return reduceScore(personnel, 0)
// }

console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
  str: 'string',
  nbr: 1,
  arr: [1, 2],
}));