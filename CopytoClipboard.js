const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const isEven = (num) => num % 2 === 0;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const merge = Object.assign({}, obj1, obj2);