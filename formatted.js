const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);