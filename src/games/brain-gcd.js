#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const average = (num1 + num2) / 2;
  let result;
  for (let i = 1; i <= average; i += 1) {
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
  const num1 = generateRandomNumber(1, 11);
  const num2 = generateRandomNumber(1, 11);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

const logicBrainGcd = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainGcd;
