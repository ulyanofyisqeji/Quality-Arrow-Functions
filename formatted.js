const repositoryRootPath = path.resolve(__dirname, '..');
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
var DELIM_SIZE = 4;