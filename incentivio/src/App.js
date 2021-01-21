import { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./App.styles";
import Incentivio from "./doNotChange/Incentivio";
import { resetState } from "./redux/common.actions";

function App() {
  const dispatch = useDispatch();
  const [buttonPushed, setButtonPushed] = useState(false);

  const handleLoad = () => {
    setButtonPushed(true);
  };

  const handleReset = () => {
    dispatch(resetState());
    setButtonPushed(false);
  };

  return (
    <S.AppContainer>
      <p>
        Uh oh...the letters are all jumbled up. Press the Load button to call
        the api for get the correct data. The string below should spell
        "incentivio" afterwards.
      </p>
      <div>
        <button onClick={handleLoad}>Load</button>{" "}
        <button onClick={handleReset}>Reset</button>
      </div>
      <Incentivio buttonPushed={buttonPushed} />
    </S.AppContainer>
  );
}

export default App;
