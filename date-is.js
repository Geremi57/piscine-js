const isValid = function(date) {
  const isDateObject = date instanceof Date;
  const isTimestamp = typeof date === "number";

  if (!isDateObject && !isTimestamp) {
    return false;
  }

  return !isNaN(new Date(date).getTime());
};

const isAfter = function(date1, date2) {
  return isValid(date1) &&
         isValid(date2) &&
         new Date(date1).getTime() >
         new Date(date2).getTime();
};

const isBefore = function(date1, date2) {
  return isValid(date1) &&
         isValid(date2) &&
         new Date(date1).getTime() <
         new Date(date2).getTime();
};

const isFuture = function(date) {
  return isValid(date) &&
         new Date(date).getTime() > Date.now();
};

const isPast = function(date) {
  return isValid(date) &&
         new Date(date).getTime() < Date.now();
};
console.log(isValid('2013-01-01'));
