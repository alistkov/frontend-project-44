import runGame from '../index.js';
import {
  generateRandomNumber,
  getOperationResult,
  roundsCount,
} from '../helpers.js';

const runCalcGame = () => {
  const rules = 'What is the result of the expression?';
  const gameData = [];
  const operations = ['+', '-', '*'];
  for (let i = 1; i <= roundsCount; i += 1) {
    const first = generateRandomNumber(1, 30);
    const second = generateRandomNumber(1, 30);
    const operationIndex = generateRandomNumber(0, 2);
    const operation = operations[operationIndex];
    const question = `${first} ${operation} ${second}`;
    const correctAnswer = getOperationResult(first, second, operation);
    gameData.push([question, String(correctAnswer)]);
  }
  runGame(rules, gameData);
};

export default runCalcGame;
