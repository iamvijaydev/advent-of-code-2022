import { slice } from './slice.mjs';

// removeTail :: [Any] -> [Any]
export const removeTail = ary => slice(0, ary.length - 1)(ary);
