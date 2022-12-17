import input from './input.mjs';

const noRepeat = (str) =>
  Array.from({ length: str.length }).every((_, i) => str.split(str[i]).length === 2);

export const makeCompute = maker => message => {
  const loop = (message, startIndex, endIndex) => {
    const slice = message.slice(startIndex, endIndex);
  
    if (slice.length < maker) {
      return loop(message, startIndex, endIndex + 1);
    }
  
    if (slice.length === maker && noRepeat(slice)) {
      return endIndex;
    } else {
      return loop(message, startIndex + 1, endIndex);
    }
  };

  return loop(message, 0, 0);
}

const compute = makeCompute(4);

console.log(compute(input));