import React, { useRef } from "react";

function ExerciseTwo({ resetPosition }) {
  const rerenders = useRef(0);
  return (
    <div>
      ExerciseTwo Rerenders: {rerenders.current++}
      <div>
        <button onClick={resetPosition}>Reset Position</button>
      </div>
    </div>
  );
}

export default ExerciseTwo;
