// pipe :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
export const pipe = (...fns) => (...args) =>
  fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0];
