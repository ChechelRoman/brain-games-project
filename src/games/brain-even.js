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

const isEven = (num) => (num % 2 === 0);

const getCorrectAnswer = () => {
  const number = getRandomNumber(1, 50);
  printQuestion(`${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const playBrainEvenGame = () => {
  const userName = greetUser();
  printDesctiption('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < maxNumberofRounds) {
    const correctAnswer = getCorrectAnswer();
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

export default playBrainEvenGame;
