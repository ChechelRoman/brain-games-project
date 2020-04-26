import getRandomNumber from '../index.js';

const minNumber = 1;
const maxNumber = 200;

const isEven = (num) => (num % 2 === 0);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeGameData = () => [getRandomNumber(minNumber, maxNumber)];

const makeQuestion = (data) => {
  const question = data.join(' ');
  return question;
};

const getCorrectAnswer = (data) => (isEven(data.join(' ')) ? 'yes' : 'no');

const brainEvenCopmonents = {
  description,
  makeGameData,
  makeQuestion,
  getCorrectAnswer,
};

export default brainEvenCopmonents;
