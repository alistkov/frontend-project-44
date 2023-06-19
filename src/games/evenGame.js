import runGame from '../index.js';
import { generateRandomNumber, isEven, roundsCount } from '../helpers.js';

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = generateRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, correctAnswer]);
  }
  runGame(rules, gameData);
};

export default runEvenGame;
