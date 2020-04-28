import readlineSync from 'readline-sync';
// All imported files have the same pattern:
// description, makeGameData, makeQuestion, getCorrectAnswer,
// following the calls of the makeGame function;
import brainEvenCopmonents from '../games/brain-even.js';
import brainPrimeCopmonents from '../games/brain-prime.js';
import brainCalcCopmonents from '../games/brain-calc.js';
import braindGcdCopmonents from '../games/brain-gcd.js';
import brainProgressionCopmonents from '../games/brain-progression.js';

const maxNumberofRounds = 3;

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
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(game.description);
  let correctAnswers = 0;
  let data = game.makeGameData();

  while (correctAnswers < maxNumberofRounds) {
    console.log(`Question: ${game.makeQuestion(data)}`);
    const correctAnswer = game.getCorrectAnswer(data);
    const answer = readlineSync.question('Your answer ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is the wrong answer ;(. The correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
    data = game.makeGameData();
  }

  console.log(`Congratulations, ${userName}!`);
};

const makeBrainEvenGame = () => makeGame('brain-even');
const makeBrainCalcGame = () => makeGame('brain-calc');
const makeBrainGcdGame = () => makeGame('brain-gcd');
const makeBrainProgressionGame = () => makeGame('brain-progression');
const makeBrainPrimeGame = () => makeGame('brain-prime');

export {
  makeBrainEvenGame,
  makeBrainCalcGame,
  makeBrainGcdGame,
  makeBrainProgressionGame,
  makeBrainPrimeGame,
};
