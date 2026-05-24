const all = async function(objs = {}) {
    //const res = {}
    //for (const key in objs) res[key] = await objs[key]

    const keys = Object.keys(objs)
        //console.log(keys)
    const vals = await Promise.all(Object.values(objs))
        console.log(vals)

    return Object.fromEntries(keys.map((k, i) => [k, vals[i]]))
}

const obj = {
  a: Promise.resolve("ok"),
  b: Promise.reject("fail"),
};

all(obj).catch(console.error);

// all(obj)