#!/usr/bin/env node
import rounds from '../index.js';
import generateRandomNumber from '../utils.js';

const logicBrainCalc = () => {
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
  const strOperation = '*+-*+-*+-*+';
  const getQuestionAndAnswer = () => {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const actionOper = strOperation[generateRandomNumber()];
    return [`${num1} ${actionOper} ${num2}`, String(isCorrect(num1, actionOper, num2))];
  };
  rounds('What is the result of the expression?', getQuestionAndAnswer);
};
export default logicBrainCalc;
