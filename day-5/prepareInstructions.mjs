import { pipe, replace, split, map } from '../fp/index.mjs';

/*
move 3 from 1 to 3
----to-->
[3, 1, 3]
*/
// instructionStringToArray :: String -> [Number]
const instructionStringToArray = pipe(
  replace('move ', ''),
  replace('from ', ''),
  replace('to ', ''),
  split(' '),
  map(Number)
);

/*
move 1 from 2 to 1
move 3 from 1 to 3
----to-->
[
  [1, 2, 1],
  [3, 1, 3]
]
*/
// prepareInstructions :: String -> [[Number]]
export const prepareInstructions = pipe(
  split('\n'),
  map(instructionStringToArray),
);
