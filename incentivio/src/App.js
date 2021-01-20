import { useCharacters } from "./App.hooks";
import * as S from "./App.styles";
import Character from "./doNotChange/Character";
import Results from "./doNotChange/Results";

function App() {
  const { loading } = useCharacters();

  return (
    <S.AppContainer>
      <p>
        Uh oh...the letters are all jumbled up. Call the api to get the correct
        data.
      </p>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <S.CharacterContainer>
            <Character char="i" />
            <Character char="n" />
            <Character char="c" />
            <Character char="e" />
            <Character char="n" />
            <Character char="t" />
            <Character char="i" />
            <Character char="v" />
            <Character char="i" />
            <Character char="o" />
          </S.CharacterContainer>
          <Results />
        </>
      )}
    </S.AppContainer>
  );
}

export default App;
