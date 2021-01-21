const makeInitialState = (character) => ({
  character,
  loading: null,
});

export const iInitialState = makeInitialState("n");
export const nInitialState = makeInitialState("c");
export const cInitialState = makeInitialState("e");
export const eInitialState = makeInitialState("t");
export const tInitialState = makeInitialState("v");
export const vInitialState = makeInitialState("o");
export const oInitialState = makeInitialState("i");
