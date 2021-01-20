import React, { useRef } from "react";

function ExerciseOne() {
  const rerenders = useRef(0);
  return <div>ExerciseOne Rerenders: {rerenders.current++}</div>;
}

export default ExerciseOne;
