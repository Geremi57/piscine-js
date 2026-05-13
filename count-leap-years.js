const countLeapYears = (date) => {

    const year = date.getFullYear();
    const y = year - 1;
    const divBy4 = Math.floor(y / 4);
    const divBy100 = Math.floor(y / 100);
    const divBy400 = Math.floor(y / 400);

    const leapYear =divBy4 - divBy100 + divBy400;
    return leapYear;
};

console.log(countLeapYears(new Date("0004-01-01"))); // 0 (since leap year 4 hasn’t completed yet)
console.log(countLeapYears(new Date("0005-01-01"))); // 1 (year 4 is a leap year)
console.log(countLeapYears(new Date("2024-01-01"))); // 490
console.log(countLeapYears(new Date("2025-01-01"))); // 491