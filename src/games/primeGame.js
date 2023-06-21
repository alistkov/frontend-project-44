import runGame from '../index.js';
import { roundsCount, generateRandomNumber, isPrime } from '../helpers.js';

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameData = [];

  for (let i = 1; i <= roundsCount; i += 1) {
    const question = generateRandomNumber(3, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, String(correctAnswer)]);
  }
  runGame(rules, gameData);
};

export default runPrimeGame;
