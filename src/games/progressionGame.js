import runGame from '../index.js';
import {
  roundsCount,
  generateRandomNumber,
  generateProgression,
} from '../helpers.js';

const runProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const gameData = [];

  for (let i = 1; i <= roundsCount; i += 1) {
    const startElement = generateRandomNumber(1, 9);
    const progressionLength = generateRandomNumber(5, 10);
    const step = generateRandomNumber(1, 9);
    const [progression, correctAnswer] = generateProgression(
      startElement,
      progressionLength,
      step
    );
    const question = progression.join(' ');
    gameData.push([question, String(correctAnswer)]);
  }
  runGame(rules, gameData);
};

export default runProgressionGame;
