import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const styleElement = document.createElement('style')

    let style = ''
    for(const color of colors) {
        style += `.${color} { background: ${color}; }`
    }
    styleElement.innerHTML = style

    document.head.append(styleElement)
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
        if (div.textContent === shade) {
            div.className = shade
        }
        // colorDiv.classList.add(shade)
    }

}