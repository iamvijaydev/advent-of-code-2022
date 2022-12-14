import { pipe, map, split, aryTotal } from '../fp/index.mjs';
import input from './input.mjs';

// eachElf :: String -> [String]
export const eachElf = split('\n\n');

// eachCalories :: String -> [String]
export const eachCalories = split('\n');

// max :: [Number] -> Number
export const max = ary => Math.max(...ary);

export const compute = pipe(
  eachElf,
  map(pipe(eachCalories, aryTotal)),
  max
);

console.log(compute(input));
