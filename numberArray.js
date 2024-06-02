console.log("0 || 1 = "+(0 || 1));
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();