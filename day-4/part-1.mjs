import { pipe, map, filter, split, length } from '../fp/index.mjs';
import input from './input.mjs';

export const cleanValues = pipe(
  split('-'),
  map(Number)
)

const isFullOverlapping = ([firstRange, secondRange]) => {
  const [firstRangeFrom, firstRangeTo] = cleanValues(firstRange);
  const [secondRangeFrom, secondRangeTo] = cleanValues(secondRange);

  const firstInSecond = firstRangeFrom >= secondRangeFrom && firstRangeTo <= secondRangeTo;
  const secondInFirst = secondRangeFrom >= firstRangeFrom && secondRangeTo <= firstRangeTo;

  return firstInSecond || secondInFirst;
}

export const compute = pipe(
  split('\n'),
  map(pipe(
    split(','),
    isFullOverlapping,
  )),
  filter(Boolean),
  length
);

console.log(compute(input));