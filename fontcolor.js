const isEmptyObject = obj => Object.keys(obj).length === 0;
const uniqueArray = arr => [...new Set(arr)];
const isTabInView = () => !document.hidden;