import runGame from '../index.js';
import { generateRandomNumber, roundsCount, calculateGcd } from '../helpers.js';

const runGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameData = [];

  for (let i = 1; i <= roundsCount; i += 1) {
    const firstNumber = generateRandomNumber(2, 50);
    const secondNumber = generateRandomNumber(2, 50);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = calculateGcd(firstNumber, secondNumber);
    gameData.push([question, String(correctAnswer)]);
  }

  runGame(rules, gameData);
};

export default runGcdGame;
