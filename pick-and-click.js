let svg, verticalLine, horizontalLine
let hslBox, hueBox, lightBox

// document.addEventListener("mousemove", (event) => {
//     pick(event)
// })
document.addEventListener("mousemove", pick)

document.addEventListener("click", e => {
    pick(e); copyHSL() 
})
// document.addEventListener("click", pick)

 hslBox = document.createElement("div")
hslBox.className = "hsl"
  document.body.appendChild(hslBox)

hueBox = document.createElement("div")

hueBox.className = "hue text"

document.body.appendChild(hueBox)

lightBox = document.createElement("div")

lightBox.className = "luminosity text"
document.body.appendChild(lightBox)
// console.log(hslBox, hueBox, lightBox)

const ns = "http://www.w3.org/2000/svg"
svg = document.createElementNS(ns, "svg")

svg.id = "svg"
svg.setAttribute("width", "100%")

svg.setAttribute("height", "100%")

svg.setAttribute("viewBox", "0 0 100 100")
svg.setAttribute("preserveAspectRatio", "none")

verticalLine = document.createElementNS(ns, "line")
verticalLine.id = "axisX"
verticalLine.setAttribute("y2", "100%")
verticalLine.setAttribute("stroke", "red")
verticalLine.setAttribute("stroke-width", "3")

svg.appendChild(verticalLine)

horizontalLine = document.createElementNS(ns, "line")
horizontalLine.id = "axisY"

horizontalLine.setAttribute("x2", "100%")
horizontalLine.setAttribute("stroke", "red")

horizontalLine.setAttribute("stroke-width", "3")
svg.appendChild(horizontalLine)
document.body.appendChild(svg)
// console.log(svg)

function pick(e) {
if (!e) return
// console.log(e.clientX, e.clientY)
const hue = Math.round((e.clientX / window.innerWidth) * 360)
const light = Math.round((e.clientY / window.innerHeight) * 100)
// console.log("hue", hue, "light", light)
const color = `hsl(${hue}, 100%, ${light}%)`
// const color = `hsl(${hue}, ${sat}%, ${light}%)`
document.body.style.background = color
hslBox.textContent = color

hueBox.textContent = hue
lightBox.textContent = light
console.log(color)

verticalLine.setAttribute("x1", e.clientX)

verticalLine.setAttribute("x2", e.clientX)

horizontalLine.setAttribute("y1", e.clientY)
horizontalLine.setAttribute("y2", e.clientY)
// console.log(verticalLine, horizontalLine)
}

async function copyHSL() {
// console.log("copying", hslBox.textContent)
// copyHSL2()
try { await navigator.clipboard.writeText(hslBox.textContent) }
catch (err) { console.error("copy failed", err) }
console.log("copied")
}

// function copyHSL2() {
//     const text = hslBox.textContent
//     const el = document.createElement("textarea")
//     el.value = text
//     document.body.appendChild(el)
//     el.select()
//     document.execCommand("copy")
//     document.body.removeChild(el)
// }

export { pick }