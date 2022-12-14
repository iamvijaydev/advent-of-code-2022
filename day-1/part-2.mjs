import { pipe, map, aryTotal, sort } from '../fp/index.mjs';
import input from './input.mjs';
import { eachElf, eachCalories } from './part-1.mjs';

// topThree :: [Number] -> [Number]
const topThree = ary => ary.slice(-3);

export const compute = pipe(
  eachElf,
  map(pipe(eachCalories, aryTotal)),
  sort,
  topThree,
  aryTotal
);

console.log(compute(input));
