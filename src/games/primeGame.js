import runGame from '../index.js';
import { roundsCount, generateRandomNumber } from '../helpers.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

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
