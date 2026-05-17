import { styles } from './pimp-my-style.data.js'
let currentStyle = 0

export const pimp = () => {

    const button =document.querySelector('button')
    
    if (button.classList.contains('unpimp')) {
        
        currentStyle--
        button.classList.remove(styles[currentStyle])

        if (currentStyle === 0) {
            button.classList.remove('unpimp')
        }
    }

    else {
        button.classList.add(styles[currentStyle])
        currentStyle++
        if (currentStyle === styles.length) {
            button.classList.add('unpimp')
        }
    }
}
