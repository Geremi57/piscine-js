const dayOfTheYear = function(date) {

    const startOfYear = Date.UTC(
        date.getUTCFullYear(),
        0,
        1
    );

    const currentDate = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
    );

    const millisecondsPerDay =
        1000 * 60 * 60 * 24;

    const daysPassed =
        Math.floor(
            (currentDate - startOfYear) /
            millisecondsPerDay
        );

    return daysPassed + 1;
};
