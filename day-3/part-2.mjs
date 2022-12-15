import { pipe, map, split, aryTotal, log } from '../fp/index.mjs';
import input from './input.mjs';
import { getPriority } from './part-1.mjs';

// groupByThree :: [String] -> [[String]]
const groupByThree = ary =>
  ary.reduce((final, current) => {
    if (!final.length) {
      final.push([]);
    }

    const last = final[final.length - 1];

    if (last.length === 3) {
      final.push([current]);
    } else {
      last.push(current);
    }

    return final;
  }, []);

// findDuplicate :: [String] -> String
const findDuplicate = ([wordCharsFirst, wordCharsSecond, wordCharsThird]) =>
  wordCharsFirst.find(
    char => wordCharsSecond.includes(char) && wordCharsThird.includes(char)
  );

export const compute = pipe(
  split('\n'),
  groupByThree,
  map(pipe(
    map(split('')),
    findDuplicate,
    getPriority
  )),
  aryTotal
);

console.log(compute(input));
