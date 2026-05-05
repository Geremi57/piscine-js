const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

function get(arg){
    let obj = sourceObject[arg]
    return obj
}

function set(key, value){
    sourceObject[key] = value
    return value
}

console.log(get('num'))