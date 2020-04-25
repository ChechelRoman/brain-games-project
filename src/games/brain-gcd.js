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
  const numbers = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const divisors = numbers
    .reduce((acc, number) => {
      for (let i = 1; i <= number; i += 1) {
        if (number % i === 0) {
          acc.push(i);
        }
      }
      return acc;
    }, [])
    .filter((num, idx, arr) => arr.indexOf(num) === idx
      && arr.lastIndexOf(num) !== idx)
    .sort((a, b) => a - b);

  printQuestion(`${numbers[0]} ${numbers[1]}`);
  return divisors[divisors.length - 1].toString();
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
