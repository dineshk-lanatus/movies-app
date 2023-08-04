import { createContext, useState } from "react";
import { MOVIES } from "../Data";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState(MOVIES);
  const [searched, setSearched] = useState(movies);

  return (
    <MoviesContext.Provider
      value={{
        movie,
        setMovie,
        movies,
        setMovies,
        searched,
        setSearched,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
