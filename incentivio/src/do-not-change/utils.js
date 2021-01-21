export const correctIndices = {
  i: [0, 6, 8],
  n: [1, 4],
  c: [2],
  e: [3],
  t: [5],
  v: [7],
  o: [9],
};

export const checkIndices = (character, indices) =>
  indices.every((index) => correctIndices[character].includes(index));

/**
 * returns an object with shape
 * {
 *   i: {
 *     character: 'i',
 *     indices: [1, 7, 9],
 *     loading: false,
 *   },
 *   n: {
 *     character: 'n',
 *     indices: [2, 5],
 *     loading: false,
 *   },
 *   ...etc
 * }
 */
export const initialState = Object.entries(correctIndices).reduce(
  (result, [key, indices]) => {
    result[key] = {
      character: key,
      indices: indices.map((i) => (i + 1) % 10),
      loading: false,
    };
    return result;
  },
  {}
);
