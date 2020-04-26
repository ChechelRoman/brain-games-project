import getRandomNumber from '../index.js';

const minNumber = 1;
const maxNumber = 30;

const sum = (num1, num2) => num1 + num2;
const mult = (num1, num2) => num1 * num2;
const sub = (num1, num2) => num1 - num2;

const operations = [sum, sub, mult];

const getRandomOper = (operationsArr) => {
  const randomIdx = getRandomNumber(0, operationsArr.length - 1);
  return operations[randomIdx];
};

const description = 'What is the result of the expression?';

const makeGameData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operation = getRandomOper(operations);
  // Always put operation at the end of the array
  return [number1, number2, operation];
};

const makeQuestion = (data) => {
  const operation = data[data.length - 1];
  let question;

  switch (operation) {
    case operations[0]:
      question = `${data[0]} + ${data[1]}`;
      break;
    case operations[1]:
      question = `${data[0]} - ${data[1]}`;
      break;
    case operations[2]:
      question = `${data[0]} * ${data[1]}`;
      break;
    default:
  }

  return question;
};

const getCorrectAnswer = (data) => {
  const operation = data[data.length - 1];
  return operation(data[0], data[1]).toString();
};

const brainCalc = {
  description,
  makeGameData,
  makeQuestion,
  getCorrectAnswer,
};

export default brainCalc;
