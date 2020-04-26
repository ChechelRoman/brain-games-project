import getRandomNumber from '../index.js';

const minNubmer = 1;
const maxNumber = 100;
const maxStepNumber = 10;
const progressionLength = 10;
const hidden = '..';

const description = 'What number is missing in the progression?';

const makeGameData = () => {
  const progression = [];
  const startNumber = getRandomNumber(minNubmer, maxNumber);
  const progressionStep = getRandomNumber(minNubmer, maxStepNumber);
  const idxOfHidden = getRandomNumber(0, progressionLength - 1);
  let i = 0;
  let step = startNumber;

  while (i < progressionLength) {
    progression.push(step + progressionStep);
    step += progressionStep;
    i += 1;
  }

  progression[idxOfHidden] = hidden;

  return progression;
};

const makeQuestion = (data) => {
  const question = data.join(' ');
  return question;
};

const getCorrectAnswer = (data) => {
  const idxOfHiddenNumber = data.findIndex((num) => num === hidden);
  let step;

  switch (idxOfHiddenNumber) {
    case 0:
      step = data[2] - data[1];
      return (data[1] - step).toString();
    case progressionLength - 1:
      step = data[2] - data[1];
      return (data[progressionLength - 2] + step).toString();
    default:
      step = (data[idxOfHiddenNumber + 1] - data[idxOfHiddenNumber - 1]) / 2;
      return (data[idxOfHiddenNumber - 1] + step).toString();
  }
};

const brainProgressionCopmonents = {
  description,
  makeGameData,
  makeQuestion,
  getCorrectAnswer,
};

export default brainProgressionCopmonents;
