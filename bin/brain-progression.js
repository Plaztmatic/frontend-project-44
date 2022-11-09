#!/usr/bin/env node
/* eslint-disable no-param-reassign */
import roundStep, { roundGame, generateRandomNumber } from '../src/round.js';

let findNum;
const makeProgression = (number) => {
  let progression = '';
  const lag = generateRandomNumber();
  let countElem = 0;
  while (countElem < 11) {
    if (countElem === lag) {
      progression += '.. ';
      findNum = number;
      number += lag;
      countElem += 1;
    } else {
      progression += `${number} `;
      number += lag;
      countElem += 1;
    }
  }
  return progression;
};

const name = roundGame();
console.log('What number is missing in the progression?');
let count = 0;
while (count < 3) {
  const num1 = generateRandomNumber();
  const answerUser = roundStep(makeProgression(num1));
  if (findNum === Number(answerUser)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${findNum}'.\nLet's try again, ${name}!`);
    break;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
