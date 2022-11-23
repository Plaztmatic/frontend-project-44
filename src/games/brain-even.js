#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (param) => param % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = generateRandomNumber(1, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const logicBrainEven = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainEven;
