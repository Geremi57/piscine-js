const getJSON = async function(p = '', params = {}) {
    const url = `${p}?${Object.entries(params)
        .map(([k, v]) => `${k.replace(' ', '+')}=${v.toString().replace(' ', '+')}`)
            .join('&')}`

        //console.log(url)

    const { ok, json, statusText } = await fetch(url)
        //const res = await fetch(url)

    if (ok) {
      const data = await json()
        //console.log(data)
        //if (data.error) throw new Error(data.error)
      if (data.error) throw new Error(data.error)
        return data.data
    } else {
        throw new Error(statusText)
    }
}