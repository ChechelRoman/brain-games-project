import readlineSync from 'readline-sync';
// All imported files have the same pattern:
// description, makeGameData, makeQuestion, getCorrectAnswer
// following the calls of the makeGame function;
import brainEvenCopmonents from '../games/brain-even.js';
import brainPrimeCopmonents from '../games/brain-prime.js';
import brainCalcCopmonents from '../games/brain-calc.js';
import braindGcdCopmonents from '../games/brain-gcd.js';
import brainProgressionCopmonents from '../games/brain-progression.js';


const maxNumberofRounds = 3;

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const printDescription = (gameDescription) => console.log(gameDescription);

const printQuestion = (question) => console.log(`Question: ${question}`);

const getUserAnswer = () => readlineSync.question('Your answer ');

const printWhenCorrectAnswer = () => console.log('Correct!');

const printWhenIncorrectAnswer = (answer, correctAnswer, user) => {
  console.log(`"${answer}" is the wrong answer ;(. The correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${user}!`);
};

const printWhenGameIsFinished = (name) => console.log(`Congratulations, ${name}!`);

const chooseGame = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return brainEvenCopmonents;
    case 'brain-calc':
      return brainCalcCopmonents;
    case 'brain-gcd':
      return braindGcdCopmonents;
    case 'brain-progression':
      return brainProgressionCopmonents;
    case 'brain-prime':
      return brainPrimeCopmonents;
    default:
      throw new Error(`Game "${gameName}" does not exist.`);
  }
};

const makeGame = (name) => {
  const game = chooseGame(name);
  const userName = greetUser();
  printDescription(game.description);
  let correctAnswers = 0;
  let data = game.makeGameData();

  while (correctAnswers < maxNumberofRounds) {
    printQuestion(game.makeQuestion(data));
    const correctAnswer = game.getCorrectAnswer(data);
    const answer = getUserAnswer();

    if (answer !== correctAnswer) {
      printWhenIncorrectAnswer(answer, correctAnswer, userName);
      return;
    }

    printWhenCorrectAnswer();
    correctAnswers += 1;
    data = game.makeGameData();
  }

  printWhenGameIsFinished(userName);
};

export default makeGame;
