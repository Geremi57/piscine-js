const queryServers = async (name, q) =>
  await Promise.race([getJSON(`/${name}?q=${q}`), getJSON(`/${name}_backup?q=${q}`)])

const gougleSearch = async (q) => {
  const types = ['web', 'image', 'video']
    //const types = ['web', 'image', 'video', 'news']

  const t = new Promise((_, reject) => setTimeout(reject, 80, new Error('timeout')))

  const fastest = types.map((name) => Promise.race([queryServers(name, q), t]))
    //console.log(fastest)

  const results = await Promise.all(fastest)
    //console.log(results)

  return Object.fromEntries(types.map((name, i) => [name, results[i]]))
}

gougleSearch("hello+world").then(console.log).catch(console.error);
