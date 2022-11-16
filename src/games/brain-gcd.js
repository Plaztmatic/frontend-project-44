#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const logicBrainGcd = () => {
  const isCorrect = (num1, num2) => {
    const average = (num1 + num2) / 2;
    let result;
    for (let i = 1; i < average; i += 1) {
      if (num1 === num2) {
        result = num1;
      }
      if (num1 % i === 0 && num2 % i === 0) {
        result = i;
      }
    }
    return result;
  };
  const getQuestionAndAnswer = () => {
    const num1 = generateRandomNumber() + 1;
    const num2 = generateRandomNumber() + 1;
    return [`${num1} ${num2}`, String(isCorrect(num1, num2))];
  };
  rounds('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
};
export default logicBrainGcd;
