const citiesOnly = function(arr){
  let  citiesOnly = arr.map((val) => {
    return val.city
  })
  return citiesOnly
}



const upperCasingStates = function(arr){
    let upperCasedStates = arr.map((val) => {
      return val.replace(/\b\w/g, char => char.toUpperCase());
        // return val.charAt(0).toUpperCase() + val.slice(1)
    })
    return upperCasedStates
}

const fahrenheitToCelsius = function(arr) {
    let toFahrenheit = arr.map((val) => {
        let act = parseFloat(val)
        console.log(act)
        return `${Math.floor((act - 32) * 5 /9)}°C`
    })
    return toFahrenheit
}


const trimTemp = function(arr){
     let trimTemp = arr.map((val) => {
        val.temperature = val.temperature.trim()
        return val
    })
    return trimTemp
}

const tempForecasts = function(arr){
    let tempForecasts = arr.map((val) => {
        console.log(val.temperature.trim())
        val.state = val.state.charAt(0).toUpperCase() + val.state.slice(1)

        val.temperature = parseFloat(val.temperature.trim())
        val.temperature = `${Math.floor((val.temperature - 32) * 5 /9)}°Celcius in ${val.city}, ${val.state}`
        let fin = val.temperature
        return fin
    })
    return tempForecasts
}


console.log(fahrenheitToCelsius(['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F']))