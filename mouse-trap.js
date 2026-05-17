let isOutsideBox = true
let containerBox = null

export const initBox = () => {
    containerBox = document.createElement("div")
    containerBox.className = "box"
    document.body.appendChild(containerBox)
}

export const enableCircleCreation = () => {
    document.addEventListener("click", (event) => {
        spawnCircle(event)
        isOutsideBox = true
    })
}

export const enableCircleTracking = () => {
    document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".removeCircle").forEach(el => el.remove())
        const preview = spawnCircle(event, "removeCircle")

     const bounds = containerBox.getBoundingClientRect()

    const padding = 25

   const inside =
       event.clientX > bounds.left + padding && 
         event.clientX < bounds.right - padding &&
        event.clientY > bounds.top + padding &&
        event.clientY < bounds.bottom - padding

  if (inside) {
        isOutsideBox = false
  }

   if (!isOutsideBox) {

    let adjustedX = event.clientX - padding
    
     let adjustedY = event.clientY - padding
           if (event.clientX < bounds.left + padding) {
            adjustedX = bounds.left
        }

     if (event.clientX > bounds.right - padding) {
         adjustedX = bounds.right - padding * 2
       }
           if (event.clientY < bounds.top + padding) {
                 adjustedY = bounds.top
       }

        if (event.clientY > bounds.bottom - padding) {
             adjustedY = bounds.bottom - padding * 2
        }

     preview.style.left = adjustedX + "px"
     preview.style.top = adjustedY + "px"

         const activeCircle = document.querySelector(".circle")
        if (activeCircle) {
               activeCircle.style.background = "var(--purple)"
           }
      }})
}

function spawnCircle(event, extraClass = "") {
        const circle = document.createElement("div")
          circle.className = "circle"

if (extraClass) {
       circle.classList.add(extraClass)
   }

    circle.style.left = (event.clientX - 25) + "px"
    circle.style.top = (event.clientY - 25) + "px"
    circle.style.background = isOutsideBox ? "white" : "var(--purple)"

    document.body.appendChild(circle)
    return circle 
}