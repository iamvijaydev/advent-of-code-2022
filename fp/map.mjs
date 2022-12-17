// map :: Function f -> [Any] -> [f(Any)]
export const map = predicate => ary => ary.map(predicate);
