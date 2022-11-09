#!/usr/bin/env node
import roundStep, { roundGame, generateRandomNumber } from '../src/round.js';

const isCorrect = (param) => (param % 2 === 0 ? 'yes' : 'no');
const name = roundGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count < 3) {
  const number = generateRandomNumber();
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
