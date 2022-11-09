import readlineSync from 'readline-sync';

export const generateRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

export const roundGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
};

const roundStep = (typeOfGame) => {
  console.log(`Question: ${typeOfGame}`);
  const answerUser = readlineSync.question('Your answer: ');
  return answerUser;
};
export default roundStep;
