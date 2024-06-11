const isEven = (num) => num % 2 === 0;
const timeFromDate = date => date.toTimeString().slice(0, 8);
const buildOutputPath = path.join(repositoryRootPath, 'out');