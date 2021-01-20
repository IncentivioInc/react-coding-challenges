const characterData = (character) => ({
  data: {
    character,
  },
});

const api = {
  getI: () => new Promise((resolve) => resolve(characterData("i"))),
  getN: () => new Promise((resolve) => resolve(characterData("n"))),
  getC: () => new Promise((resolve) => resolve(characterData("c"))),
  getE: () => new Promise((resolve) => resolve(characterData("e"))),
  getT: () => new Promise((resolve) => resolve(characterData("t"))),
  getV: () => new Promise((resolve) => resolve(characterData("v"))),
  getO: () =>
    new Promise(
      (resolve) => setTimeout(() => resolve(characterData("o"))),
      2000
    ),
};

export default api;
