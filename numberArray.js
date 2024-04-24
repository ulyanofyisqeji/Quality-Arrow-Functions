const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const randomString = () => Math.random().toString(36).slice(2);
const randomBoolean = () => Math.random() >= 0.5;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];