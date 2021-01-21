import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { resetState } from "./redux/common.actions";

export const useLoadButton = () => {
  // Do not modify this
  const [buttonPushed, setButtonPushed] = useState(false);

  const callApi = () => {
    // implement this
  };

  // Do not modify this function
  const handleLoad = useCallback(() => {
    setButtonPushed(true);
    callApi();
  }, [setButtonPushed]);

  // You can return additional properties here if you want, but there is a solution
  // that doesn't require this. Just don't remove or modify the existing properties
  return {
    buttonPushed,
    setButtonPushed,
    handleLoad,
  };
};

/**
 * Convenience method. You should not need to modify this
 */
export const useResetButton = (setButtonPushed) => {
  const dispatch = useDispatch();

  const handleReset = useCallback(() => {
    dispatch(resetState());
    setButtonPushed(false);
  }, [setButtonPushed, dispatch]);

  return { handleReset };
};
