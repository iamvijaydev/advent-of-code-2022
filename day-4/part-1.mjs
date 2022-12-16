import { pipe, map, filter, split, length, match, log } from '../fp/index.mjs';
import input from './input.mjs';

// isContain :: (Number x 4) -> Boolean
const isContain = (xmin, xmax, ymin, ymax) =>
  xmin <= ymin && ymax <= xmax;

// isContaining :: [Number] -> Boolean
const isContaining = ([xmin, xmax, ymin, ymax]) =>
  isContain(xmin, xmax, ymin, ymax) || isContain(ymin, ymax, xmin, xmax);

export const compute = pipe(
  split('\n'),
  map(pipe(
    match(/(\d+)/g),
    map(Number),
  )),
  filter(isContaining),
  length
);

console.log(compute(input));