#!/usr/bin/env node
import roundStep, { roundGame, generateRandomNumber } from '../src/round.js';

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
const name = roundGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count < 3) {
  const number = generateRandomNumber() + 2;
  const answerUser = roundStep(number);
  if (isCorrect(number) === answerUser) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${isCorrect(number)}'.\nLet's try again, ${name}!`);
    break;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
