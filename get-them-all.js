export const getArchitects = () => { 
    const As = Array.from(document.querySelectorAll('a'))
    const nonAs = Array.from(document.querySelectorAll(':not(a)'))
    // As.push(document.querySelectorAll('a'))
    // nonAs.push(document.querySelectorAll(':not(a)'))

    return [As, nonAs]
 }

export const getClassical = () => {
    const classic = Array.from(document.querySelectorAll('.classical'))
    const nonClassic = Array.from(document.querySelectorAll('a:not(.classical)'))

    // classic.push(document.querySelectorAll('classical'))
    // nonClassic.push(document.querySelectorAll('a:not(.classical)'))

    return [classic, nonClassic]
 }

export const getActive = () => {
    const actClassic = Array.from(document.querySelectorAll('a.classical.active'))
    const nonActClassic = Array.from(document.querySelectorAll('a.classical:not(.active)'))

    // actClassic.push(document.querySelectorAll('a.classical.active'))
    // nonActClassic.push(document.querySelectorAll('a.classical:not(.active)'))

    return [actClassic, nonActClassic]
}

export const getBonannoPisano = () => {
    const bonnano = document.getElementById('BonannoPisano')
    const nonBonnano =  Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'))

    // bonnano.push(document.querySelectorAll(".bonnano-pissaso"))
    // nonBonnano.push(document.querySelectorAll("a.classical.active:not(#BonnanoPisano)"))

    return [bonnano, nonBonnano]
}