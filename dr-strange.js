const addWeek = function(date) {
    // const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // // Manual day-of-week calculation that works for all dates
    // const d = date.getDate();
    // let m = date.getMonth() + 1;
    // let y = date.getFullYear();
    
    // const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    // if (m < 3) y--;
    // const dayIndex = ((y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + t[m-1] + d) % 7 + 7) % 7;
    
    // let during = "";
    // if (d >= 1 && d <= 7) {
    //     during = "";
    // } else if (d > 7 && d <= 14) {
    //     during = "second";
    // } else if (d >= 15 && d <= 20) {
    //     during = "third";
    // } else if (d >= 21) {
    //     during = "fourth";
    // }
  
let day0 = new Date('0001-01-01')
    function firstDate(one, two) {
        return ((one-two) / (60 * 60 * 24 * 1000))/7
    }

    function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];        
    }
    let diff = firstDate(date,day0)%2
    if (diff%2 === 0 || diff < 1) {
        return getWeekDay(date)
    }
    else {
        let day = getWeekDay(date)
        return 'second'+day 
    }
}
// console.log(addWeek(new Date("0001-01-01")));

// timeTra



const timeTravel = function({ date, hour, minute, second }){
//     let year = date.getFullYear()
//     let month = date.getMonth()
//     let actDate = date.getDate()
//     // console.log(actDate);
    
//     // let param = 

//     let newDate = new Date(year, month, actDate, hour, minute, second)

//     console.log(newDate.toString());
    
// 5
//     return newDate.toString()

    date.setHours(hour) 
    date.setMinutes(minute)
    date.setSeconds(second)
    
    return date
}
