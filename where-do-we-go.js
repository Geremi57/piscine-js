import { places } from "./where-do-we-go.data.js";
// import { places } from "./where-do-we-go.data.js"
// console.log("places", places)

let lastScrollY = window.scrollY
// let lastScrollY = 0

const currentPlace = document.createElement("a")
    currentPlace.classList.add("location")
    document.body.appendChild(currentPlace)
// console.log("currentPlace", currentPlace)

function start() {
// console.log("start")
  
places.sort(compareCoordinates)
// places.sort((a, b) => compareCoordinates(a, b))
// console.log("sorted places", places)
 buildPages()
  const compass = document.createElement("div")
  compass.classList.add("direction")
    
  document.body.appendChild(compass)
        updateLocation()


        document.addEventListener("scroll", () => {
// console.log("scrollY", window.scrollY)
      updateLocation()

      const goingUp = window.scrollY < lastScrollY
// const goingUp = window.scrollY <= lastScrollY

document.querySelector(".direction").textContent = goingUp ? "N" : "S"
// console.log("direction", goingUp ? "N" : "S")
    lastScrollY = window.scrollY
})}

function buildPages() {
// console.log("building pages", places.length)
    

    for (const place of places) {

        const page = document.createElement("section")

        const name = place.name.toLowerCase().split(",")[0].replaceAll(" ", "-")
// console.log("name", name)
// const name = place.name.toLowerCase().replaceAll(" ", "-")

        page.style.backgroundImage = `url('./where-do-we-go_images/${name}.jpg')`
        
        page.style.backgroundSize = "cover"
        page.style.backgroundPosition = "center"
    
        page.style.backgroundRepeat = "no-repeat"
            page.style.height = "100vh"
        page.style.width = "100%"
    document.body.appendChild(page)

    }}

function updateLocation() {
    const screenMid = window.innerHeight / 2
// const screenMid = window.innerHeight / 2 + window.scrollY
    const index = Math.floor((window.scrollY + screenMid) / window.innerHeight)
// console.log("index", index)
    const place = places[index]

  if (!place) return
// console.log("place", place)

    currentPlace.textContent = `${place.name}\n${place.coordinates}`
    currentPlace.href = "https://www.google.com/maps/place/" + encodeCoords(place.coordinates)
// currentPlace.href = "https://maps.google.com/?q=" + encodeCoords(place.coordinates)
    
currentPlace.target = "_blank"
    currentPlace.style.color = place.color
}

function encodeCoords(coords) {
// console.log("encoding", coords)
return coords
    .replaceAll(" ", "%20")
    .replaceAll("°", "%C2%B0")
    
    .replaceAll('"', "%22")
// .replaceAll("'", "%27")
}

function compareCoordinates(a, b) {


    const getLat = (p) => {

    const lat = p.coordinates.split(" ")[0]
// console.log("lat raw", lat)
    const dir = lat.includes("S") ? -1 : 1

    const deg = parseInt(lat.split("°")[0])
    const min = parseInt(lat.split("°")[1])
    const sec = parseInt(lat.split("°")[1].split("'")[1])
// console.log(deg, min, sec)
// const val = dir * (deg + min / 60 + sec / 3600)
    
    return dir * (deg * 10000 + min * 100 + sec)
}
    

    return getLat(b) - getLat(a)
}

// function getDirection() {
//     const goingUp = window.scrollY < lastScrollY
//     document.querySelector(".direction").textContent = goingUp ? "N" : "S"
// }

export { start as explore }