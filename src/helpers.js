export const roundsCount = 3;

const isEven = (number) => number % 2 === 0;

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getOperationResult = (first, second, operation) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return null;
  }
};

const calculateGcd = (first, second) => {
  if (second === 0) {
    return first;
  }
  return calculateGcd(second, first % second);
};

const generateProgression = (startElement, progressionLength, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startElement + step * i);
  }
  const missingElementIndex = generateRandomNumber(1, progressionLength);
  const missingElement = progression[missingElementIndex];
  progression[missingElementIndex] = '..';
  return [progression, missingElement];
};

export {
  isEven,
  generateRandomNumber,
  getOperationResult,
  calculateGcd,
  generateProgression,
};
