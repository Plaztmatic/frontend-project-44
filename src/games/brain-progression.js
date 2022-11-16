#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const logicBrainProg = () => {
  let findNum;
  const makeProgression = (number) => {
    let progression = '';
    const lag = generateRandomNumber();
    let countElem = 0;
    while (countElem < 11) {
      if (countElem === lag) {
        progression += '.. ';
        findNum = number;
        number += lag;
        countElem += 1;
      } else {
        progression += `${number} `;
        number += lag;
        countElem += 1;
      }
    }
    return progression;
  };
  const getQuestionAndAnswer = () => {
    const num1 = generateRandomNumber();
    return [makeProgression(num1), String(findNum)];
  };
  rounds('What number is missing in the progression?', getQuestionAndAnswer);
};
export default logicBrainProg;
