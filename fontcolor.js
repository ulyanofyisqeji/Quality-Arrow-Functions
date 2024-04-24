const isWeekday = (date) => date.getDay() % 6 !== 0;
const isEmptyObject = obj => Object.keys(obj).length === 0;