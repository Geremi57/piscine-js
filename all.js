const all = async function(objs = {}) {
    const res = {}
    //for (const key in objs) res[key] = await objs[key]

    // const keys = Object.keys(objs)
    //     //console.log(keys)
    // const vals = await Promise.all(Object.values(objs))
    //     console.log(vals)

    // return Object.fromEntries(keys.map((k, i) => [k, vals[i]]))

    for (const k in objs) {
        //console.log(k, objs[k])
        res[k] = await objs[k]
    }

    return res

}
const obj = {
  first: Promise.resolve(1),
  second: Promise.resolve(2),
  third: 3,
};

all(obj).then(console.log);

// all(obj)