// reducer :: (Number, String) -> Number
const reducer = (final, current) => final + Number(current);

// aryTotal :: ((Number, String) -> Number) -> [String] -> Number
export const aryTotal = ary => ary.reduce(reducer, 0);