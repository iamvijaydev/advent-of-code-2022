// numberSort :: (Number, Number) -> Number
const numberSort = (a, b) => a - b;

// sort :: [Number] -> [Number]
export const sort = ary => ary.sort(numberSort);
