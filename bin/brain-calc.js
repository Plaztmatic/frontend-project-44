#!/usr/bin/env node
import roundStep, { roundGame, generateRandomNumber } from '../src/round.js';

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
const name = roundGame();
console.log('What is the result of the expression?');
let count = 0;
const strOperation = '*+-*+-*+-*+';
while (count < 3) {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const actionOper = strOperation[generateRandomNumber()]
  const expression = `${num1} ${actionOper} ${num2}`;
  const answerUser = roundStep(expression);
  if (isCorrect(num1, actionOper, num2) === Number(answerUser)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${isCorrect(num1, actionOper, num2)}'.\nLet's try again, ${name}!`);
    break;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
