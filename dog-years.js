const object = {
    earth: 1.0,
    mercury:	0.2408467,
    venus:	0.61519726,
    mars:	1.8808158,
    jupiter:	11.862615,
    saturn:	29.447498,
    uranus:	84.016846,
    neptune:	164.79132,
}


const daysInYear = 365.25
const secondsInYear = 31557600
const dogYearToHuman = 7.0

function dogYears(arg1, arg2){

    let years = arg2 / secondsInYear
    let normYears = object[arg1]

    let normDays = daysInYear / normYears
    let numNormYears = normDays/ daysInYear
    
    let fin = years * numNormYears

    // let normSeconds = object[arg1]  
    // console.log(normYears)
    fin *= dogYearToHuman
    return fin.toFixed(2)
}