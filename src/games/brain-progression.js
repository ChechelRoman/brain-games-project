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

const minNubmer = 1;
const maxNumber = 100;
const maxStepNumber = 10;
const progressionLength = 10;
const hidden = '..';

const makeGameData = () => {
  const progression = [];
  const startNumber = getRandomNumber(minNubmer, maxNumber);
  const progressionStep = getRandomNumber(minNubmer, maxStepNumber);
  const idxOfHidden = getRandomNumber(0, progressionLength - 1);
  let i = 0;
  let step = startNumber;

  while (i < progressionLength) {
    progression.push((step + progressionStep).toString());
    step += progressionStep;
    i += 1;
  }

  progression[idxOfHidden] = hidden;

  return progression;
};

const makeQuestion = (progression) => {
  const question = progression.join(' ');
  return printQuestion(`${question}`);
};

const getCorrectAnswer = (progression) => {
  const idxOfHiddenNumber = progression.findIndex((num) => num === hidden);
  const newProgression = [...progression].map((num) => Number(num));
  let step;

  switch (idxOfHiddenNumber) {
    case 0:
      step = newProgression[2] - newProgression[1];
      return (newProgression[1] - step).toString();
    case progressionLength - 1:
      step = newProgression[2] - newProgression[1];
      return (newProgression[progressionLength - 2] + step).toString();
    default:
      step = (newProgression[idxOfHiddenNumber + 1] - newProgression[idxOfHiddenNumber - 1]) / 2;
      return (newProgression[idxOfHiddenNumber - 1] + step).toString();
  }
};

const playBrainProgressionGame = () => {
  const userName = greetUser();
  printDesctiption('What number is missing in the progression?');
  let correctAnswers = 0;
  let data = makeGameData();

  while (correctAnswers < maxNumberofRounds) {
    makeQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    const answer = getUserAnswer();

    if (answer !== correctAnswer) {
      printWhenIncorrectAnswer(answer, correctAnswer, userName);
      return;
    }

    printWhenCorrectAnswer();
    correctAnswers += 1;
    data = makeGameData();
  }

  printWhenGameIsFinished(userName);
};

playBrainProgressionGame();

export default playBrainProgressionGame;
