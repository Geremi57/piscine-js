let isOutside = true
let boxElement

export const setBox = () => {

    boxElement = document.createElement("div")
 boxElement.className = "box"
    document.body.appendChild(boxElement)
}

export const createCircle = () => {

    document.addEventListener('click', handleClick)
}

export const moveCircle = () => {
  document.addEventListener('mousemove', handleMouseMove)

}

function handleClick(event) {

    createCircleElement(event)
  isOutside = true
}

function handleMouseMove(event) {

    document.querySelectorAll('.removeCircle').forEach(el => el.remove())

    const previewCircle = createCircleElement(event, 'removeCircle')

    const boxRect = boxElement.getBoundingClientRect()
const insideBox =
        event.clientX >= boxRect.left + 25 &&
       event.clientX <= boxRect.right - 25 &&
        event.clientY >= boxRect.top + 25 &&
        event.clientY <= boxRect.bottom - 25

        if (insideBox) isOutside = false

        if (!isOutside) clampCircleInsideBox(previewCircle, boxRect, event)
}

function createCircleElement(event, extraClass = '') {
    const el = document.createElement('div')
    el.className = 'circle'
   if (extraClass) el.classList.add(extraClass)

        el.style.background = !isOutside ? 'var(--purple)' : 'white'
        el.style.left = (event.clientX - 25) + "px"

        el.style.top = (event.clientY - 25) + "px"
    document.body.appendChild(el)
    return el
}

function clampCircleInsideBox(circle, boxRect, event) {

    const r = 25
  if (event.clientX - r < boxRect.left) circle.style.left = boxRect.left + "px"

  if (event.clientX + r > boxRect.right) circle.style.left = (boxRect.right - 50) + "px"

    if (event.clientY - r < boxRect.top) circle.style.top = boxRect.top + "px"
  if (event.clientY + r > boxRect.bottom) circle.style.top = (boxRect.bottom - 50) + "px"

  const main = document.querySelector(".circle")
 if (main) main.style.background = 'var(--purple)'

}