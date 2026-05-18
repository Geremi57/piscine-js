import { gossips } from "./gossip-grid.data.js";
// let gossips = [...defaultGossips]

function grid() {
ranges()

const form = document.createElement("form")
  form.className = "gossip"
  const input = document.createElement("textarea")

   const btn = document.createElement("button")

   btn.textContent = "Share gossip!"
       btn.type = "submit"
// btn.type = "button"

btn.addEventListener("click", e => {
    e.preventDefault()

        const text = input.value
// console.log("text", text)
// console.log("gossips before", gossips)
if (text && text.trim().length > 0) {
    gossips.unshift(text)

document.querySelectorAll(".gossip").forEach((el, i) => {
    if (i !== 0) el.remove()
})

input.value = ""
// input.value = null

renderGossips()
// console.log("gossips after", gossips)
}
// else { console.log("empty input") }

})
form.appendChild(input)

form.appendChild(btn)
document.body.appendChild(form)

renderGossips()
}

    function renderGossips() {
// console.log("rendering", gossips.length, "gossips")

for (const item of gossips) {

    const card = document.createElement("div")
    card.className = "gossip"
// card.textContent = item
card.textContent = item
document.body.appendChild(card)
}}

function ranges() {
        const wrapper = document.createElement("div")
            wrapper.className = "ranges"

    const w = document.createElement("input")

    w.type = "range"
    w.id = "width"
    w.min = 200
    w.max = 800
    w.value = 400
// console.log("width slider", w)

w.addEventListener("input", e => {
// console.log("width", e.target.value)

document.querySelectorAll(".gossip").forEach(c => {

    c.style.width = e.target.value + "px"
})
})

const f = document.createElement("input")
    f.type = "range"
    f.id = "fontSize"
    f.min = 20
    f.max = 40
    f.value = 30
    f.addEventListener("input", e => {
// console.log("fontsize", e.target.value)

const cards = document.querySelectorAll(".gossip")
for (const c of cards) {
        c.style.fontSize = e.target.value + "px"
}})

const bg = document.createElement("input")
    bg.type = "range"
    bg.id = "background"
    bg.min = 20
    bg.max = 75
    bg.value = 50
    
    bg.addEventListener("input", e => {
// console.log("bg", e.target.value)
// const hue = 280
const cards = document.querySelectorAll(".gossip")
    cards.forEach(c => {
c.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`
// c.style.backgroundColor = `hsl(${hue}, 50%, ${e.target.value}%)`
})})

// wrapper.appendChild(w)
// wrapper.appendChild(f)
// wrapper.appendChild(bg)
// document.body.appendChild(wrapper)

[w, f, bg].forEach(el => wrapper.appendChild(el))
    document.body.appendChild(wrapper)
        console.log("ranges created", wrapper)
    }

    // grid()

    export { grid }

// function clearGossips() {
//     document.querySelectorAll(".gossip").forEach((el, i) => {
//         if (i !== 0) el.remove()
//     })
// }