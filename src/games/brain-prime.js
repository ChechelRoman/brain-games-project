import {
  getUserAnswer,
  greetUser,
  printWhenGameIsFinished,
  getRandomNumber,
  maxNumberofRounds,
  printDesctiption,
  printQuestion,
  printWhenIncorrectAnswer,
  printWhenCorrectAnswer,
} from '../index.js';

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

const makeGameData = () => [getRandomNumber(minNubmer, maxNumber)];

const makeQuestion = (data) => {
  const question = data.join(' ');
  return printQuestion(`${question}`);
};

const getCorrectAnswer = (data) => (isPrime(data.join(' ')) ? 'yes' : 'no');

const playBrainPrimeGame = () => {
  const userName = greetUser();
  printDesctiption('Answer "yes" if given number is prime. Otherwise answer "no"');
  let correctAnswers = 0;
  let data = makeGameData();

  while (correctAnswers < maxNumberofRounds) {
    makeQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    const answer = getUserAnswer();

    if (answer !== correctAnswer) {
      printWhenIncorrectAnswer(answer, correctAnswer, userName);
      return;
    }

    printWhenCorrectAnswer();
    correctAnswers += 1;
    data = makeGameData();
  }

  printWhenGameIsFinished(userName);
};

export default playBrainPrimeGame;
