import { pipe, map, split, join } from '../fp/index.mjs';
import input from './input.mjs';
import { prepareCrateStack } from './prepareCrateStack.mjs';
import { prepareInstructions } from './prepareInstructions.mjs';

// craneOperator9000 :: [[String]] -> [[String]]
const craneOperator9000 = ([cratesStackString, instructionsString]) => {
  const cratesStack = prepareCrateStack(cratesStackString);
  const instructions = prepareInstructions(instructionsString);

  instructions.forEach(inst => {
    const [move, from, to] = inst;
    const sourceAryIndex = from - 1;
    const destinationAryIndex = to - 1;

    for (let i = 0; i < move; i++) {
      cratesStack[destinationAryIndex].push(cratesStack[sourceAryIndex].pop());
    }
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
  craneOperator9000,
  elfMath
);

console.log(compute(input));
