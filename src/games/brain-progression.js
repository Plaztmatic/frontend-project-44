#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
let findNum;

const makeProgression = (number, step) => {
  let progression = '';
  let countElem = 0;
  const lengthProgression = generateRandomNumber(6);
  while (countElem < lengthProgression) {
    if (countElem === step) {
      progression += '.. ';
      findNum = number;
      number += step;
      countElem += 1;
    } else {
      progression += `${number} `;
      number += step;
      countElem += 1;
    }
  }
  return progression;
};
const getQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(0);
  const lag = generateRandomNumber(0);
  const question = makeProgression(num1, lag);
  const answer = String(findNum);
  return [question, answer];
};

const logicBrainProg = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainProg;
