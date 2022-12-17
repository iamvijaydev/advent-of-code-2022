// fnMap :: [Function f] -> Any -> [f(Any)]
export const fnMap = predicateAry => value => predicateAry.map(predicate => predicate(value));
