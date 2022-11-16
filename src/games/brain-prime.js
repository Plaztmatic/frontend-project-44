#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const logicBrainPrime = () => {
  const isCorrect = (num1) => {
    const average = num1 / 2;
    let result = 0;
    for (let i = 2; i <= average; i += 1) {
      if (num1 % i === 0) {
        result += 1;
      }
    }
    return result > 0 ? 'no' : 'yes';
  };
  const getQuestionAndAnswer = () => {
    const number = generateRandomNumber() + 2;
    return [number, isCorrect(number)];
  };
  rounds('Answer "yes" if given number is prime. Otherwise answer "no".', getQuestionAndAnswer);
};
export default logicBrainPrime;