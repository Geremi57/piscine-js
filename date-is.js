const getTimestamp = (date) => {
  if (date instanceof Date) {
    return date.getTime();
  }

  return new Date(date).getTime();
};

const isValid = function(date) {
  return !isNaN(getTimestamp(date));
};

const isAfter = function(date1, date2) {
  return getTimestamp(date1) > getTimestamp(date2);
};

const isBefore = function(date1, date2) {
  return getTimestamp(date1) < getTimestamp(date2);
};

const isFuture = function(date) {
  return isValid(date) && getTimestamp(date) > Date.now();
};

const isPast = function(date) {
  return isValid(date) && getTimestamp(date) < Date.now();
};
