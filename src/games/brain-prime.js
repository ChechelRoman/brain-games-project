import getRandomNumber from '../index.js';

const minNubmer = -100;
const maxNumber = 1000;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeGameData = () => [getRandomNumber(minNubmer, maxNumber)];

const makeQuestion = (data) => {
  const question = data.join(' ');
  return question;
};

const getCorrectAnswer = (data) => (isPrime(data.join(' ')) ? 'yes' : 'no');

const brainPrime = {
  description,
  makeGameData,
  makeQuestion,
  getCorrectAnswer,
};

export default brainPrime;
