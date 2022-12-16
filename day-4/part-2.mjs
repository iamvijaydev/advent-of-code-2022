import { pipe, map, filter, split, length, match } from '../fp/index.mjs';
import input from './input.mjs';

// isSame :: ([Number] x 2) -> Boolean
const isSame = (rangex, rangey) =>
  rangex.some(num => rangey.includes(num));

// isOverlap :: ([Number] x 2) -> Boolean
const isOverlap = (rangex, rangey) => {
  const rangexMax = Math.max(...rangex);
  const rangexMin = Math.min(...rangex);
  const rangeyMax = Math.max(...rangey);
  const rangeyMin = Math.min(...rangey);

  return (rangexMax >= rangeyMin && rangexMax <= rangeyMax)
    || (rangeyMax >= rangexMin && rangeyMax <= rangexMax);
}

// isOverlaping :: [Number] -> Boolean
const isOverlaping = ([xmin, xmax, ymin, ymax]) => {
  const rangex = [xmin, xmax];
  const rangey = [ymin, ymax];

  return isSame(rangex, rangey) || isOverlap(rangex, rangey)
}

export const compute = pipe(
  split('\n'),
  map(pipe(
    match(/(\d+)/g),
    map(Number),
  )),
  filter(isOverlaping),
  length
);

console.log(compute(input));
