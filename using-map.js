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
        let fin = "" 
        for (let i=0; i < val.temperature.length; i++) {
            if (val.temperature[i] === " "){
                console.log("gotchaa")
                // fin += ""
                continue
            }
            fin += val.temperature[i]
            
        }
        val.temperature = fin
        return val
    })
    return trimTemp
}

const tempForecasts = function(arr){
    let tempForecasts = arr.map((val) => {
        console.log(val.temperature.trim())
        val.state = val.state.charAt(0).toUpperCase() + val.state.slice(1)

        val.temperature = parseFloat(val.temperature.trim())
        val.temperature = `${Math.floor((val.temperature - 32) * 5 /9)}°Celsius in ${val.city}, ${val.state}`
        let fin = val.temperature
        return fin
    })
    return tempForecasts
}


console.log('38°Celsius in Los Angeles, California')
console.log('38°Celcius in Los Angeles, California')
