import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useIncentivio = (buttonPushed) => {
  const [error, setError] = useState(null);

  const i = useSelector((state) => state.i);
  const n = useSelector((state) => state.n);
  const c = useSelector((state) => state.c);
  const e = useSelector((state) => state.e);
  const t = useSelector((state) => state.t);
  const v = useSelector((state) => state.v);
  const o = useSelector((state) => state.o);

  const incentivio = new Array(10);

  stateToArray(i, incentivio);
  stateToArray(n, incentivio);
  stateToArray(c, incentivio);
  stateToArray(e, incentivio);
  stateToArray(t, incentivio);
  stateToArray(v, incentivio);
  stateToArray(o, incentivio);

  const incentivioString = incentivio.join("");

  useEffect(() => {
    if (!buttonPushed) {
      setError(null);
    } else if (incentivioString !== "incentivio") {
      setError('The string should spell "incentivio"');
    } else if (incentivioString === "incentivio" && error) {
      setError(
        "You started rendering the string before all api calls were complete"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonPushed, incentivioString]);

  const makeSuccessSelector = useCallback(
    () => (state) =>
      buttonPushed &&
      !error &&
      incentivioString === "incentivio" &&
      state.i.loading === false &&
      state.n.loading === false &&
      state.c.loading === false &&
      state.e.loading === false &&
      state.t.loading === false &&
      state.v.loading === false &&
      state.o.loading === false,
    [buttonPushed, incentivioString, error]
  );

  const success = useSelector(makeSuccessSelector());

  return {
    incentivioString,
    error,
    success,
  };
};

const stateToArray = (state, array) =>
  state.indices.forEach((index) => (array[index] = state.character));
