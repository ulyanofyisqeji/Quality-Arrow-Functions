var regexp  = new RegExp('{{([^}]+)}}', 'g');
const timeFromDate = date => date.toTimeString().slice(0, 8);
const merge = [...new Set(a.concat(b))];