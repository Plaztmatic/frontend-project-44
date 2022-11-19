#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const strOperation = '*+-*+-*+-*+';
const description = 'What is the result of the expression?';

const isCorrect = (num1, actionOper, num2) => {
  let result;
  switch (actionOper) {
    case '*':
      result = num1 * num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = null;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const num1 = generateRandomNumber(0);
  const num2 = generateRandomNumber(0);
  const actionOper = strOperation[generateRandomNumber(0)];
  const question = `${num1} ${actionOper} ${num2}`;
  const answer = String(isCorrect(num1, actionOper, num2));
  return [question, answer];
};

const logicBrainCalc = () => {
  rounds(description, getQuestionAndAnswer);
};
export default logicBrainCalc;
