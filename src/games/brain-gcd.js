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

const getGcd = () => {
  let x = getRandomNumber(1, 100);
  let y = getRandomNumber(1, 100);
  printQuestion(`${x} ${y}`);

  while (y !== 0) {
    y = x % (x = y);
  }

  return x.toString();
};

const playBrainGcdGame = () => {
  const userName = greetUser();
  printDesctiption('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;

  while (correctAnswers < maxNumberofRounds) {
    const correctAnswer = getGcd();
    const answer = getUserAnswer();

    if (answer !== correctAnswer) {
      printWhenIncorrectAnswer(answer, correctAnswer, userName);
      return;
    }

    printWhenCorrectAnswer();
    correctAnswers += 1;
  }

  printWhenGameIsFinished(userName);
};

export default playBrainGcdGame;
