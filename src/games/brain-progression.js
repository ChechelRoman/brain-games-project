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
    progression.push((step + progressionStep).toString());
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
  const newProgression = [...data].map((num) => Number(num));
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

const brainProgression = {
  description,
  makeGameData,
  makeQuestion,
  getCorrectAnswer,
};

export default brainProgression;
