#!/usr/bin/env node
import roundStep, { roundGame, generateRandomNumber } from '../src/round.js';

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
const name = roundGame();
console.log('What is the result of the expression?');
let count = 0;
while (count < 3) {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const expression = `${num1} ${num2}`;
  const answerUser = roundStep(expression);
  if (isCorrect(num1, num2) === Number(answerUser)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${isCorrect(num1, num2)}'.\nLet's try again, ${name}`);
    break;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
