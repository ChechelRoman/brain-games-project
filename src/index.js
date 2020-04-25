import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const printDesctiption = (description) => console.log(description);

const printQuestion = (question) => console.log(`Question: ${question}`);

const printWhenIncorrectAnswer = (answer, correctAnswer, user) => {
  console.log(`"${answer}" is the wrong answer ;(. The correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${user}!`);
};

const printWhenGameIsFinished = (name) => console.log(`Congratulations, ${name}!`);

const printWhenCorrectAnswer = () => console.log('Correct!');

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const maxNumberofRounds = 3;

export {
  getUserAnswer,
  greetUser,
  printWhenGameIsFinished,
  getRandomNumber,
  maxNumberofRounds,
  printDesctiption,
  printQuestion,
  printWhenIncorrectAnswer,
  printWhenCorrectAnswer,
};
