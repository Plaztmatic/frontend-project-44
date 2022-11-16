#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const logicBrainEven = () => {
  const isCorrect = (param) => (param % 2 === 0 ? 'yes' : 'no');
  const getQuestionAndAnswer = () => {
    const num1 = generateRandomNumber() + 1;
    return [num1, isCorrect(num1)];
  };
  rounds('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
};
export default logicBrainEven;
