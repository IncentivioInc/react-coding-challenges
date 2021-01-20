import { useSelector } from "react-redux";

export const useCharacters = () => {
  // use your thunks here

  // This should be true when all characters have been loaded
  const loading = useSelector((state) => false);

  return {
    loading,
  };
};
