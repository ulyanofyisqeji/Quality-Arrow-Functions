const merge = (a, b) => a.concat(b);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);