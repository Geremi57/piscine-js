import { places } from "./where-do-we-go.data.js";
// import { places } from "./where-do-we-go.data.js"
// import { places, defaultPlaces } from "./where-do-we-go.data.js"

var scroll = window.scrollY
// var scroll = 0

const location = document.createElement("a")
location.classList.add("location")
document.body.appendChild(location)
// console.log("location el", location)

document.addEventListener("DOMContentLoaded", () => {
    selectPlace()
    // console.log("dom loaded")
})

document.addEventListener("scroll", () => {
    selectPlace()
    // console.log("scrollY", window.scrollY, "last", scroll)
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S")
    // scroll > window.scrollY ? compass.innerHTML = "N" : compass.innerHTML = "S"
    scroll = window.scrollY
})

function explore() {
    places.sort(compareCoordinates)
    // places.sort((a,b) => compareCoordinates(a, b))
    console.log(places)
    // console.log("sorted", places.map(p => p.name))

    places.forEach((place) => {
        createSection(place)
    })

    const compass = document.createElement("div")
    compass.classList.add("direction")
    document.body.appendChild(compass)
    // console.log("compass", compass)
}

function createSection(place) {
    let section = document.createElement("section")
    // let section = document.createElement("div")

    const name = place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    // const name = place.name.toLowerCase().replaceAll(" ", "-")
    // console.log("image name", name)

    section.style.background = `url('./where-do-we-go_images/${name}.jpg')`
    // section.style.backgroundImage = `url('./where-do-we-go_images/${name}.jpg')`
    section.style.backgroundSize = "cover"
    section.style.backgroundPosition = "center"
    section.style.backgroundRepeat = "no-repeat"
    section.style.width = "100%"
    section.style.height = "100vh"

    document.body.appendChild(section)
}

function selectPlace() {
    const sectionHeight = window.innerHeight
    const scroll = window.scrollY + sectionHeight / 2
    // const scroll = window.scrollY
    const sectionIndex = Math.floor(scroll / sectionHeight)
    // console.log("index", sectionIndex)

    const place = places[sectionIndex]
    if (!place) return
    // console.log("place", place)

    location.textContent = `${place.name}\n${place.coordinates}`
    location.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(place.coordinates)}/`
    // location.href = `https://maps.google.com/?q=${urlEncodeCoordinates(place.coordinates)}`

    console.log(
        location.href
            .split("%C2%B0").join("°")
            .split("%22").join('"')
            .split("%20").join(" ")
    )

    location.target = "_blank"
    location.style.color = place.color
}

function urlEncodeCoordinates(coordinates) {
    // console.log("encoding", coordinates)
    return coordinates
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22")
        // .replaceAll("'", "%27")
}

function compareCoordinates(a, b) {
    const aDirection = a.coordinates.split(" ")[0].split('"')[1]
    const bDirection = b.coordinates.split(" ")[0].split('"')[1]
    // console.log("directions", aDirection, bDirection)

    const aLat = a.coordinates.split(" ")[0]
    const bLat = b.coordinates.split(" ")[0]

    let aLatDeg = parseInt(aLat.split("°")[0])
    let aLatMin = parseInt(aLat.split("°")[1].split("'")[0])
    let aLatSec = parseInt(aLat.split("°")[1].split("'")[1].split('"')[0])

    let bLatDeg = parseInt(bLat.split("°")[0])
    let bLatMin = parseInt(bLat.split("°")[1].split("'")[0])
    let bLatSec = parseInt(bLat.split("°")[1].split("'")[1].split('"')[0])

    // console.log("a", aLatDeg, aLatMin, aLatSec)
    // console.log("b", bLatDeg, bLatMin, bLatSec)

    if (aDirection === "S") {
        aLatDeg = -aLatDeg
        aLatMin = -aLatMin
        aLatSec = -aLatSec
    }
    if (bDirection === "S") {
        bLatDeg = -bLatDeg
        bLatMin = -bLatMin
        bLatSec = -bLatSec
    }

    if (aLatDeg > bLatDeg) return -1
    if (aLatDeg < bLatDeg) return 1

    // if (aLatDeg === bLatDeg) {
    if (aLatMin > bLatMin) return -1
    if (aLatMin < bLatMin) return 1

        // if (aLatMin === bLatMin) {
        if (aLatSec > bLatSec) return 1
        if (aLatSec < bLatSec) return -1
        // }
    // }

    return 0
}

// function getCompassDirection() {
//     const dir = scroll > window.scrollY ? "N" : "S"
//     document.querySelector(".direction").innerHTML = dir
// }

export { explore }