import { pipe, map, split, aryTotal } from '../fp/index.mjs';
import input from './input.mjs';

export const points = new Map([
  ['X', 1],
  ['Y', 2],
  ['Z', 3]
]);
export const scores = new Map([
  ['won', 6],
  ['draw', 3],
  ['lost', 0]
]);

const toWon = new Map([
  ['A', 'Y'],
  ['B', 'Z'],
  ['C', 'X']
]);
const toLost = new Map([
  ['A', 'Z'],
  ['B', 'X'],
  ['C', 'Y']
]);

// round :: [String] -> Number
const round = ([expect, play]) => {
  const point = points.get(play);
  let score = scores.get('draw');

  if (toWon.get(expect) === play) {
    score = scores.get('won');
  } else if (toLost.get(expect) === play) {
    score = scores.get('lost');
  }

  return point + score;
};

export const compute = pipe(
  split('\n'),
  map(pipe(
    split(' '),
    round,
  )),
  aryTotal
);

console.log(compute(input));
