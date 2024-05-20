const isWeekday = (date) => date.getDay() % 6 !== 0;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);