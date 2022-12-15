import { pipe, map, split, aryTotal } from '../fp/index.mjs';
import input from './input.mjs';
import { scores } from './part-1.mjs';

// round :: [String] -> Number
const round = ([expect, outcome]) => {
  // rock, paper, sissor
  const options = ['A', 'B', 'C'];
  const firstIndex = 0;
  const lastIndex = 2;
  const indexToPoint = 1;

  const index = options.findIndex(x => x === expect);
  let playIndex = index;
  let score = scores.get('draw');

  if (outcome === 'X') {
    // to loose
    playIndex = index - 1 < firstIndex ? lastIndex : index - 1;
    score = scores.get('lost');
  } else if (outcome === 'Z') {
    // to win
    playIndex = index + 1 > lastIndex ? firstIndex : index + 1;
    score = scores.get('won');
  }

  const point = playIndex + indexToPoint;

  return point + score;
}

export const compute = pipe(
  split('\n'),
  map(pipe(
    split(' '),
    round,
  )),
  aryTotal
);

console.log(compute(input));
