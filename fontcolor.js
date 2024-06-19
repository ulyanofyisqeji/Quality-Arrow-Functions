const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;