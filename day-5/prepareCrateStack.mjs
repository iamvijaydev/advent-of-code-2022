import { pipe, map, fnMap, split, slice, replace, trim, removeTail } from '../fp/index.mjs';

/*
'[Z]     [P]'
----to-->
['[Z]', '   ', '[P]']
----to-->
['Z', '', 'P']
*/
// unwrapCrate :: (Number, Number) -> String
const unwrapCrate = (from, to) => str => pipe(
  slice(from, to),
  replace('[', ''),
  replace(']', ''),
  trim,
)(str);
// getEachCrate :: Number -> [Function f]
const getEachCrate = (length) => {
  let prevFrom = -1;

  return Array.from({ length }, (_, index) => {
    const from = prevFrom + 1;
    const to = from + 3;

    prevFrom = to;

    return unwrapCrate(from, to);
  });
}
// rowCrateStringToArray :: String -> [String]
const rowCrateStringToArray = fnMap(getEachCrate(9));

/*
[
  ['', 'D', '']
  ['N', 'C', '']
  ['Z', 'M', 'P']
]
----to-->
[
  [Z, N]
  [M, C, D]
  [P]
]
*/
// reverseTransposeRemoveEmpty :: [[String]] -> [[String]]
const reverseTransposeRemoveEmpty = matrix => matrix.reduce(
  (final, row) => row.map((_, i) => row[i].length ? [row[i], ...(final[i] || [])] : final[i] || []), 
  []
)

/*
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 
----to-->
'    [D]    '
'[N] [C]    '
'[Z] [M] [P]'
' 1   2   3 '
----to-->
'    [D]    '
'[N] [C]    '
'[Z] [M] [P]'
----to-->
[
  ['', 'D', '']
  ['N', 'C', '']
  ['Z', 'M', 'P']
]
----to-->
[
  [Z, N]
  [M, C, D]
  [P]
]
*/
// prepareCrateStack :: String -> [[String]]
export const prepareCrateStack = pipe(
  split('\n'),
  removeTail,
  map(rowCrateStringToArray),
  reverseTransposeRemoveEmpty,
);
