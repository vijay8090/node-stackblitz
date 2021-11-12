const randomGenerator = () => {
  return Math.floor(Math.random()*10+1);
}

const mockAPI = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = randomGenerator();
      if (random <= 5) {
        resolve({ input, random });
      } else {
        reject({ input, random });
      }
    }, 1000);
  });
};

module.exports = {
  randomGenerator,
  mockAPI,
};
