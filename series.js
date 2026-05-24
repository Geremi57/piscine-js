const series = async function(arr) {
    let out = []
        // console.log(arr)

    for (const fn of arr) {
        const r = await fn()
            console.log(r)
        out.push(r)
    }

        return out
}

const fail = () => Promise.reject("Error");

series([() => Promise.resolve(1), fail, () => Promise.resolve(2)])
  .then(console.log)
  .catch(console.error);