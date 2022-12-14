// map :: Functor f => (a -> b) -> f a -> f b
export const map = predicate => ary => ary.map(predicate);
