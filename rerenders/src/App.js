import "./App.css";
import ExerciseOne from "./ExerciseOne";
import ExerciseTwo from "./ExerciseTwo";
import { useMousePosition } from "./useMousePosition";

function App() {
  const { position, setPosition } = useMousePosition();

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="App">
      <div>Mouse Position: {JSON.stringify(position)}</div>
      <ExerciseOne />
      <ExerciseTwo resetPosition={resetPosition} />
    </div>
  );
}

export default App;
