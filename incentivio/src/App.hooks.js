import { useSelector } from "react-redux";

export const useCharacters = () => {
  // use your thunks here

  // This should be false when all characters have been loaded
  const loading = false;

  return {
    loading,
  };
};
