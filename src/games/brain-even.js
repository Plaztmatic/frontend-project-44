#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (param) => (param % 2 === 0 ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(1);
  return [num1, isEven(num1)];
};

const logicBrainEven = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainEven;
