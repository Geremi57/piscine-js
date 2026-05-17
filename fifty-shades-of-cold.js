import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const styleElement =document.createElement('style')

    for(const color of colors) {
        styleElement.innerHTML += `.${color} {background: ${color};}`
    }

    document.head.append(styleElement)
}

export const generateColdShades = () => {
    const coldPattern = /(aqua|blue|turquoise|green|cyan|navy|purple)/
    
    for(const color of colors) {
        if (coldPattern.test(color)) {
            const shade =document.createElement('div')
            
            shade.classList.add(color)
            
            shade.textContent = color

            document.body.append(shade)
        }
    }
}

export const choseShade = (shade) => {
    const allShades = document.querySelectorAll('div')
    
    for (const colorDiv of allShades) {
        colorDiv.classList.add(shade)
    }

}