import {
  getUserAnswer,
  greetUser,
  printWhenGameIsFinished,
  getRandomNumber,
  maxNumberofRounds,
  printRules,
  printWhenIncorrectAnswer,
} from '../src/index.js';

const sum = (num1, num2) => num1 + num2;
const mult = (num1, num2) => num1 * num2;
const sub = (num1, num2) => num1 - num2;
const getRandomOperation = (operSum, operSub, operMult) => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operations = [operSum, operSub, operMult];
  const random = getRandomNumber(0, operations.length - 1);
  const randomOperation = operations[random];
  const idxOfRandomOperation = operations.indexOf(randomOperation);

  switch (idxOfRandomOperation) {
    case 0:
      console.log(`Question: ${number1} + ${number2}`);
      break;
    case 1:
      console.log(`Question: ${number1} - ${number2}`);
      break;
    case 2:
      console.log(`Question: ${number1} * ${number2}`);
      break;
    default:
      break;
  }

  return randomOperation(number1, number2).toString();
};

const playBrainCalcGame = () => {
  const userName = greetUser();
  printRules('What is the result of the expression?');
  let correctAnswers = 0;

  while (correctAnswers < maxNumberofRounds) {
    const correctAnswer = getRandomOperation(sum, sub, mult);
    const answer = (getUserAnswer());

    if (answer !== correctAnswer) {
      printWhenIncorrectAnswer(answer, correctAnswer, userName);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  printWhenGameIsFinished(userName);
};

export default playBrainCalcGame;
