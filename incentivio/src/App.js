import * as S from "./App.styles";
import { useLoadButton, useResetButton } from "./App.hooks";
import Incentivio from "./doNotChange/Incentivio";
import Instructions from "./doNotChange/Instructions";

function App() {
  const { buttonPushed, setButtonPushed, handleLoad } = useLoadButton();
  const { handleReset } = useResetButton(setButtonPushed);

  return (
    <S.AppContainer>
      <Instructions />
      <div>
        <button onClick={handleLoad}>Load</button>{" "}
        <button onClick={handleReset}>Reset</button>
      </div>
      <Incentivio buttonPushed={buttonPushed} />
    </S.AppContainer>
  );
}

export default App;
