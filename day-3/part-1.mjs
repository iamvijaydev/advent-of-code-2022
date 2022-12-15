import { pipe, map, split, aryTotal } from '../fp/index.mjs';
import input from './input.mjs';

// half :: String -> [String]
const half = word => {
  const mid = word.length / 2;

  return [word.slice(0, mid), word.slice(mid)];
}

// findDuplicate :: [String] -> String
const findDuplicate = ([wordCharsLeft, wordCharsRight]) =>
  wordCharsLeft.find(char => wordCharsRight.includes(char));

// getPriority :: String -> Number
export const getPriority = (char) => {
  if (!getPriority.memo) {
    const upperCasePriorityFrom = 27;
    const lowerCasePriorityFrom = 1;
    getPriority.memo = {
      upperCaseCharCodeOffset: 'A'.charCodeAt(0) - upperCasePriorityFrom,
      lowerCaseCharCodeOffset: 'a'.charCodeAt(0) - lowerCasePriorityFrom
    }
  }

  return char === char.toUpperCase()
    ? char.charCodeAt(0) - getPriority.memo.upperCaseCharCodeOffset
    : char.charCodeAt(0) - getPriority.memo.lowerCaseCharCodeOffset;
}

export const compute = pipe(
  split('\n'),
  map(pipe(
    half,
    map(split('')),
    findDuplicate,
    getPriority
  )),
  aryTotal
);

console.log(compute(input));
