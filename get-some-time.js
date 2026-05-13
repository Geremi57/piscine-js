const firstDayWeek = function(week, year){
    const mill = 1000*60*60*24
    const start = new Date(`${year}-01-01`)
    const off = start.getDay() === 0 ? 6 : start.getDay()-1

    const first = new Date(start.getTime()-(off*mill))
 
    const fin = new Date(first.getTime() + ((week - 1) * 7 * mill))
    
    return fin.toISOString().replace(/T.*/g, '').split('-').reverse().join('-')
}


