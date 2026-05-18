import { gossips } from "./gossip-grid.data.js";
// import { gossips } from "./gossip-grid.data.js"
// import gossips from "./gossip-grid.data.js"

function grid() {
// console.log("grid init")
// console.log("gossips", gossips)
ranges()
let form = document.createElement("form")

form.classList.add("gossip")
    let textarea = document.createElement("textarea")

    let button = document.createElement("button")
// button.innerHTML = "Gossip!"
        button.innerHTML = "Share gossip!"

        button.type = "submit"
// button.type = "button"

button.addEventListener("click", (e) => {
    e.preventDefault()

        let gossip = textarea.value
// let gossip = textarea.value.trim()
// console.log("gossip", gossip)
if (gossip.length > 0) {
    
    gossips.unshift(gossip)
// gossips.push(gossip)

document.querySelectorAll(".gossip").forEach((card, i) => {
    if (i > 0) card.remove()
    
    })

    textarea.value = ""
        renderGossips()
// console.log("gossips now", gossips)
}
// else { alert("write something!!") }
})

form.appendChild(textarea)

form.appendChild(button)

document.body.appendChild(form)
    renderGossips()
}

function renderGossips() {
// console.log("rendering", gossips)
    gossips.forEach((gossip) => {
        let div = document.createElement("div")

        div.classList.add("gossip")
// div.textContent = gossip
    
div.innerHTML = gossip
    
document.body.appendChild(div)
// console.log("appended", div)

})
}

function ranges() {
    
    let rangesDiv = document.createElement("div")
        
    rangesDiv.classList.add("ranges")
// console.log("ranges div", rangesDiv)

        let widthRange = document.createElement("input")


        widthRange.type = "range"

        widthRange.id = "width"
        widthRange.min = "200"
widthRange.max = "800"

    widthRange.value = "400"
    widthRange.addEventListener("input", (e) => {
// console.log("width", e.target.value)
let cards = document.querySelectorAll(".gossip")

    cards.forEach((card) => {
card.style.width = e.target.value + "px"
    })
})

let fontSizeRange = document.createElement("input")
    
    fontSizeRange.type = "range"
fontSizeRange.id = "fontSize"
    fontSizeRange.min = "20"

    fontSizeRange.max = "40"

        fontSizeRange.value = "30"
fontSizeRange.addEventListener("input", (e) => {
// console.log("fontsize", e.target.value)
    
let cards = document.querySelectorAll(".gossip")
    cards.forEach((card) => {
    
        card.style.fontSize = e.target.value + "px"
    })
})

let backgroundColorRange = document.createElement("input")
    backgroundColorRange.type = "range"


    backgroundColorRange.id = "background"

    backgroundColorRange.min = "20"
    backgroundColorRange.max = "75"

    backgroundColorRange.value = "50"
    backgroundColorRange.addEventListener("input", (e) => {
// console.log("bg val", e.target.value)
// let hue = 280
let cards = document.querySelectorAll(".gossip")
cards.forEach((card) => {
    card.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`
// card.style.backgroundColor = `hsl(${hue}, 50%, ${e.target.value}%)`
})
})

rangesDiv.appendChild(widthRange)
    rangesDiv.appendChild(fontSizeRange)

    rangesDiv.appendChild(backgroundColorRange)
document.body.appendChild(rangesDiv)
    console.log("ranges done")
}

// function clearCards() {
//     document.querySelectorAll(".gossip").forEach((card, i) => {
//         if (i > 0) card.remove()
//     })
// }

// function addGossip(text) {
//     gossips.unshift(text)
//     clearCards()
//     renderGossips()
// }

export { grid }