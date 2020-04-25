import {
  getUserAnswer,
  greetUser,
  printWhenGameIsFinished,
  getRandomNumber,
  maxNumberofRounds,
  printRules,
  printWhenIncorrectAnswer,
  printWhenCorrectAnswer,
} from '../index.js';

const isEven = (num) => (num % 2 === 0);

const playBrainEvenGame = () => {
  const userName = greetUser();
  printRules('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  while (correctAnswers < maxNumberofRounds) {
    const number = getRandomNumber(1, 30);
    console.log(`Question: ${number}`);
    const answer = getUserAnswer();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

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
