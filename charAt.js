const isEven = (num) => num % 2 === 0;
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();