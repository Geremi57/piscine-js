function sunnySunday(date) {

    const referenceDate = new Date("0001-01-01");
    const customWeekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const differenceInMilliseconds =
        date.getTime() - referenceDate.getTime();

    const millisecondsPerDay =
        1000 * 60 * 60 * 24;

    const totalDaysPassed =
        Math.floor(
            differenceInMilliseconds /
            millisecondsPerDay
        );

    const dayIndex =
        totalDaysPassed % 6;
    return customWeekDays[dayIndex];
}

console.log(sunnySunday(new Date('0001-01-01')) === 'Monday')
console.log(sunnySunday(new Date('0001-01-02')) === 'Tuesday')
console.log(sunnySunday(new Date('0001-01-03')) === 'Wednesday')
console.log(sunnySunday(new Date('0001-01-04')) === 'Thursday')
console.log(sunnySunday(new Date('0001-01-05')) === 'Friday')
console.log(sunnySunday(new Date('0001-01-06')) === 'Saturday')
console.log(sunnySunday(new Date('0001-01-07')) === 'Monday')

console.log(sunnySunday(new Date('0001-12-01')) === 'Friday')
console.log(sunnySunday(new Date('1664-08-09')) === 'Saturday')

console.log(sunnySunday(new Date('2020-01-01')) === 'Monday')
console.log(sunnySunday(new Date('2048-12-08')) === 'Thursday')