const isValid = function(date) {
  return date instanceof Date && !isNaN(date.getTime());
};

const isAfter = function(date1, date2) {
  return isValid(date1) &&
         isValid(date2) &&
         date1.getTime() > date2.getTime();
};

const isBefore = function(date1, date2) {
  return isValid(date1) &&
         isValid(date2) &&
         date1.getTime() < date2.getTime();
};

const isFuture = function(date) {
  return isValid(date) &&
         date.getTime() > Date.now();
};

const isPast = function(date) {
  return isValid(date) &&
         date.getTime() < Date.now();
};

console.log(isValid('2013-01-01'));