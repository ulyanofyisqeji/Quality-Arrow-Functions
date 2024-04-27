const repositoryRootPath = path.resolve(__dirname, '..');
const removeDuplicates = (arr) => [...new Set(arr)];
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;