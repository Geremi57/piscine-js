const addWeek = function(date){
    let week = ["Sunday","Monday", "Tuesday", "Wednesday", 'Thursday', "Friday", "Saturday"]
    let day =date.getDay() 
    let dateFrom = date.getDate()
    let during = ""
    if (dateFrom > 7 && dateFrom < 14){
        during = "second"
    }else if (dateFrom > 14 && dateFrom < 21){
        during = "third"
    }else if (dateFrom > 21 && dateFrom < 28){
        during = "fourth"
    }
    console.log(dateFrom)

    return during+week[day]
}

const timeTravel = function({ date, hour, minute, second }){
    let year = date.getFullYear()
    let month = date.getMonth()
    let actDate = date.getDate()
    // let param = 


    

    let newDate = new Date(year, month, actDate, hour, minute, second)

    console.log(newDate.toString());
    
5
    return newDate
}

console.log(addWeek(new Date("0001-01-01")))
console.log(addWeek(new Date("0001-01-02")))
console.log(addWeek(new Date("0001-01-07")))
console.log(addWeek(new Date("0001-01-08")))
console.log(addWeek(new Date("0001-01-16")))
console.log(addWeek(new Date("0001-01-22")))
console.log(addWeek(new Date("0001-01-09")))
