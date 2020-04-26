import readlineSync from 'readline-sync';
// All imported files have the same pattern:
// description, makeGameData, makeQuestion, getCorrectAnswer
// following the calls of the makeGame function;
import brainEven from '../games/brain-even.js';
import brainPrime from '../games/brain-prime.js';
import brainCalc from '../games/brain-calc.js';
import braindGcd from '../games/brain-gcd.js';
import brainProgression from '../games/brain-progression.js';


const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

const printDesctiption = (gameDescription) => console.log(gameDescription);

const printQuestion = (question) => console.log(`Question: ${question}`);

const printWhenIncorrectAnswer = (answer, correctAnswer, user) => {
  console.log(`"${answer}" is the wrong answer ;(. The correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${user}!`);
};

const printWhenGameIsFinished = (name) => console.log(`Congratulations, ${name}!`);

const printWhenCorrectAnswer = () => console.log('Correct!');

const maxNumberofRounds = 3;

const chooseGame = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      return brainEven;
    case 'brain-calc':
      return brainCalc;
    case 'brain-gcd':
      return braindGcd;
    case 'brain-progression':
      return brainProgression;
    case 'brain-prime':
      return brainPrime;
    default:
      throw new Error(`Game "${gameName}" does not exist.`);
  }
};

const makeGame = (name) => {
  const game = chooseGame(name);
  const userName = greetUser();
  printDesctiption(game.description);
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
