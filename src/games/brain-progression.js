#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 8;

const getProgression = (number, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(number + step * i);
  } return progression;
};

const getQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1, 10);
  const lag = generateRandomNumber(1, 7);
  const progression = getProgression(num1, lag);
  const answer = String(progression[lag]);
  progression[lag] = '..';
  const question = (progression.join(' '));
  return [question, answer];
};

const logicBrainProg = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainProg;
