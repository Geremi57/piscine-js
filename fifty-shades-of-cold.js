import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    let cold = document.createElement('style')

    for (let color of colors) {
        cold.innerHTML += `.${color} {background: ${color};}`
    }
    document.head.append(cold)
}

export const generateColdShades = () => {
    const coldPattern = /(aqua|blue|turquoise|green|cyan|navy|purple)/
    
    for(const color of colors) {
        if (coldPattern.test(color)) {
            const shade = document.createElement('div')
            shade.classList.add(color)
            
            shade.textContent = color
            document.body.append(shade)
        }
    }
}

export const chose = (shade) => {
    const allShades = document.querySelectorAll('div')

    for (const div of allShades) {
        // if (div.textContent === shade) {
        //     div.className = shade
        // }
        div.className = ''
        div.classList.add(shade)
    }

}