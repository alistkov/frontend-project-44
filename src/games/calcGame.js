import readlineSync from 'readline-sync';
import { generateRandomNumber, getOperationResult } from '../helpers.js';

const createCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let steps = 3;
  const operations = ['+', '-', '*'];
  while (steps > 0) {
    const first = generateRandomNumber(1, 30);
    const second = generateRandomNumber(1, 30);
    const operationIndex = generateRandomNumber(0, 2);
    const operation = operations[operationIndex];

    console.log(`Question: ${first} ${operation} ${second}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = getOperationResult(first, second, operation);

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    steps -= 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default createCalcGame;
