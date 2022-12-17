import { pipe, map, split, join } from '../fp/index.mjs';
import input from './input.mjs';
import { prepareCrateStack } from './prepareCrateStack.mjs';
import { prepareInstructions } from './prepareInstructions.mjs';

// craneOperator9001 :: [[String]] -> [[String]]
const craneOperator9001 = ([cratesStackString, instructionsString]) => {
  const cratesStack = prepareCrateStack(cratesStackString);
  const instructions = prepareInstructions(instructionsString);

  instructions.forEach(inst => {
    const [move, from, to] = inst;
    const sourceAryIndex = from - 1;
    const destinationAryIndex = to - 1;

    const liftUp = cratesStack[sourceAryIndex].slice(-move);
    const remains = cratesStack[sourceAryIndex].slice(0, cratesStack[sourceAryIndex].length - move)

    cratesStack[destinationAryIndex] = cratesStack[destinationAryIndex].concat(liftUp);
    cratesStack[sourceAryIndex] = remains;
  });

  return cratesStack;
}

// elfMath :: [[String]] -> String
const elfMath = pipe(
  map(stack => stack.pop()),
  join('')
);

export const compute = pipe(
  split('\n\n'),
  craneOperator9001,
  elfMath
);

console.log(compute(input));
