import { pipe, map, filter, split, length } from '../fp/index.mjs';
import input from './input.mjs';
import { cleanValues } from './part-1.mjs';

// isPartialOverlapping :: [String] -> Boolean
const isPartialOverlapping = ([firstRange, secondRange]) => {
  const [firstRangeFrom, firstRangeTo] = cleanValues(firstRange);
  const [secondRangeFrom, secondRangeTo] = cleanValues(secondRange);

  const firstRangeLength = firstRangeTo - firstRangeFrom + 1;
  const firstRangeAry = length === 0
    ? [firstRangeFrom]
    : Array.from({ length: firstRangeLength }, (_, i) => i + firstRangeFrom)

  const secondRangeLength = secondRangeTo - secondRangeFrom + 1;
  const secondRangeAry = length === 0
    ? [secondRangeFrom]
    : Array.from({ length: secondRangeLength }, (_, i) => i + secondRangeFrom);

  return firstRangeAry.some(item => secondRangeAry.includes(item));
}

export const compute = pipe(
  split('\n'),
  map(pipe(
    split(','),
    isPartialOverlapping
  )),
  filter(Boolean),
  length
);

console.log(compute(input));
