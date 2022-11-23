#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num1) => {
  const average = num1 / 2;
  let result = 0;
  for (let i = 2; i <= average; i += 1) {
    if (num1 % i === 0) {
      result += 1;
    }
  }
  return result > 0
};

const getQuestionAndAnswer = () => {
  const number = generateRandomNumber(2, 12);
  const question = number;
  const answer = isPrime(number) ? 'no' : 'yes';
  return [question, answer];
};

const logicBrainPrime = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainPrime;
