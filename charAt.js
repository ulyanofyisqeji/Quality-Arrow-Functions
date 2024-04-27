var regexp  = new RegExp('{{([^}]+)}}', 'g');
const buildOutputPath = path.join(repositoryRootPath, 'out');
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);