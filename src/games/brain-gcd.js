import getRandomNumber from '../index.js';

const minNumber = 1;
const maxNumber = 200;

const description = 'Find the greatest common divisor of given numbers.';

const makeGameData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  return [number1, number2];
};

const makeQuestion = (data) => {
  const question = `${data[0]} ${data[1]}`;
  return question;
};

const getCorrectAnswer = (data) => {
  let x = data[0];
  let y = data[1];

  while (y !== 0) {
    y = x % (x = y);
  }

  return x.toString();
};

const brainGcd = {
  description,
  makeGameData,
  makeQuestion,
  getCorrectAnswer,
};

export default brainGcd;
