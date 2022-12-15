// map :: Functor f => (a -> b) -> f a -> f b
export const filter = predicate => ary => ary.filter(predicate);
