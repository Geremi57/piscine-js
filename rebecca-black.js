const isFriday = function(data){
    if(data.getDay() == 5){
        return true
    }
    return false
}

const isWeekend = function(data){
    if (data.getDay() == 0 || data.getDay() == 6) {
        return true
    }
    return false
}

const isLeapYear = function(data){
    if (data.getFullYear()%4 == 0){
        return true
    }
    return false
}

const isLastDayOfMonth = function(data){
    let dayNxt = new Date(data)
    dayNxt.setDate(data.getDate()+1)
    if (dayNxt.getMonth() !== data.getMonth()){
        return true
    }
    return false;
}