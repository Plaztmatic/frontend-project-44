import readlineSync from 'readline-sync';

const greetingsQuestion = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}
export default greetingsQuestion;